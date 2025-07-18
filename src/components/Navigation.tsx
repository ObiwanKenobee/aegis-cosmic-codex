import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Globe, BookOpen, Map, Sparkles, TreePine, Scroll, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Regnum', href: '/', icon: Crown },
  { name: 'AEGIS Codex', href: '/codex', icon: BookOpen },
  { name: 'Crown Bioregions', href: '/bioregions', icon: Map },
  { name: 'Cosmopolis', href: '/cosmopolis', icon: Globe },
  { name: 'GaiaNet', href: '/gaianet', icon: Sparkles },
  { name: 'Royal Gardens', href: '/gardens', icon: TreePine },
  { name: 'Ascension Treaty', href: '/treaty', icon: Scroll },
  { name: 'Governance', href: '/governance', icon: Shield },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Crown className="h-8 w-8 text-primary group-hover:text-primary-glow sacred-transition" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary-glow/30 sacred-transition" />
            </div>
            <div>
              <div className="font-royal font-bold text-xl text-foreground">AEGIS</div>
              <div className="font-cosmic text-xs text-muted-foreground tracking-wider">REGNUM TERRAE ET CAELORUM</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg sacred-transition group",
                    isActive 
                      ? "bg-primary/20 text-primary shadow-cosmic-glow" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <item.icon className="h-4 w-4 mr-2 group-hover:scale-110 sacred-transition" />
                  <span className="font-cosmic text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" className="royal-glow font-cosmic font-medium">
              Enter the Codex
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={cn(
                  "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                )} />
                <span className={cn(
                  "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
                  isOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                )} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg sacred-transition",
                      isActive 
                        ? "bg-primary/20 text-primary shadow-cosmic-glow" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="font-cosmic">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="default" 
                  className="w-full royal-glow font-cosmic font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Enter the Codex
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};