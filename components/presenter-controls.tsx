'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePresenter } from '@/components/presenter-provider';

export function PresenterControls() {
  const { isPresenterMode } = usePresenter();
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  if (!isPresenterMode) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showControls ? (
        <div className="bg-white shadow-xl rounded-lg p-4 border">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-3xl font-mono font-bold text-primary">
              {formatTime(timerSeconds)}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={isRunning ? 'destructive' : 'default'}
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? 'Pause' : 'Start'}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setTimerSeconds(0);
                setIsRunning(false);
              }}
            >
              Reset
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowControls(false)}
            >
              Hide
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setShowControls(true)}
          className="shadow-lg"
        >
          Timer
        </Button>
      )}
    </div>
  );
}
