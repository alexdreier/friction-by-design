'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePresenter } from '@/components/presenter-provider';
import type { Lens } from '@/lib/lenses';

interface LensCardProps {
  lens: Lens;
  expanded?: boolean;
  onClick?: () => void;
}

export function LensCard({ lens, expanded = false, onClick }: LensCardProps) {
  const { isPresenterMode } = usePresenter();

  const isProductive = lens.frictionType === 'productive';
  const bgColor = isProductive ? 'bg-[var(--productive-light)]' : 'bg-[var(--unproductive-light)]';
  const borderColor = isProductive ? 'border-[var(--productive)]' : 'border-[var(--unproductive)]';
  const textColor = isProductive ? 'text-[var(--productive)]' : 'text-[var(--unproductive)]';

  return (
    <Card
      className={`${bgColor} border-2 ${borderColor} transition-all ${
        onClick ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1' : ''
      } ${isPresenterMode ? 'p-2' : ''}`}
      onClick={onClick}
    >
      <CardHeader className={isPresenterMode ? 'pb-4' : ''}>
        <div className="flex items-start justify-between gap-2">
          <div className={`text-3xl ${isPresenterMode ? 'text-4xl' : ''}`}>{lens.icon}</div>
          <Badge
            variant="outline"
            className={`${textColor} border-current ${isPresenterMode ? 'text-sm px-3 py-1' : 'text-xs'}`}
          >
            {lens.action}
          </Badge>
        </div>
        <CardTitle className={`${textColor} ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
          {lens.name}
        </CardTitle>
        <CardDescription className={`${textColor}/70 ${isPresenterMode ? 'text-lg' : ''}`}>
          {lens.shortDescription}
        </CardDescription>
      </CardHeader>

      {expanded && (
        <CardContent className={`space-y-4 ${isPresenterMode ? 'text-lg' : ''}`}>
          <p className={`${textColor}/80`}>{lens.fullDescription}</p>

          <div className={`p-4 rounded-lg bg-white/50 ${isPresenterMode ? 'p-6' : ''}`}>
            <h4 className={`font-semibold ${textColor} mb-2 ${isPresenterMode ? 'text-xl' : 'text-sm'}`}>
              AI Guidance
            </h4>
            <p className={`${textColor}/70 ${isPresenterMode ? '' : 'text-sm'}`}>{lens.aiGuidance}</p>
          </div>

          <div>
            <h4 className={`font-semibold ${textColor} mb-2 ${isPresenterMode ? 'text-xl' : 'text-sm'}`}>
              Key Questions
            </h4>
            <ul className={`space-y-2 ${isPresenterMode ? 'space-y-3' : ''}`}>
              {lens.questions.map((question, i) => (
                <li key={i} className={`flex items-start gap-2 ${textColor}/70 ${isPresenterMode ? '' : 'text-sm'}`}>
                  <span className={textColor}>•</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
