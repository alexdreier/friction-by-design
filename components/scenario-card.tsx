'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePresenter } from '@/components/presenter-provider';
import type { Scenario } from '@/lib/scenarios';
import { getLensById } from '@/lib/lenses';

interface ScenarioCardProps {
  scenario: Scenario;
}

const levelLabels: Record<string, string> = {
  'k-12': 'K-12',
  'higher-ed': 'Higher Ed',
  'professional': 'Professional',
};

const subjectLabels: Record<string, string> = {
  writing: 'Writing',
  math: 'Math',
  science: 'Science',
  language: 'Language',
  cs: 'Computer Science',
  general: 'General',
};

export function ScenarioCard({ scenario }: ScenarioCardProps) {
  const { isPresenterMode } = usePresenter();

  return (
    <Link href={`/scenarios/${scenario.id}`}>
      <Card className={`h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 cursor-pointer ${isPresenterMode ? 'p-2' : ''}`}>
        <CardHeader className={isPresenterMode ? 'pb-4' : ''}>
          <CardTitle className={isPresenterMode ? 'text-2xl' : 'text-lg'}>
            {scenario.title}
          </CardTitle>
          <CardDescription className={isPresenterMode ? 'text-lg' : ''}>
            {scenario.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Education Level & Subject */}
          <div className="flex flex-wrap gap-2">
            {scenario.educationLevel.map(level => (
              <Badge key={level} variant="secondary" className={isPresenterMode ? 'text-sm' : 'text-xs'}>
                {levelLabels[level]}
              </Badge>
            ))}
            {scenario.subjectArea.map(subject => (
              <Badge key={subject} variant="outline" className={isPresenterMode ? 'text-sm' : 'text-xs'}>
                {subjectLabels[subject]}
              </Badge>
            ))}
          </div>

          {/* Relevant Lenses */}
          <div>
            <p className={`text-muted-foreground mb-1 ${isPresenterMode ? 'text-base' : 'text-xs'}`}>
              Key lenses:
            </p>
            <div className="flex flex-wrap gap-1">
              {scenario.relevantLenses.slice(0, 3).map(lensId => {
                const lens = getLensById(lensId);
                if (!lens) return null;
                const isProductive = lens.frictionType === 'productive';
                return (
                  <span
                    key={lensId}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${
                      isProductive
                        ? 'bg-[var(--productive-light)] text-[var(--productive)]'
                        : 'bg-[var(--unproductive-light)] text-[var(--unproductive)]'
                    } ${isPresenterMode ? 'text-sm' : 'text-xs'}`}
                  >
                    {lens.icon} {lens.name}
                  </span>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
