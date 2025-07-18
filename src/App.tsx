import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Codex from "./components/Codex";
import Bioregions from "./components/Bioregions";
import Gardens from "./components/Gardens";
import Placeholder from "./components/Placeholder";
import { Globe, Sparkles, Scroll, Shield } from "lucide-react";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="codex" element={<Codex />} />
            <Route path="bioregions" element={<Bioregions />} />
            <Route path="gardens" element={<Gardens />} />
            <Route 
              path="cosmopolis" 
              element={
                <Placeholder 
                  title="AEGIS Cosmopolis"
                  description="Nested governance engine for Earth, Ocean, and Space with interactive sovereign steward nodes and diplomatic AI systems."
                  icon={Globe}
                />
              } 
            />
            <Route 
              path="gaianet" 
              element={
                <Placeholder 
                  title="GaiaNet Observatory"
                  description="Satellite-backed planetary nervous system with real-time ecological intelligence and smart contract oracles."
                  icon={Sparkles}
                />
              } 
            />
            <Route 
              path="treaty" 
              element={
                <Placeholder 
                  title="Ascension Treaty"
                  description="Digital signing ceremony for cosmic citizenship pledges with biometric authentication and ethical alignment verification."
                  icon={Scroll}
                />
              } 
            />
            <Route 
              path="governance" 
              element={
                <Placeholder 
                  title="Cosmic Governance Panel"
                  description="Administrative interface for council management, policy simulation, and AI-generated ethical impact assessments."
                  icon={Shield}
                />
              } 
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
);

export default App;
