import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import EstilismoEditorialPage from "./pages/EstilismoEditorialPage";
import ProyectosConceptualesPage from "./pages/ProyectosConceptualesPage";
import LibrosTendenciaPage from "./pages/LibrosTendenciaPage";
import AnzueloEmocionalPage from "./pages/AnzueloEmocionalPage";
import SegmentoPreadolescentePage from "./pages/SegmentoPreadolescentePage";
import IndustriaArtesanalPage from "./pages/IndustriaArtesanalPage";
import InvestigacionesPage from "./pages/InvestigacionesPage";
import FashionFilmsPage from "./pages/FashionFilmsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/estilismo-editorial" element={<EstilismoEditorialPage />} />
            <Route path="/proyectos-conceptuales" element={<ProyectosConceptualesPage />} />
            <Route path="/libros-tendencia" element={<LibrosTendenciaPage />} />
            <Route path="/libros-tendencia/anzuelo-emocional" element={<AnzueloEmocionalPage />} />
            <Route path="/libros-tendencia/segmento-preadolescente" element={<SegmentoPreadolescentePage />} />
            <Route path="/libros-tendencia/industria-artesanal" element={<IndustriaArtesanalPage />} />
            <Route path="/investigaciones" element={<InvestigacionesPage />} />
            <Route path="/fashion-films" element={<FashionFilmsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
