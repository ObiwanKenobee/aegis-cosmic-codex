import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TreePine, Flower, Globe, Sparkles, Eye, Upload } from 'lucide-react';

const cosmicGardens = [
  {
    id: 1,
    name: "Celestial Meadow Dome",
    designer: "Luna Botanical Collective",
    biome: "Temperate Grassland",
    species: 347,
    oxygenOutput: "12.4 L/day",
    aestheticScore: 94,
    description: "Floating grassland ecosystem with bioluminescent flora for Mars habitat training.",
    tags: ["Bioluminescent", "Mars-Compatible", "High Oxygen"]
  },
  {
    id: 2,
    name: "Aquatic Crown Gardens",
    designer: "Tidal Harmony Institute", 
    biome: "Wetland Complex",
    species: 203,
    oxygenOutput: "18.7 L/day",
    aestheticScore: 91,
    description: "Multi-tiered aquatic ecosystem with water purification and fish cultivation.",
    tags: ["Water Purification", "Food Production", "Carbon Sink"]
  },
  {
    id: 3,
    name: "Vertical Forest Spire",
    designer: "Canopy Architects",
    biome: "Tropical Rainforest",
    species: 521,
    oxygenOutput: "34.2 L/day",
    aestheticScore: 96,
    description: "Towering vertical ecosystem mimicking rainforest layers in compact space.",
    tags: ["Vertical Growing", "Biodiversity Hub", "Climate Control"]
  },
  {
    id: 4,
    name: "Desert Oasis Sanctuary",
    designer: "Arid Solutions Guild",
    biome: "Desert Oasis",
    species: 156,
    oxygenOutput: "8.9 L/day", 
    aestheticScore: 89,
    description: "Water-efficient desert garden with succulent towers and cooling systems.",
    tags: ["Water Efficient", "Heat Resistant", "Medicinal Plants"]
  }
];

export const Gardens = () => {
  const [selectedGarden, setSelectedGarden] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"gallery" | "dome">("gallery");

  return (
    <div className="min-h-screen bg-cosmic-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <TreePine className="h-16 w-16 text-primary animate-celestial-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-celestial-pulse" />
            </div>
          </div>
          
          <h1 className="font-royal text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Royal Gardens of the Cosmos
          </h1>
          
          <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Biome preservation and cultivation designs for Earth habitats and 
            interplanetary colonies, bridging ancient gardening wisdom with cosmic agriculture.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-2 border border-border/50">
            <Button
              variant={viewMode === "gallery" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("gallery")}
              className="font-cosmic"
            >
              <Eye className="h-4 w-4 mr-2" />
              Gallery View
            </Button>
            <Button
              variant={viewMode === "dome" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("dome")}
              className="font-cosmic"
            >
              <Globe className="h-4 w-4 mr-2" />
              Dome View
            </Button>
          </div>
        </div>

        {/* 3D Dome Viewer Placeholder */}
        {viewMode === "dome" && (
          <Card className="mb-12 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-16 w-16 text-primary/50 mx-auto mb-4 animate-orbital-spin" />
                <h3 className="font-royal text-xl font-semibold text-foreground mb-2">
                  Interactive Garden Dome
                </h3>
                <p className="font-cosmic text-muted-foreground max-w-md mx-auto">
                  Immersive 3D environment to explore biome designs, plant interactions, 
                  and ecological relationships in beautiful dome structures.
                </p>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-green-500/30 rounded-full animate-cosmic-float" />
              <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-cosmic-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-purple-500/30 rounded-full animate-cosmic-float" style={{ animationDelay: '4s' }} />
            </div>
          </Card>
        )}

        {/* Garden Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cosmicGardens.map((garden) => (
            <Card 
              key={garden.id}
              className={`border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-royal sacred-transition cursor-pointer overflow-hidden ${
                selectedGarden === garden.id ? 'ring-2 ring-primary/50 shadow-royal' : ''
              }`}
              onClick={() => setSelectedGarden(selectedGarden === garden.id ? null : garden.id)}
            >
              {/* Garden Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TreePine className="h-16 w-16 text-primary/30" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="font-cosmic bg-card/80 backdrop-blur-sm">
                    {garden.biome}
                  </Badge>
                </div>
                {/* Floating Particles */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/20 rounded-full animate-stellar-drift"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${20 + (i * 10)}%`,
                      animationDelay: `${i * 2}s`,
                      animationDuration: `${8 + i}s`
                    }}
                  />
                ))}
              </div>

              <div className="p-6">
                {/* Garden Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-royal text-xl font-semibold text-foreground">
                    {garden.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-cosmic text-sm text-primary font-medium">
                      {garden.aestheticScore}
                    </span>
                  </div>
                </div>

                <p className="font-cosmic text-sm text-muted-foreground mb-4">
                  Designed by {garden.designer}
                </p>

                <p className="font-cosmic text-muted-foreground mb-4 leading-relaxed">
                  {garden.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="font-cosmic text-lg font-semibold text-foreground">
                      {garden.species}
                    </div>
                    <div className="font-cosmic text-xs text-muted-foreground">
                      Species
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="font-cosmic text-lg font-semibold text-foreground">
                      {garden.oxygenOutput}
                    </div>
                    <div className="font-cosmic text-xs text-muted-foreground">
                      O₂ Output
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {garden.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="font-cosmic text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Expanded Content */}
                {selectedGarden === garden.id && (
                  <div className="border-t border-border/30 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" size="sm" className="font-cosmic">
                        <Eye className="h-4 w-4 mr-2" />
                        View in Dome
                      </Button>
                      <Button variant="outline" size="sm" className="font-cosmic">
                        <Upload className="h-4 w-4 mr-2" />
                        Download Plans
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Submission Section */}
        <section className="mt-16">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8 text-center">
            <Flower className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-royal text-2xl font-bold mb-4 text-foreground">
              Design Your Cosmic Garden
            </h3>
            <p className="font-cosmic text-muted-foreground mb-6 max-w-2xl mx-auto">
              Submit your biome designs for Earth conservation or interplanetary habitats. 
              Contribute to the growing library of sustainable ecosystem templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-cosmic font-semibold royal-glow">
                <Upload className="h-5 w-5 mr-2" />
                Submit Garden Design
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-cosmic font-semibold border-primary/30 hover:bg-primary/10"
              >
                <TreePine className="h-5 w-5 mr-2" />
                Browse Templates
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};