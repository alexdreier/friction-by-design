'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScenarioCard } from '@/components/scenario-card';
import { usePresenter } from '@/components/presenter-provider';
import { scenarios, type EducationLevel, type SubjectArea } from '@/lib/scenarios';
import { lenses } from '@/lib/lenses';

export default function ScenariosPage() {
  const { isPresenterMode } = usePresenter();
  const [levelFilter, setLevelFilter] = useState<EducationLevel | 'all'>('all');
  const [subjectFilter, setSubjectFilter] = useState<SubjectArea | 'all'>('all');
  const [lensFilter, setLensFilter] = useState<string | 'all'>('all');

  const filteredScenarios = scenarios.filter(scenario => {
    if (levelFilter !== 'all' && !scenario.educationLevel.includes(levelFilter)) return false;
    if (subjectFilter !== 'all' && !scenario.subjectArea.includes(subjectFilter)) return false;
    if (lensFilter !== 'all' && !scenario.relevantLenses.includes(lensFilter)) return false;
    return true;
  });

  const levels: { value: EducationLevel | 'all'; label: string }[] = [
    { value: 'all', label: 'All Levels' },
    { value: 'k-12', label: 'K-12' },
    { value: 'higher-ed', label: 'Higher Ed' },
    { value: 'professional', label: 'Professional' },
  ];

  const subjects: { value: SubjectArea | 'all'; label: string }[] = [
    { value: 'all', label: 'All Subjects' },
    { value: 'writing', label: 'Writing' },
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'language', label: 'Language' },
    { value: 'cs', label: 'Computer Science' },
    { value: 'general', label: 'General' },
  ];

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Header */}
      <section className="container mx-auto px-4 text-center mb-8">
        <h1 className={`font-bold text-primary mb-4 ${isPresenterMode ? 'text-5xl' : 'text-3xl'}`}>
          Explore Scenarios
        </h1>
        <p className={`text-muted-foreground max-w-3xl mx-auto ${isPresenterMode ? 'text-xl' : 'text-lg'}`}>
          Real-world situations to analyze through the Friction by Design framework.
          Select a scenario to explore how each lens applies.
        </p>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Level Filter */}
          <div>
            <p className={`text-muted-foreground mb-2 ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
              Education Level
            </p>
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <Button
                  key={level.value}
                  variant={levelFilter === level.value ? 'default' : 'outline'}
                  size={isPresenterMode ? 'default' : 'sm'}
                  onClick={() => setLevelFilter(level.value)}
                  className={isPresenterMode ? 'text-lg' : ''}
                >
                  {level.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <p className={`text-muted-foreground mb-2 ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
              Subject Area
            </p>
            <div className="flex flex-wrap gap-2">
              {subjects.map(subject => (
                <Button
                  key={subject.value}
                  variant={subjectFilter === subject.value ? 'default' : 'outline'}
                  size={isPresenterMode ? 'default' : 'sm'}
                  onClick={() => setSubjectFilter(subject.value)}
                  className={isPresenterMode ? 'text-lg' : ''}
                >
                  {subject.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Lens Filter */}
          <div>
            <p className={`text-muted-foreground mb-2 ${isPresenterMode ? 'text-lg' : 'text-sm'}`}>
              Focus Lens
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={lensFilter === 'all' ? 'default' : 'outline'}
                size={isPresenterMode ? 'default' : 'sm'}
                onClick={() => setLensFilter('all')}
                className={isPresenterMode ? 'text-lg' : ''}
              >
                All Lenses
              </Button>
              {lenses.map(lens => {
                const isProductive = lens.frictionType === 'productive';
                const isActive = lensFilter === lens.id;
                return (
                  <Button
                    key={lens.id}
                    variant={isActive ? 'default' : 'outline'}
                    size={isPresenterMode ? 'default' : 'sm'}
                    onClick={() => setLensFilter(lens.id)}
                    className={`${isPresenterMode ? 'text-lg' : ''} ${
                      !isActive && isProductive
                        ? 'border-[var(--productive)] text-[var(--productive)] hover:bg-[var(--productive-light)]'
                        : !isActive
                        ? 'border-[var(--unproductive)] text-[var(--unproductive)] hover:bg-[var(--unproductive-light)]'
                        : ''
                    }`}
                  >
                    {lens.icon} {lens.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {filteredScenarios.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-muted-foreground ${isPresenterMode ? 'text-xl' : ''}`}>
                No scenarios match your filters. Try adjusting your selection.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setLevelFilter('all');
                  setSubjectFilter('all');
                  setLensFilter('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredScenarios.map(scenario => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
