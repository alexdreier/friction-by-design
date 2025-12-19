'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePresenter, UserRole } from '@/components/presenter-provider';
import { useRouter } from 'next/navigation';

interface RoleCardProps {
  role: UserRole;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export function RoleCard({ role, title, description, icon, features }: RoleCardProps) {
  const { setRole, isPresenterMode } = usePresenter();
  const router = useRouter();

  const handleClick = () => {
    if (role) {
      setRole(role);
      router.push(`/${role}/dashboard`);
    }
  };

  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 ${
        isPresenterMode ? 'p-2' : ''
      }`}
      onClick={handleClick}
    >
      <CardHeader className={isPresenterMode ? 'pb-4' : ''}>
        <div className={`text-4xl mb-2 ${isPresenterMode ? 'text-5xl mb-4' : ''}`}>
          {icon}
        </div>
        <CardTitle className={isPresenterMode ? 'text-2xl' : 'text-xl'}>
          {title}
        </CardTitle>
        <CardDescription className={isPresenterMode ? 'text-lg' : ''}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={`space-y-2 ${isPresenterMode ? 'text-lg space-y-3' : 'text-sm'}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
