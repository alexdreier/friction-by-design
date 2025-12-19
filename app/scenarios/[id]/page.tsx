'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { usePresenter } from '@/components/presenter-provider';
import { getScenarioById, scenarios } from '@/lib/scenarios';
import { getLensById } from '@/lib/lenses';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ScenarioPage({ params }: PageProps) {
  const { id } = use(params);
  const { isPresenterMode, currentLensIndex, setCurrentLensIndex, nextLens, prevLens } = usePresenter();
  const [expandedLens, setExpandedLens] = useState<string | null>(null);

  const scenario = getScenarioById(id);

  if (!scenario) {
    notFound();
  }

  // Get current and adjacent scenarios for navigation
  const currentIndex = scenarios.findIndex(s => s.id === id);
  const prevScenario = currentIndex > 0 ? scenarios[currentIndex - 1] : null;
  const nextScenario = currentIndex < scenarios.length - 1 ? scenarios[currentIndex + 1] : null;

  // In presenter mode, show one lens at a time
  const analysisLenses = scenario.analysis.map(a => getLensById(a.lensId)).filter(Boolean);
  const currentAnalysis = isPresenterMode ? scenario.analysis[currentLensIndex] : null;
  const currentLens = currentAnalysis ? getLensById(currentAnalysis.lensId) : null;

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Back link */}
      <div className="container mx-auto px-4 mb-6">
        <Link href="/scenarios">
          <Button variant="ghost" size="sm">
            ← Back to Scenarios
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`font-bold text-primary mb-4 ${isPresenterMode ? 'text-5xl' : 'text-3xl'}`}>
            {scenario.title}
          </h1>
          <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : 'text-lg'}`}>
            {scenario.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {scenario.educationLevel.map(level => (
              <Badge key={level} variant="secondary">
                {level === 'k-12' ? 'K-12' : level === 'higher-ed' ? 'Higher Ed' : 'Professional'}
              </Badge>
            ))}
            {scenario.subjectArea.map(subject => (
              <Badge key={subject} variant="outline">
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className={isPresenterMode ? 'text-2xl' : 'text-xl'}>
                The Scenario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-foreground/90 leading-relaxed ${isPresenterMode ? 'text-xl' : ''}`}>
                {scenario.context}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decision Point */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-primary/5 border-l-4 border-primary rounded-r-lg ${isPresenterMode ? 'p-8' : 'p-6'}`}>
            <h2 className={`font-semibold text-primary mb-2 ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
              The Question
            </h2>
            <p className={`text-foreground/90 ${isPresenterMode ? 'text-xl' : ''}`}>
              {scenario.decisionPoint}
            </p>
          </div>
        </div>
      </section>

      {/* Analysis through Lenses */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-bold mb-6 ${isPresenterMode ? 'text-3xl' : 'text-2xl'}`}>
            Analyze Through Each Lens
          </h2>

          {isPresenterMode ? (
            // Presenter Mode: Step through one lens at a time
            <div>
              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {scenario.analysis.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentLensIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentLensIndex
                        ? 'bg-primary scale-125'
                        : 'bg-muted hover:bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Current lens card */}
              {currentLens && currentAnalysis && (
                <Card className={`border-2 ${
                  currentLens.frictionType === 'productive'
                    ? 'border-[var(--productive)] bg-[var(--productive-light)]'
                    : 'border-[var(--unproductive)] bg-[var(--unproductive-light)]'
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{currentLens.icon}</span>
                      <div>
                        <CardTitle className="text-2xl" style={{
                          color: currentLens.frictionType === 'productive'
                            ? 'var(--productive)'
                            : 'var(--unproductive)'
                        }}>
                          {currentLens.name}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {currentLens.action}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Consideration</h3>
                      <p className="text-lg">{currentAnalysis.consideration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">Discussion Prompts</h3>
                      <ul className="space-y-3">
                        {currentAnalysis.discussionPrompts.map((prompt, i) => (
                          <li key={i} className="flex items-start gap-3 text-lg">
                            <span className="text-primary font-bold">{i + 1}.</span>
                            <span>{prompt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevLens}
                  disabled={currentLensIndex === 0}
                  className="text-lg"
                >
                  ← Previous Lens
                </Button>
                <Button
                  size="lg"
                  onClick={nextLens}
                  disabled={currentLensIndex === scenario.analysis.length - 1}
                  className="text-lg"
                >
                  Next Lens →
                </Button>
              </div>
            </div>
          ) : (
            // Normal Mode: Show all lenses
            <div className="space-y-4">
              {scenario.analysis.map(analysis => {
                const lens = getLensById(analysis.lensId);
                if (!lens) return null;
                const isExpanded = expandedLens === lens.id;
                const isProductive = lens.frictionType === 'productive';

                return (
                  <Card
                    key={lens.id}
                    className={`cursor-pointer transition-all border-2 ${
                      isProductive
                        ? 'border-[var(--productive)] bg-[var(--productive-light)]'
                        : 'border-[var(--unproductive)] bg-[var(--unproductive-light)]'
                    }`}
                    onClick={() => setExpandedLens(isExpanded ? null : lens.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lens.icon}</span>
                          <CardTitle className={isProductive ? 'text-[var(--productive)]' : 'text-[var(--unproductive)]'}>
                            {lens.name}
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className={isProductive ? 'border-[var(--productive)] text-[var(--productive)]' : 'border-[var(--unproductive)] text-[var(--unproductive)]'}>
                          {lens.action}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`${isProductive ? 'text-[var(--productive)]/80' : 'text-[var(--unproductive)]/80'}`}>
                        {analysis.consideration}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-current/10">
                          <h4 className={`font-semibold mb-2 ${isProductive ? 'text-[var(--productive)]' : 'text-[var(--unproductive)]'}`}>
                            Discussion Prompts
                          </h4>
                          <ul className="space-y-2">
                            {analysis.discussionPrompts.map((prompt, i) => (
                              <li key={i} className={`flex items-start gap-2 text-sm ${isProductive ? 'text-[var(--productive)]/70' : 'text-[var(--unproductive)]/70'}`}>
                                <span className="font-semibold">{i + 1}.</span>
                                <span>{prompt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Design Improvement */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-accent/10 border-accent">
            <CardHeader>
              <CardTitle className={`text-accent ${isPresenterMode ? 'text-2xl' : ''}`}>
                Design Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-foreground/90 ${isPresenterMode ? 'text-xl' : ''}`}>
                {scenario.designImprovement}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Navigation */}
      <section className="container mx-auto px-4 mt-8">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prevScenario ? (
            <Link href={`/scenarios/${prevScenario.id}`}>
              <Button variant="outline" className={isPresenterMode ? 'text-lg' : ''}>
                ← {prevScenario.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextScenario && (
            <Link href={`/scenarios/${nextScenario.id}`}>
              <Button variant="outline" className={isPresenterMode ? 'text-lg' : ''}>
                {nextScenario.title} →
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
