import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export const Placeholder = ({ title, description, icon: Icon, comingSoon = true }: PlaceholderProps) => {
  return (
    <div className="min-h-screen bg-cosmic-gradient pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Icon className="h-20 w-20 text-primary animate-celestial-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-celestial-pulse" />
            </div>
          </div>
          
          <h1 className="font-royal text-4xl font-bold mb-4 text-foreground">
            {title}
          </h1>
          
          <p className="font-cosmic text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          
          {comingSoon && (
            <>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="font-cosmic text-sm text-primary font-medium">
                  ✨ Coming Soon in AEGIS v2.0
                </span>
              </div>
              
              <Button size="lg" variant="outline" className="font-cosmic font-semibold">
                Return to Codex
              </Button>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};