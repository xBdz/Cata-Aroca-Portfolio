import { Eye } from "lucide-react";
import { useClueHunt } from "@/hooks/useClueHunt";
import { Button } from "@/components/ui/button";

interface ClueHuntIndicatorProps {
  onShowGallery: () => void;
}

const ClueHuntIndicator = ({ onShowGallery }: ClueHuntIndicatorProps) => {
  const { foundClues, isGalleryUnlocked, progress } = useClueHunt();

  if (foundClues.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 bg-accent/90 backdrop-blur-sm text-accent-foreground p-4 shadow-lg max-w-xs">
      <div className="flex items-center gap-3 mb-2">
        <Eye size={20} className="opacity-70" />
        <span className="text-sm font-sans editorial-spacing">
          Pistas: {progress}
        </span>
      </div>
      
      {isGalleryUnlocked && (
        <Button
          onClick={onShowGallery}
          size="sm"
          className="w-full bg-accent-foreground text-accent hover:opacity-90 font-sans text-xs"
        >
          Ver galería secreta
        </Button>
      )}
      
      {!isGalleryUnlocked && foundClues.length > 0 && (
        <p className="text-xs opacity-70 font-sans">
          Busca el ícono 👁 para encontrar más pistas
        </p>
      )}
    </div>
  );
};

export default ClueHuntIndicator;
