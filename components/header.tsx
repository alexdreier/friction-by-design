'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { usePresenter } from '@/components/presenter-provider';

export function Header() {
  const pathname = usePathname();
  const { isPresenterMode, togglePresenterMode, role, setRole } = usePresenter();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/framework', label: 'Framework' },
    { href: '/scenarios', label: 'Scenarios' },
  ];

  const roleLabels: Record<string, string> = {
    admin: 'Administrator',
    educator: 'Educator',
    student: 'Student',
  };

  return (
    <header className={`border-b bg-white sticky top-0 z-50 ${isPresenterMode ? 'py-4' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">FD</span>
            </div>
            <span className={`font-semibold text-primary ${isPresenterMode ? 'text-xl' : 'text-lg'}`}>
              Friction by Design
            </span>
          </Link>

          <nav className={`hidden md:flex items-center gap-1 ${isPresenterMode ? 'gap-2' : ''}`}>
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'secondary' : 'ghost'}
                  size={isPresenterMode ? 'lg' : 'sm'}
                  className={isPresenterMode ? 'text-lg' : ''}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {role && (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Viewing as:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setRole(null)}
                className="font-medium"
              >
                {roleLabels[role]}
                <span className="ml-1 text-xs text-muted-foreground">×</span>
              </Button>
            </div>
          )}

          <Button
            variant={isPresenterMode ? 'default' : 'outline'}
            size="sm"
            onClick={togglePresenterMode}
            className={isPresenterMode ? 'bg-accent text-accent-foreground' : ''}
          >
            {isPresenterMode ? 'Exit Presenter' : 'Presenter Mode'}
          </Button>
        </div>
      </div>
    </header>
  );
}
