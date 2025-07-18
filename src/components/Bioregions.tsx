import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, TreePine, Waves, Mountain, Sun, Filter, Crown } from 'lucide-react';

const bioregions = [
  {
    id: 1,
    name: "Amazonian Crown Preserve",
    guardian: "Indigenous Council Alliance", 
    biome: "Rainforest",
    coordinates: { lat: -3.4653, lng: -62.2159 },
    status: "Sacred Protection",
    aiSteward: "Verde AI",
    description: "Planetary lung system under indigenous stewardship with AI-enhanced forest monitoring.",
    stats: { biodiversity: 95, carbonCapture: 88, waterCycle: 92 }
  },
  {
    id: 2,
    name: "Himalayan Sky Realm",
    guardian: "Mountain Kingdom Coalition",
    biome: "Alpine",
    coordinates: { lat: 27.9881, lng: 86.9250 },
    status: "Elevation Sanctuary", 
    aiSteward: "Sherpa AI",
    description: "High-altitude ecosystem preserving glacial water systems and rare mountain species.",
    stats: { biodiversity: 72, carbonCapture: 65, waterCycle: 89 }
  },
  {
    id: 3,
    name: "Coral Crown Archipelago",
    guardian: "Pacific Island Alliance",
    biome: "Marine",
    coordinates: { lat: -14.2350, lng: -170.1322 },
    status: "Ocean Sanctuary",
    aiSteward: "Reef AI",
    description: "Marine biodiversity hotspot with coral restoration and blue carbon programs.",
    stats: { biodiversity: 91, carbonCapture: 78, waterCycle: 95 }
  },
  {
    id: 4,
    name: "Saharan Solar Fields",
    guardian: "Desert Nomad Council",
    biome: "Desert",
    coordinates: { lat: 23.8859, lng: 2.1734 },
    status: "Solar Harvesting Zone",
    aiSteward: "Dune AI", 
    description: "Renewable energy generation combined with desert ecosystem restoration.",
    stats: { biodiversity: 45, carbonCapture: 82, waterCycle: 38 }
  },
  {
    id: 5,
    name: "Boreal Crown Forest",
    guardian: "Northern Indigenous Nations",
    biome: "Taiga",
    coordinates: { lat: 64.2008, lng: -149.4937 },
    status: "Carbon Vault",
    aiSteward: "Aurora AI",
    description: "Vast carbon storage system with sustainable forestry and wildlife corridors.",
    stats: { biodiversity: 68, carbonCapture: 94, waterCycle: 71 }
  }
];

const biomeFilters = [
  { name: "All", icon: Map, active: true },
  { name: "Rainforest", icon: TreePine, active: false },
  { name: "Marine", icon: Waves, active: false },
  { name: "Alpine", icon: Mountain, active: false },
  { name: "Desert", icon: Sun, active: false },
];

export const Bioregions = () => {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isCosmicMode, setIsCosmicMode] = useState(false);

  const filteredRegions = activeFilter === "All" 
    ? bioregions 
    : bioregions.filter(region => region.biome === activeFilter);

  return (
    <div className="min-h-screen bg-cosmic-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Map className="h-16 w-16 text-primary animate-celestial-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-celestial-pulse" />
            </div>
          </div>
          
          <h1 className="font-royal text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Crown Bioregions
          </h1>
          
          <p className="font-cosmic text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sacred lands and planetary arks under royal guardianship, 
            protected by AI stewards and indigenous wisdom.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          {/* Biome Filters */}
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg p-2 border border-border/50">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {biomeFilters.map((filter) => (
              <Button
                key={filter.name}
                variant={activeFilter === filter.name ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter.name)}
                className="font-cosmic"
              >
                <filter.icon className="h-4 w-4 mr-2" />
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Cosmic Mode Toggle */}
          <div className="flex items-center space-x-3">
            <span className="font-cosmic text-sm text-muted-foreground">Earth View</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCosmicMode(!isCosmicMode)}
              className={`font-cosmic ${isCosmicMode ? 'bg-primary/20 border-primary/50' : ''}`}
            >
              {isCosmicMode ? '🌌' : '🌍'} {isCosmicMode ? 'Cosmic Mode' : 'Planetary Mode'}
            </Button>
          </div>
        </div>

        {/* Map Placeholder - In production would be Mapbox */}
        <Card className="mb-12 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
          <div className="relative h-96 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
            <div className="text-center">
              <Map className="h-16 w-16 text-primary/50 mx-auto mb-4" />
              <h3 className="font-royal text-xl font-semibold text-foreground mb-2">
                Interactive Bioregion Map
              </h3>
              <p className="font-cosmic text-muted-foreground">
                {isCosmicMode 
                  ? "Cosmic view showing Mars & Venus potential zones" 
                  : "Interactive Earth map with real-time stewardship data"
                }
              </p>
            </div>
            
            {/* Floating Region Markers */}
            {filteredRegions.map((region, index) => (
              <div
                key={region.id}
                className={`absolute w-4 h-4 bg-primary rounded-full cursor-pointer hover:scale-150 sacred-transition animate-celestial-pulse`}
                style={{
                  left: `${20 + (index * 15)}%`,
                  top: `${30 + (index * 10)}%`,
                }}
                onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
              />
            ))}
          </div>
        </Card>

        {/* Bioregion Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegions.map((region) => (
            <Card 
              key={region.id}
              className={`border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-royal sacred-transition cursor-pointer ${
                selectedRegion === region.id ? 'ring-2 ring-primary/50 shadow-royal' : ''
              }`}
              onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
            >
              <div className="p-6">
                {/* Region Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-6 w-6 text-primary" />
                    <Badge variant="secondary" className="font-cosmic">
                      {region.biome}
                    </Badge>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    region.status === 'Sacred Protection' ? 'bg-green-500' :
                    region.status === 'Elevation Sanctuary' ? 'bg-blue-500' :
                    region.status === 'Ocean Sanctuary' ? 'bg-cyan-500' :
                    region.status === 'Solar Harvesting Zone' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  } animate-celestial-pulse`} />
                </div>

                {/* Region Info */}
                <h3 className="font-royal text-lg font-semibold text-foreground mb-2">
                  {region.name}
                </h3>
                
                <p className="font-cosmic text-sm text-muted-foreground mb-4">
                  {region.description}
                </p>

                {/* Guardian & AI Steward */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-cosmic text-muted-foreground">Guardian:</span>
                    <span className="font-cosmic text-foreground">{region.guardian}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-cosmic text-muted-foreground">AI Steward:</span>
                    <span className="font-cosmic text-primary">{region.aiSteward}</span>
                  </div>
                </div>

                {/* Stats */}
                {selectedRegion === region.id && (
                  <div className="border-t border-border/30 pt-4 space-y-3">
                    {Object.entries(region.stats).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-cosmic text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}:
                          </span>
                          <span className="font-cosmic text-foreground">{value}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div 
                            className="bg-primary rounded-full h-2 transition-all duration-1000 ease-out"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Action Section */}
        <section className="mt-16 text-center">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8">
            <h3 className="font-royal text-2xl font-bold mb-4 text-foreground">
              Join the Stewardship Network
            </h3>
            <p className="font-cosmic text-muted-foreground mb-6 max-w-2xl mx-auto">
              Become a guardian of sacred bioregions. Contribute to AI stewardship protocols
              and help expand the network of protected planetary zones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-cosmic font-semibold royal-glow">
                Become a Guardian
              </Button>
              <Button variant="outline" size="lg" className="font-cosmic font-semibold">
                Submit New Bioregion
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};