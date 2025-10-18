import { useState, useEffect } from "react";
import { toast } from "sonner";

const CLUE_LOCATIONS = ["hero", "portfolio", "about"] as const;
type ClueLocation = (typeof CLUE_LOCATIONS)[number];

const STORAGE_KEY = "catalina-aroca-clues";

export const useClueHunt = () => {
  const [foundClues, setFoundClues] = useState<ClueLocation[]>([]);
  const [isGalleryUnlocked, setIsGalleryUnlocked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFoundClues(parsed.clues || []);
        setIsGalleryUnlocked(parsed.unlocked || false);
      } catch {
        // Reset if corrupted
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const findClue = (location: ClueLocation) => {
    if (foundClues.includes(location)) return;

    const newFoundClues = [...foundClues, location];
    setFoundClues(newFoundClues);

    const cluesRemaining = CLUE_LOCATIONS.length - newFoundClues.length;

    if (cluesRemaining > 0) {
      toast.success(`Pista encontrada (${newFoundClues.length}/${CLUE_LOCATIONS.length})`, {
        description: `Faltan ${cluesRemaining} ${cluesRemaining === 1 ? "pista" : "pistas"} más...`,
      });
    } else {
      setIsGalleryUnlocked(true);
      toast.success("¡Todas las pistas encontradas!", {
        description: "Has desbloqueado la galería secreta",
      });
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        clues: newFoundClues,
        unlocked: newFoundClues.length === CLUE_LOCATIONS.length,
      })
    );
  };

  const resetHunt = () => {
    setFoundClues([]);
    setIsGalleryUnlocked(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    foundClues,
    isGalleryUnlocked,
    findClue,
    resetHunt,
    progress: `${foundClues.length}/${CLUE_LOCATIONS.length}`,
  };
};
