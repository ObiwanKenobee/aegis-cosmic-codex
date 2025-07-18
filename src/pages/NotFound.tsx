import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cosmic-gradient flex items-center justify-center px-4">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-12 text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Crown className="h-16 w-16 text-primary animate-celestial-pulse" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-celestial-pulse" />
          </div>
        </div>
        
        <h1 className="font-royal text-6xl font-bold mb-4 text-foreground">404</h1>
        <h2 className="font-royal text-xl font-semibold mb-4 text-foreground">
          Lost in the Cosmic Void
        </h2>
        <p className="font-cosmic text-muted-foreground mb-8 leading-relaxed">
          The path you seek does not exist in this realm of AEGIS. 
          Return to the sacred territories of our cosmic governance.
        </p>
        
        <Link to="/">
          <Button size="lg" className="font-cosmic font-semibold royal-glow">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Regnum
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
