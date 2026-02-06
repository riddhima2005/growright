import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import Auth from "./pages/Auth";
import About from "./pages/About";
import PlantDetails from "./pages/PlantDetails";
import MyGarden from "./pages/MyGarden";
import DiseaseDetector from "./pages/DiseaseDetector";
import SoilTester from "./pages/SoilTester";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/plant/:id" element={<PlantDetails />} />
          <Route path="/my-garden" element={<MyGarden />} />
          <Route path="/disease-detector" element={<DiseaseDetector />} />
          <Route path="/soil-tester" element={<SoilTester />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
