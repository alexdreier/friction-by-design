'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePresenter } from '@/components/presenter-provider';
import { scenarios } from '@/lib/scenarios';

export default function StudentDashboard() {
  const { isPresenterMode } = usePresenter();

  const selfReflectionPrompts = [
    {
      question: "Did I do the thinking, or did AI?",
      explanation: "After using AI, ask yourself: Could I explain this work without looking at it? Do I understand why each part is there?"
    },
    {
      question: "What did I learn from this process?",
      explanation: "Learning happens in the struggle. If it felt too easy, you might have skipped the part where you actually grow."
    },
    {
      question: "Could I do this again without AI?",
      explanation: "If the answer is no, you might have used AI as a shortcut rather than a scaffold."
    },
    {
      question: "Am I prepared for what comes next?",
      explanation: "Assignments build on each other. If AI did the work, you might not have the foundation for future challenges."
    }
  ];

  const aiUseCases = [
    {
      title: "AI as a Brainstorming Partner",
      helpful: true,
      description: "Use AI to generate ideas when you're stuck, but then choose and develop the ideas yourself.",
      example: "Ask AI for 10 possible essay topics, then pick one and write your own thesis."
    },
    {
      title: "AI as an Answer Machine",
      helpful: false,
      description: "Having AI generate complete answers bypasses the learning entirely.",
      example: "Copying AI-generated essay paragraphs into your paper."
    },
    {
      title: "AI as a Study Tool",
      helpful: true,
      description: "Use AI to quiz yourself, explain concepts differently, or generate practice problems.",
      example: "Ask AI to create practice questions on a topic, then try to answer them yourself."
    },
    {
      title: "AI as a Writing Shortcut",
      helpful: false,
      description: "Having AI write for you means you don't develop writing skills.",
      example: "Asking AI to 'write my conclusion' instead of struggling through it yourself."
    },
    {
      title: "AI as an Accessibility Tool",
      helpful: true,
      description: "Use AI to help you access content—convert text to audio, simplify complex language, etc.",
      example: "Using AI to read a difficult text aloud or explain vocabulary you don't know."
    },
    {
      title: "AI as a Collaboration Replacement",
      helpful: false,
      description: "Working with AI instead of classmates means missing out on learning from peers.",
      example: "Using AI for group project work instead of discussing ideas with teammates."
    }
  ];

  // Scenarios from student perspective
  const relevantScenarios = scenarios.filter(s =>
    s.id === 'essay-writing-assistant' ||
    s.id === 'math-problem-solver' ||
    s.id === 'test-preparation' ||
    s.id === 'research-summarization'
  );

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Header */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`${isPresenterMode ? 'text-5xl' : 'text-4xl'}`}>📚</span>
          <div>
            <h1 className={`font-bold text-primary ${isPresenterMode ? 'text-4xl' : 'text-2xl'}`}>
              Student Dashboard
            </h1>
            <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : ''}`}>
              Understand when AI helps and when it shortcuts your learning
            </p>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="container mx-auto px-4 mb-8">
        <div className={`bg-primary/5 border-l-4 border-primary rounded-r-lg ${isPresenterMode ? 'p-8' : 'p-6'}`}>
          <p className={`text-foreground/90 ${isPresenterMode ? 'text-xl' : ''}`}>
            <strong>The key question:</strong> AI can make work feel easier, but easier isn&apos;t always
            better for learning. The struggle—wrestling with ideas, making mistakes, figuring things
            out—is where you actually grow. When AI does the thinking for you, you might finish
            faster but learn less.
          </p>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-6 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          When Does AI Help vs. Hurt Your Learning?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {aiUseCases.map((useCase, i) => (
            <Card
              key={i}
              className={`border-2 ${
                useCase.helpful
                  ? 'border-[var(--productive)] bg-[var(--productive-light)]'
                  : 'border-[var(--unproductive)] bg-[var(--unproductive-light)]'
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className={`${isPresenterMode ? 'text-xl' : ''} ${
                    useCase.helpful ? 'text-[var(--productive)]' : 'text-[var(--unproductive)]'
                  }`}>
                    {useCase.title}
                  </CardTitle>
                  <span className={`text-2xl`}>
                    {useCase.helpful ? '✓' : '✗'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className={`${isPresenterMode ? 'text-lg' : 'text-sm'} ${
                  useCase.helpful ? 'text-[var(--productive)]/80' : 'text-[var(--unproductive)]/80'
                }`}>
                  {useCase.description}
                </p>
                <div className={`bg-white/50 rounded p-2 ${isPresenterMode ? 'p-3' : ''}`}>
                  <p className={`${isPresenterMode ? '' : 'text-sm'} ${
                    useCase.helpful ? 'text-[var(--productive)]/70' : 'text-[var(--unproductive)]/70'
                  }`}>
                    <strong>Example:</strong> {useCase.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Self-Reflection */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          Questions to Ask Yourself
        </h2>
        <p className={`text-muted-foreground mb-6 ${isPresenterMode ? 'text-lg' : ''}`}>
          After using AI for schoolwork, pause and reflect:
        </p>
        <div className="space-y-4">
          {selfReflectionPrompts.map((prompt, i) => (
            <Card key={i}>
              <CardContent className={`${isPresenterMode ? 'p-6' : 'p-4'}`}>
                <p className={`font-semibold text-primary mb-2 ${isPresenterMode ? 'text-xl' : ''}`}>
                  {prompt.question}
                </p>
                <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                  {prompt.explanation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="container mx-auto px-4 mb-8">
        <Card className="bg-accent/10 border-accent">
          <CardHeader>
            <CardTitle className={`text-accent ${isPresenterMode ? 'text-2xl' : ''}`}>
              The Bottom Line
            </CardTitle>
          </CardHeader>
          <CardContent className={isPresenterMode ? 'text-lg' : ''}>
            <p className="mb-4">
              You&apos;re in school to develop skills and knowledge that will serve you for the rest
              of your life. AI can help you access learning, but it can&apos;t do the learning for you.
            </p>
            <p>
              <strong>Think of it this way:</strong> If you were training for a sport, you wouldn&apos;t
              have someone else do your workouts. The effort is the point. The same is true for
              developing your mind.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Relevant Scenarios */}
      <section className="container mx-auto px-4 mb-8">
        <h2 className={`font-bold mb-4 ${isPresenterMode ? 'text-3xl' : 'text-xl'}`}>
          See Yourself in These Scenarios
        </h2>
        <p className={`text-muted-foreground mb-6 ${isPresenterMode ? 'text-lg' : ''}`}>
          Explore situations you might face and think through the implications.
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
              Learn the Framework
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
