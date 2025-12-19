'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'admin' | 'educator' | 'student' | null;

interface PresenterState {
  isPresenterMode: boolean;
  togglePresenterMode: () => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  currentLensIndex: number;
  setCurrentLensIndex: (index: number) => void;
  nextLens: () => void;
  prevLens: () => void;
}

const PresenterContext = createContext<PresenterState | undefined>(undefined);

export function PresenterProvider({ children }: { children: React.ReactNode }) {
  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const [role, setRole] = useState<UserRole>(null);
  const [currentLensIndex, setCurrentLensIndex] = useState(0);

  // Check URL for presenter mode on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('presenter') === 'true') {
      setIsPresenterMode(true);
    }
  }, []);

  const togglePresenterMode = () => {
    setIsPresenterMode(prev => !prev);
  };

  const nextLens = () => {
    setCurrentLensIndex(prev => Math.min(prev + 1, 4));
  };

  const prevLens = () => {
    setCurrentLensIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <PresenterContext.Provider
      value={{
        isPresenterMode,
        togglePresenterMode,
        role,
        setRole,
        currentLensIndex,
        setCurrentLensIndex,
        nextLens,
        prevLens,
      }}
    >
      {children}
    </PresenterContext.Provider>
  );
}

export function usePresenter() {
  const context = useContext(PresenterContext);
  if (context === undefined) {
    throw new Error('usePresenter must be used within a PresenterProvider');
  }
  return context;
}
