import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, ChevronDown, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const royalHouses = [
  {
    name: "House of Windsor",
    region: "United Kingdom",
    philosophy: "Constitutional Stewardship",
    wisdom: "True sovereignty lies in service to the people and the preservation of ancient freedoms.",
    contributions: ["Parliamentary Democracy", "Commonwealth Principles", "Environmental Custodianship"],
    color: "from-red-500 to-blue-600"
  },
  {
    name: "Chrysanthemum Throne", 
    region: "Japan",
    philosophy: "Harmony with Nature",
    wisdom: "The way of governance is like tending a garden - gentle guidance allows natural flourishing.",
    contributions: ["Sustainable Development", "Intergenerational Thinking", "Harmony Protocols"],
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "Zulu Royal House",
    region: "Southern Africa", 
    philosophy: "Ubuntu Governance",
    wisdom: "I am because we are. Leadership exists to uplift the collective spirit of all beings.",
    contributions: ["Community Consensus", "Ancestral Wisdom", "Land Restoration"],
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Dragon Throne Legacy",
    region: "Historical China",
    philosophy: "Mandate of Heaven",
    wisdom: "Govern with the seasons, lead with cosmic rhythm, and remember the ancestors in every decision.",
    contributions: ["Long-term Planning", "Bureaucratic Merit", "Ecological Balance"],
    color: "from-yellow-500 to-red-600"
  },
  {
    name: "Kingdom of Bhutan",
    region: "Himalayas",
    philosophy: "Gross National Happiness",
    wisdom: "True progress is measured not in wealth, but in the wellbeing of all sentient life.",
    contributions: ["Carbon Negative Policies", "Happiness Index", "Forest Conservation"],
    color: "from-blue-500 to-green-600"
  }
];

const coreProtocols = [
  {
    title: "Planetary Stewardship Accords",
    description: "Fundamental principles for Earth system governance",
    sections: ["Biosphere Protection", "Climate Stability", "Resource Harmony"]
  },
  {
    title: "Intergenerational Justice Protocols",
    description: "Ensuring decision-making considers seven generations ahead",
    sections: ["Future Impact Assessment", "Youth Council Integration", "Ancestral Wisdom"]
  },
  {
    title: "Cosmic Citizenship Framework",
    description: "Rights and responsibilities for interplanetary governance",
    sections: ["Universal Dignity", "Species Protection", "Cosmic Commons"]
  }
];

export const Codex = () => {
  const [expandedHouse, setExpandedHouse] = useState<string | null>(null);
  const [expandedProtocol, setExpandedProtocol] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cosmic-gradient pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="h-16 w-16 text-primary animate-celestial-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-celestial-pulse" />
            </div>
          </div>
          
          <h1 className="font-royal text-5xl md:text-6xl font-bold mb-4 text-foreground">
            The AEGIS Codex
          </h1>
          
          <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A living meta-constitution woven from the wisdom of royal houses, 
            indigenous traditions, and cosmic consciousness for planetary governance.
          </p>
        </div>

        {/* Core Protocols */}
        <section className="mb-16">
          <h2 className="font-royal text-3xl font-bold mb-8 text-foreground flex items-center">
            <Sparkles className="h-8 w-8 text-primary mr-3" />
            Crown Protocols
          </h2>
          
          <div className="space-y-4">
            {coreProtocols.map((protocol, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-royal sacred-transition">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedProtocol(expandedProtocol === protocol.title ? null : protocol.title)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-royal text-xl font-semibold text-foreground mb-2">
                        {protocol.title}
                      </h3>
                      <p className="font-cosmic text-muted-foreground">
                        {protocol.description}
                      </p>
                    </div>
                    
                    {expandedProtocol === protocol.title ? (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  
                  {expandedProtocol === protocol.title && (
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <div className="grid md:grid-cols-3 gap-4">
                        {protocol.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-cosmic font-semibold text-foreground mb-2">
                              {section}
                            </h4>
                            <p className="font-cosmic text-sm text-muted-foreground">
                              Detailed guidelines and implementation frameworks
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Royal House Wisdom */}
        <section>
          <h2 className="font-royal text-3xl font-bold mb-8 text-foreground flex items-center">
            <Crown className="h-8 w-8 text-primary mr-3" />
            Royal House Contributions
          </h2>
          
          <div className="grid gap-6">
            {royalHouses.map((house, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-royal sacred-transition overflow-hidden"
              >
                {/* House Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedHouse(expandedHouse === house.name ? null : house.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={cn("w-12 h-12 rounded-full bg-gradient-to-br", house.color, "p-3")}>
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="font-royal text-xl font-semibold text-foreground">
                          {house.name}
                        </h3>
                        <p className="font-cosmic text-muted-foreground">
                          {house.region} • {house.philosophy}
                        </p>
                      </div>
                    </div>
                    
                    {expandedHouse === house.name ? (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                {/* Expanded Content */}
                {expandedHouse === house.name && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border/30 pt-6">
                      {/* Wisdom Quote */}
                      <div className="mb-6 p-4 bg-muted/20 rounded-lg border-l-4 border-primary/50">
                        <Quote className="h-5 w-5 text-primary mb-2" />
                        <p className="font-royal text-foreground italic leading-relaxed">
                          "{house.wisdom}"
                        </p>
                      </div>
                      
                      {/* Contributions */}
                      <div>
                        <h4 className="font-cosmic font-semibold text-foreground mb-3">
                          Key Contributions to the Codex:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {house.contributions.map((contribution, contribIndex) => (
                            <Badge 
                              key={contribIndex}
                              variant="secondary"
                              className="font-cosmic bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {contribution}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section className="mt-16 text-center">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8">
            <h3 className="font-royal text-2xl font-bold mb-4 text-foreground">
              Contribute to the Living Codex
            </h3>
            <p className="font-cosmic text-muted-foreground mb-6 max-w-2xl mx-auto">
              The AEGIS Codex evolves through collective wisdom. Royal houses, indigenous councils,
              and cosmic citizens continuously contribute to our shared governance framework.
            </p>
            <Button size="lg" className="font-cosmic font-semibold royal-glow">
              Submit Wisdom Contribution
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Codex;