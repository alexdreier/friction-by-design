'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LensCard } from '@/components/lens-card';
import { usePresenter } from '@/components/presenter-provider';
import { lenses, getProductiveLenses, getUnproductiveLenses } from '@/lib/lenses';

export default function FrameworkPage() {
  const { isPresenterMode } = usePresenter();
  const [selectedLens, setSelectedLens] = useState<string | null>(null);

  const productiveLenses = getProductiveLenses();
  const unproductiveLenses = getUnproductiveLenses();

  return (
    <div className={`${isPresenterMode ? 'py-12' : 'py-8'}`}>
      {/* Header */}
      <section className="container mx-auto px-4 text-center mb-12">
        <h1 className={`font-bold text-primary mb-4 ${isPresenterMode ? 'text-5xl' : 'text-3xl'}`}>
          Five Lenses for Designing with AI
        </h1>
        <p className={`text-muted-foreground max-w-3xl mx-auto ${isPresenterMode ? 'text-xl' : 'text-lg'}`}>
          Use these lenses to evaluate how AI affects learning experiences.
          Each lens helps you see a different aspect of friction in learning.
        </p>
      </section>

      {/* Core Principle */}
      <section className="container mx-auto px-4 mb-12">
        <div className={`bg-gradient-to-r from-[var(--productive-light)] to-[var(--unproductive-light)] rounded-2xl max-w-4xl mx-auto ${isPresenterMode ? 'p-10' : 'p-6 md:p-8'}`}>
          <p className={`text-center text-foreground/90 ${isPresenterMode ? 'text-2xl' : 'text-lg'}`}>
            The goal is not to preserve <em>all</em> friction, but to preserve the mental, social,
            and emotional efforts that make learning meaningful while reducing or eliminating
            obstacles that get in the way.
          </p>
        </div>
      </section>

      {/* Tabs for Productive vs Unproductive */}
      <section className="container mx-auto px-4 mb-12">
        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className={`grid w-full grid-cols-3 mb-8 ${isPresenterMode ? 'h-14' : ''}`}>
            <TabsTrigger value="all" className={isPresenterMode ? 'text-lg' : ''}>
              All Lenses
            </TabsTrigger>
            <TabsTrigger value="productive" className={isPresenterMode ? 'text-lg' : ''}>
              Productive Friction
            </TabsTrigger>
            <TabsTrigger value="unproductive" className={isPresenterMode ? 'text-lg' : ''}>
              Unproductive Friction
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              {/* Productive Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-[var(--productive)]" />
                  <h2 className={`font-semibold text-[var(--productive)] ${isPresenterMode ? 'text-2xl' : 'text-xl'}`}>
                    Productive Friction — Preserve & Protect
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {productiveLenses.map(lens => (
                    <LensCard
                      key={lens.id}
                      lens={lens}
                      expanded={selectedLens === lens.id}
                      onClick={() => setSelectedLens(selectedLens === lens.id ? null : lens.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Unproductive Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-[var(--unproductive)]" />
                  <h2 className={`font-semibold text-[var(--unproductive)] ${isPresenterMode ? 'text-2xl' : 'text-xl'}`}>
                    Unproductive Friction — Reduce & Remove
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {unproductiveLenses.map(lens => (
                    <LensCard
                      key={lens.id}
                      lens={lens}
                      expanded={selectedLens === lens.id}
                      onClick={() => setSelectedLens(selectedLens === lens.id ? null : lens.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="productive">
            <div className="mb-6">
              <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : ''}`}>
                These forms of friction drive learning forward. They represent the mental, social,
                and emotional efforts that make learning meaningful. Use AI to support these
                struggles without eliminating them.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {productiveLenses.map(lens => (
                <LensCard
                  key={lens.id}
                  lens={lens}
                  expanded={selectedLens === lens.id}
                  onClick={() => setSelectedLens(selectedLens === lens.id ? null : lens.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unproductive">
            <div className="mb-6">
              <p className={`text-muted-foreground ${isPresenterMode ? 'text-lg' : ''}`}>
                These forms of friction get in the way of learning without adding value.
                They often fall hardest on students who already face barriers.
                AI can help reduce these obstacles so students can engage with the real learning.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {unproductiveLenses.map(lens => (
                <LensCard
                  key={lens.id}
                  lens={lens}
                  expanded={selectedLens === lens.id}
                  onClick={() => setSelectedLens(selectedLens === lens.id ? null : lens.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <p className={`text-muted-foreground mb-4 ${isPresenterMode ? 'text-xl' : ''}`}>
          Ready to apply these lenses to real situations?
        </p>
        <Link href="/scenarios">
          <Button size={isPresenterMode ? 'lg' : 'default'} className={isPresenterMode ? 'text-lg px-8' : ''}>
            Explore Scenarios
          </Button>
        </Link>
      </section>
    </div>
  );
}
