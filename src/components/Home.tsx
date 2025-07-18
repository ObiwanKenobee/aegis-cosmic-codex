import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Crown, Globe, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from './SEOHead';
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
    <>
      <SEOHead
        title="AEGIS: Regnum Terrae et Caelorum - Ethical Planetary Governance Platform"
        description="Join the cosmic citizenship movement for Earth, Ocean, and Space. Uniting royal wisdom, indigenous knowledge, and AI for planetary stewardship. Discover bioregional governance, regenerative economics, and interplanetary ethics."
        keywords={[
          "planetary stewardship", "ethical governance", "indigenous wisdom", "royal houses",
          "climate action", "biodiversity conservation", "sustainable development", 
          "interplanetary colonization", "cosmic citizenship", "decentralized governance",
          "AI ethics", "environmental justice", "traditional ecological knowledge",
          "carbon credits", "bioregional planning", "space ethics", "ecological restoration",
          "community governance", "ancestral knowledge", "regenerative economics",
          "Pacific Islands climate", "Amazon conservation", "Himalayan glaciers",
          "coral reef restoration", "indigenous rights", "space colonization ethics",
          "Mars governance", "lunar settlements", "asteroid mining ethics",
          "climate vulnerable nations", "small island states", "biodiversity hotspots"
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AEGIS: Regnum Terrae et Caelorum",
          "description": "Ethical planetary governance platform for climate-vulnerable regions worldwide",
          "url": typeof window !== 'undefined' ? window.location.origin : 'https://aegis-cosmic.com',
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://aegis-cosmic.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "audience": {
            "@type": "Audience",
            "audienceType": "Environmental Leaders, Indigenous Communities, Policy Makers, Royal Houses, Climate Activists, Space Industry"
          },
          "geographicArea": [
            { "@type": "Place", "name": "Pacific Islands" },
            { "@type": "Place", "name": "Amazon Basin" },
            { "@type": "Place", "name": "Himalayas" },
            { "@type": "Place", "name": "Coral Triangle" },
            { "@type": "Place", "name": "Madagascar" },
            { "@type": "Place", "name": "Congo Basin" },
            { "@type": "Place", "name": "Maldives" },
            { "@type": "Place", "name": "Bangladesh" },
            { "@type": "Place", "name": "Philippines" },
            { "@type": "Place", "name": "Indigenous Territories Worldwide" }
          ]
        }}
      />
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

      {/* Regional Focus Section for SEO */}
      <section className="py-16 px-4 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-royal text-3xl font-bold mb-4 text-foreground">
              Priority Regions for Planetary Stewardship
            </h3>
            <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto">
              AEGIS prioritizes climate-vulnerable regions, biodiversity hotspots, and indigenous territories worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "Pacific Islands",
                countries: "Tuvalu, Kiribati, Marshall Islands, Palau, Fiji",
                urgency: "Sea level rise, coral bleaching, freshwater scarcity",
                solutions: "Coral restoration, renewable energy, water security"
              },
              {
                region: "Amazon Basin", 
                countries: "Brazil, Peru, Colombia, Ecuador, Bolivia",
                urgency: "Deforestation, indigenous rights, biodiversity loss",
                solutions: "Forest protection, indigenous governance, carbon credits"
              },
              {
                region: "Himalayas",
                countries: "Nepal, Bhutan, Tibet, Northern India",
                urgency: "Glacial melt, water security, mountain ecosystems",
                solutions: "Glacial monitoring, watershed management, sustainable tourism"
              },
              {
                region: "Coral Triangle",
                countries: "Indonesia, Malaysia, Philippines, Papua New Guinea",
                urgency: "Marine biodiversity, overfishing, coastal erosion",
                solutions: "Marine protected areas, sustainable fishing, coral farming"
              },
              {
                region: "Madagascar",
                countries: "Madagascar, Comoros, Mauritius, Seychelles",
                urgency: "Endemic species loss, cyclones, food security",
                solutions: "Species conservation, climate adaptation, sustainable agriculture"
              },
              {
                region: "Congo Basin",
                countries: "Democratic Republic of Congo, Cameroon, Central African Republic",
                urgency: "Forest degradation, wildlife trafficking, community rights",
                solutions: "Anti-poaching, community forestry, eco-tourism"
              }
            ].map((region, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                <h4 className="font-royal text-lg font-semibold mb-2 text-foreground">
                  {region.region}
                </h4>
                <p className="font-cosmic text-sm text-muted-foreground mb-3">
                  {region.countries}
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="font-cosmic text-xs font-medium text-destructive">Challenges:</span>
                    <p className="font-cosmic text-xs text-muted-foreground">{region.urgency}</p>
                  </div>
                  <div>
                    <span className="font-cosmic text-xs font-medium text-primary">AEGIS Solutions:</span>
                    <p className="font-cosmic text-xs text-muted-foreground">{region.solutions}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Indigenous Knowledge Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-royal text-3xl font-bold mb-4 text-foreground">
            Indigenous Wisdom for Modern Challenges
          </h3>
          <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Learning from First Nations, Aboriginal communities, Maori, Inuit, and indigenous peoples worldwide
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { concept: "Ubuntu", culture: "African", principle: "I am because we are" },
              { concept: "Buen Vivir", culture: "Andean", principle: "Living well in harmony" },
              { concept: "Taonga", culture: "Māori", principle: "Sacred treasures of nature" },
              { concept: "Sila", culture: "Inuit", principle: "Breath of life in all things" }
            ].map((wisdom, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm p-4">
                <h4 className="font-royal font-semibold text-foreground mb-1">{wisdom.concept}</h4>
                <p className="font-cosmic text-sm text-primary mb-2">{wisdom.culture}</p>
                <p className="font-cosmic text-xs text-muted-foreground italic">"{wisdom.principle}"</p>
              </Card>
            ))}
          </div>
          <Button size="lg" variant="outline" className="font-cosmic font-semibold">
            Explore Indigenous Partnerships
          </Button>
        </div>
      </section>

      {/* Space Ethics Section */}
      <section className="py-16 px-4 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-royal text-3xl font-bold mb-4 text-foreground">
            Interplanetary Ethics & Space Governance
          </h3>
          <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Preparing ethical frameworks for Mars colonies, lunar settlements, and asteroid mining
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mars Colonization Ethics",
                description: "Governance frameworks for Red Planet settlements",
                keywords: "Mars governance, space colonization, interplanetary law"
              },
              {
                title: "Lunar Mining Protocols", 
                description: "Sustainable resource extraction on the Moon",
                keywords: "lunar mining, space resources, moon base governance"
              },
              {
                title: "Asteroid Belt Stewardship",
                description: "Ethical guidelines for asteroid mining operations",
                keywords: "asteroid mining, space mining ethics, orbital governance"
              }
            ].map((topic, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
                <h4 className="font-royal text-lg font-semibold mb-3 text-foreground">
                  {topic.title}
                </h4>
                <p className="font-cosmic text-muted-foreground mb-4">
                  {topic.description}
                </p>
                <div className="text-xs text-primary font-cosmic">
                  Keywords: {topic.keywords}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;