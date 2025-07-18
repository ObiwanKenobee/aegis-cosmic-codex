import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Crown, Globe, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import cosmicHero from '@/assets/cosmic-hero.jpg';

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-gradient">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cosmicHero})` }}
        >
          <div className="absolute inset-0 bg-cosmic-gradient/80" />
        </div>

        {/* Floating Cosmic Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-glow rounded-full opacity-30 animate-stellar-drift"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive Cursor Glow */}
        <div
          className="fixed w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl pointer-events-none z-10"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out',
          }}
        />

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Crown Symbol */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Crown className="h-24 w-24 text-primary animate-celestial-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-celestial-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-royal text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AEGIS
            </span>
          </h1>
          
          <h2 className="font-royal text-2xl md:text-4xl mb-8 text-foreground/90 font-medium tracking-wide">
            Regnum Terrae et Caelorum
          </h2>

          {/* Subtitle */}
          <p className="font-cosmic text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Decentralized Ethical Governance & Planetary Stewardship Platform
            <br />
            <em className="text-accent font-royal text-lg italic">
              "Govern not by dominion, but by discernment."
            </em>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/codex">
              <Button size="lg" className="font-cosmic font-semibold text-lg px-8 py-4 royal-glow group">
                Enter the Codex
                <BookOpen className="ml-2 h-5 w-5 group-hover:scale-110 sacred-transition" />
              </Button>
            </Link>
            
            <Link to="/bioregions">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-cosmic font-semibold text-lg px-8 py-4 border-primary/30 hover:bg-primary/10 group"
              >
                Explore Bioregions
                <Globe className="ml-2 h-5 w-5 group-hover:scale-110 sacred-transition" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-celestial-pulse" />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-royal text-4xl font-bold mb-4 text-foreground">
            Cosmic Governance Pillars
          </h3>
          <p className="font-cosmic text-lg text-muted-foreground max-w-2xl mx-auto">
            Ancient wisdom meets next-generation technology for planetary stewardship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "AEGIS Codex",
              description: "Living meta-constitution with wisdom from royal houses across Earth",
              href: "/codex",
              gradient: "from-primary to-primary-glow"
            },
            {
              icon: Globe,
              title: "Crown Bioregions",
              description: "Interactive stewardship zones protecting sacred lands and planetary arks",
              href: "/bioregions", 
              gradient: "from-secondary to-cosmic-glow"
            },
            {
              icon: Sparkles,
              title: "GaiaNet",
              description: "Satellite-backed planetary nervous system with ecological intelligence",
              href: "/gaianet",
              gradient: "from-accent to-cosmic-flare"
            }
          ].map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 sacred-transition bg-card/50 backdrop-blur-sm hover:shadow-royal"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 sacred-transition`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="font-royal text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h4>
                
                <p className="font-cosmic text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Link to={feature.href}>
                  <Button 
                    variant="ghost" 
                    className="font-cosmic group-hover:text-primary p-0 h-auto font-medium"
                  >
                    Explore Further
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 sacred-transition" />
                  </Button>
                </Link>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 sacred-transition pointer-events-none" />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};