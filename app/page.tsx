'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RoleCard } from '@/components/role-card';
import { usePresenter } from '@/components/presenter-provider';

export default function HomePage() {
  const { isPresenterMode } = usePresenter();

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mb-12">
        <h1 className={`font-bold text-primary mb-4 ${isPresenterMode ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
          Friction by Design
        </h1>
        <p className={`text-muted-foreground max-w-3xl mx-auto mb-2 ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
          A Framework for Centering Learning in the Age of AI
        </p>
        <p className={`text-muted-foreground/70 max-w-2xl mx-auto ${isPresenterMode ? 'text-xl' : 'text-base'}`}>
          From the Digital Fluency Project at WestEd
        </p>
      </section>

      {/* Key Message */}
      <section className="container mx-auto px-4 mb-12">
        <div className={`bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl max-w-4xl mx-auto ${isPresenterMode ? 'p-10' : 'p-6 md:p-8'}`}>
          <blockquote className={`text-center ${isPresenterMode ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            <p className="text-foreground/90 leading-relaxed">
              &ldquo;AI can scaffold or shortcut learning. The difference lies not in the tool,
              but in the way we design learning around it.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Core Concept */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`rounded-xl border-2 border-[var(--productive)] bg-[var(--productive-light)] ${isPresenterMode ? 'p-8' : 'p-6'}`}>
              <h3 className={`font-semibold text-[var(--productive)] mb-2 ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
                Productive Friction
              </h3>
              <p className={`text-[var(--productive)]/80 ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                Drives learning forward. Struggle, revision, dialogue, and cognitive effort—
                these are where growth happens.
              </p>
            </div>
            <div className={`rounded-xl border-2 border-[var(--unproductive)] bg-[var(--unproductive-light)] ${isPresenterMode ? 'p-8' : 'p-6'}`}>
              <h3 className={`font-semibold text-[var(--unproductive)] mb-2 ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
                Unproductive Friction
              </h3>
              <p className={`text-[var(--unproductive)]/80 ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
                Disrupts learning. Busywork, confusing instructions, access barriers—
                these get in the way without adding value.
              </p>
            </div>
          </div>
          <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : 'text-base'}`}>
            AI has the power to reduce both kinds of friction. This framework helps you use AI intentionally—
            preserving the friction that fuels learning while eliminating what gets in the way.
          </p>
        </div>
      </section>

      {/* Role Selection */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className={`font-bold text-center mb-2 ${isPresenterMode ? 'text-3xl' : 'text-2xl'}`}>
          Choose Your Path
        </h2>
        <p className={`text-muted-foreground text-center mb-8 ${isPresenterMode ? 'text-xl' : 'text-base'}`}>
          Select your role to explore relevant scenarios and applications
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <RoleCard
            role="admin"
            title="Administrator"
            description="Shape AI policy and implementation at scale"
            icon="🏛️"
            features={[
              "Policy design frameworks",
              "Implementation planning",
              "Institutional use cases",
              "Equity considerations"
            ]}
          />
          <RoleCard
            role="educator"
            title="Educator"
            description="Design learning experiences with AI intentionally"
            icon="👩‍🏫"
            features={[
              "Assignment redesign examples",
              "Classroom scenarios",
              "Assessment strategies",
              "Student guidance tools"
            ]}
          />
          <RoleCard
            role="student"
            title="Student"
            description="Understand when AI helps and when it shortcuts"
            icon="📚"
            features={[
              "Self-reflection prompts",
              "Learning ownership",
              "Ethical AI use",
              "Study strategies"
            ]}
          />
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/framework">
            <Button size={isPresenterMode ? 'lg' : 'default'} className={isPresenterMode ? 'text-lg px-8' : ''}>
              Explore the Framework
            </Button>
          </Link>
          <Link href="/scenarios">
            <Button variant="outline" size={isPresenterMode ? 'lg' : 'default'} className={isPresenterMode ? 'text-lg px-8' : ''}>
              Browse Scenarios
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 mt-16 pt-8 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            The Friction by Design Framework is a product of the{' '}
            <a
              href="https://digitalfluency.wested.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Digital Fluency project at WestEd
            </a>
          </p>
          <p className="mt-2">© 2025 WestEd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
