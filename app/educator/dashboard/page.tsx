'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePresenter } from '@/components/presenter-provider';
import { scenarios } from '@/lib/scenarios';
import { lenses } from '@/lib/lenses';

export default function EducatorDashboard() {
  const { isPresenterMode } = usePresenter();

  const redesignStrategies = [
    {
      title: "Shift from Product to Process",
      description: "Design assessments that evaluate thinking processes, not just final outputs. Require drafts, reflections, and explanations.",
      example: "Instead of grading an essay, grade the annotated outline plus a recorded explanation of the argument."
    },
    {
      title: "Build in Verification",
      description: "Create opportunities for students to demonstrate understanding without AI assistance, such as discussions or live problem-solving.",
      example: "Follow up written assignments with in-class Socratic seminars where students defend their work."
    },
    {
      title: "Decompose Complex Tasks",
      description: "Break assignments into steps that preserve cognitive ownership at each stage.",
      example: "Require thesis statements before research, outlines before drafts, peer feedback before revision."
    },
    {
      title: "Leverage AI for Access",
      description: "Use AI to reduce unproductive friction (formatting, translation, accessibility) while preserving productive friction.",
      example: "Allow AI for grammar checking but require students to explain their revisions."
    }
  ];

  const quickStartQuestions = [
    "What is the learning goal of this assignment—what should students be able to do or understand?",
    "Where is the productive struggle in this task? What thinking do I want students to do?",
    "If a student used AI to complete this, what learning would they miss?",
    "How can I verify that the student, not AI, did the cognitive work?",
    "Are there access barriers that AI could legitimately address?"
  ];

  // Scenarios most relevant to educators
  const relevantScenarios = scenarios.filter(s =>
    s.id === 'essay-writing-assistant' ||
    s.id === 'math-problem-solver' ||
    s.id === 'code-generation' ||
    s.id === 'test-preparation'
  );

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Header */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`${isPresenterMode ? 'text-5xl' : 'text-4xl'}`}>👩‍🏫</span>
          <div>
            <h1 className={`font-bold text-primary ${isPresenterMode ? 'text-4xl' : 'text-2xl'}`}>
              Educator Dashboard
            </h1>
            <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : ''}`}>
              Design learning experiences with AI intentionally
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="container mx-auto px-4 mb-8">
        <div className={`bg-primary/5 border-l-4 border-primary rounded-r-lg ${isPresenterMode ? 'p-8' : 'p-6'}`}>
          <p className={`text-foreground/90 ${isPresenterMode ? 'text-xl' : ''}`}>
            <strong>The educator&apos;s role:</strong> Redesign learning experiences so AI supports
            productive friction rather than eliminating it. The question isn&apos;t &quot;Should students
            use AI?&quot; but &quot;How do I design so that AI enhances thinking rather than replacing it?&quot;
          </p>
        </div>
      </section>

      {/* Quick Start Checklist */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Assignment Design Checklist
        </h2>
        <Card>
          <CardContent className={`${isPresenterMode ? 'p-8' : 'p-6'}`}>
            <p className={`text-muted-foreground mb-4 ${isPresenterMode ? 'text-lg' : ''}`}>
              Ask yourself these questions when designing or redesigning an assignment:
            </p>
            <ol className={`space-y-3 ${isPresenterMode ? 'text-lg' : ''}`}>
              {quickStartQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Redesign Strategies */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-6 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Redesign Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {redesignStrategies.map((strategy, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className={isPresenterMode ? 'text-xl' : ''}>{strategy.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                  {strategy.description}
                </p>
                <div className={`bg-muted/50 rounded-lg p-3 ${isPresenterMode ? 'p-4' : ''}`}>
                  <p className={`text-muted-foreground ${isPresenterMode ? '' : 'text-sm'}`}>
                    <strong>Example:</strong> {strategy.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Five Lenses Quick Reference */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Quick Lens Reference
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {lenses.map(lens => (
            <Card
              key={lens.id}
              className={`${
                lens.frictionType === 'productive'
                  ? 'bg-[var(--productive-light)] border-[var(--productive)]'
                  : 'bg-[var(--unproductive-light)] border-[var(--unproductive)]'
              } border`}
            >
              <CardContent className="p-4 text-center">
                <span className="text-2xl">{lens.icon}</span>
                <h3 className={`font-medium mt-2 ${isPresenterMode ? 'text-base' : 'text-sm'} ${
                  lens.frictionType === 'productive'
                    ? 'text-[var(--productive)]'
                    : 'text-[var(--unproductive)]'
                }`}>
                  {lens.name}
                </h3>
                <p className={`mt-1 font-semibold ${isPresenterMode ? 'text-sm' : 'text-xs'} ${
                  lens.frictionType === 'productive'
                    ? 'text-[var(--productive)]'
                    : 'text-[var(--unproductive)]'
                }`}>
                  {lens.action.toUpperCase()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/framework">
            <Button variant="outline" size={isPresenterMode ? 'lg' : 'default'}>
              Explore Full Framework
            </Button>
          </Link>
        </div>
      </section>

      {/* Relevant Scenarios */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Practice With Scenarios
        </h2>
        <p className={`text-muted-foreground mb-6 ${isPresenterMode ? 'text-lg' : ''}`}>
          Apply the framework to these common classroom situations.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {relevantScenarios.map(scenario => (
            <Link key={scenario.id} href={`/scenarios/${scenario.id}`}>
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className={isPresenterMode ? 'text-xl' : 'text-lg'}>
                    {scenario.title}
                  </CardTitle>
                  <CardDescription className={isPresenterMode ? 'text-base' : ''}>
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4">
          <Link href="/scenarios">
            <Button size={isPresenterMode ? 'lg' : 'default'}>
              Explore All Scenarios
            </Button>
          </Link>
          <Link href="/framework">
            <Button variant="outline" size={isPresenterMode ? 'lg' : 'default'}>
              Deep Dive: Framework
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
