'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePresenter } from '@/components/presenter-provider';
import { scenarios } from '@/lib/scenarios';

export default function AdminDashboard() {
  const { isPresenterMode } = usePresenter();

  const policyQuestions = [
    {
      question: "How do we define 'appropriate' AI use across different subjects and grade levels?",
      context: "Different learning contexts have different needs for productive friction."
    },
    {
      question: "What equity considerations should guide our AI policies?",
      context: "AI barriers and benefits often distribute unevenly across student populations."
    },
    {
      question: "How do we support teachers in redesigning assessments for the AI era?",
      context: "Traditional assessments may not reveal whether students or AI did the thinking."
    },
    {
      question: "What infrastructure and training investments are needed?",
      context: "Implementation requires more than policy—it requires capacity building."
    }
  ];

  const implementationAreas = [
    {
      title: "Policy Development",
      description: "Create nuanced guidelines that distinguish productive from unproductive friction",
      icon: "📋"
    },
    {
      title: "Professional Development",
      description: "Train educators to apply the framework in their specific contexts",
      icon: "🎓"
    },
    {
      title: "Assessment Redesign",
      description: "Shift focus from products to processes and cognitive ownership",
      icon: "📊"
    },
    {
      title: "Equity Auditing",
      description: "Ensure AI policies don't create new barriers for underserved students",
      icon: "⚖️"
    }
  ];

  // Filter scenarios relevant to administrators
  const relevantScenarios = scenarios.filter(s =>
    s.id === 'accessibility-accommodation' ||
    s.id === 'group-project' ||
    s.id === 'essay-writing-assistant'
  );

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Header */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`${isPresenterMode ? 'text-5xl' : 'text-4xl'}`}>🏛️</span>
          <div>
            <h1 className={`font-bold text-primary ${isPresenterMode ? 'text-4xl' : 'text-2xl'}`}>
              Administrator Dashboard
            </h1>
            <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : ''}`}>
              Shape AI policy and implementation at scale
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="container mx-auto px-4 mb-8">
        <div className={`bg-primary/5 border-l-4 border-primary rounded-r-lg ${isPresenterMode ? 'p-8' : 'p-6'}`}>
          <p className={`text-foreground/90 ${isPresenterMode ? 'text-xl' : ''}`}>
            <strong>The administrator&apos;s role:</strong> Create policies that empower educators to make
            contextual decisions about AI use, rather than blanket bans or permissions. The goal is
            institutional intentionality—systems that help everyone distinguish between friction
            that fuels learning and friction that obstructs it.
          </p>
        </div>
      </section>

      {/* Implementation Areas */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-6 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Key Implementation Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {implementationAreas.map((area, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className={`${isPresenterMode ? 'text-3xl' : 'text-2xl'}`}>{area.icon}</span>
                  <CardTitle className={isPresenterMode ? 'text-xl' : ''}>{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Policy Questions */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-6 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Questions for Policy Design
        </h2>
        <div className="space-y-4">
          {policyQuestions.map((item, i) => (
            <Card key={i} className="bg-muted/30">
              <CardContent className={`${isPresenterMode ? 'p-6' : 'p-4'}`}>
                <p className={`font-medium mb-2 ${isPresenterMode ? 'text-xl' : ''}`}>
                  {item.question}
                </p>
                <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                  {item.context}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Relevant Scenarios */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Scenarios for Discussion
        </h2>
        <p className={`text-muted-foreground mb-6 ${isPresenterMode ? 'text-lg' : ''}`}>
          Use these scenarios to explore policy implications with your leadership team.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
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
          <Link href="/framework">
            <Button size={isPresenterMode ? 'lg' : 'default'}>
              Review Framework
            </Button>
          </Link>
          <Link href="/scenarios">
            <Button variant="outline" size={isPresenterMode ? 'lg' : 'default'}>
              Explore All Scenarios
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
