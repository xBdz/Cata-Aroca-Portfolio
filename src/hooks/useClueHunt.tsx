import { useState, useEffect } from "react";
import { toast } from "sonner";

const CLUE_LOCATIONS = ["hero", "portfolio", "about"] as const;
type ClueLocation = (typeof CLUE_LOCATIONS)[number];

const STORAGE_KEY = "catalina-aroca-clues";
const CLUE_UPDATE_EVENT = "clue-hunt-update";

// Disparar evento personalizado cuando cambia el estado
const dispatchClueUpdate = () => {
  window.dispatchEvent(new CustomEvent(CLUE_UPDATE_EVENT));
};

// Mensajes creativos según el número de pistas encontradas
const getClueMessage = (clueNumber: number) => {
  switch (clueNumber) {
    case 1:
      return {
        title: "¡Primera pista encontrada!",
        description: "Has descubierto el símbolo oculto. Sigue explorando el portfolio...",
      };
    case 2:
      return {
        title: "¡Segunda pista encontrada!",
        description: "Tu ojo para los detalles es impecable. Una pista más y desbloquearás algo especial.",
      };
    case 3:
      return {
        title: "¡Tercera pista encontrada!",
        description: "Has completado la búsqueda. Preparando algo exclusivo para ti...",
      };
    default:
      return {
        title: "¡Pista encontrada!",
        description: "Sigue explorando...",
      };
  }
};

export const useClueHunt = () => {
  const [foundClues, setFoundClues] = useState<ClueLocation[]>([]);
  const [isGalleryUnlocked, setIsGalleryUnlocked] = useState(false);

  // Función para cargar el estado desde localStorage
  const loadState = () => {
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
  };

  // Cargar estado inicial
  useEffect(() => {
    loadState();
  }, []);

  // Escuchar cambios de otros componentes
  useEffect(() => {
    const handleUpdate = () => {
      loadState();
    };

    window.addEventListener(CLUE_UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(CLUE_UPDATE_EVENT, handleUpdate);
  }, []);

  const findClue = (location: ClueLocation) => {
    if (foundClues.includes(location)) return;

    const newFoundClues = [...foundClues, location];
    const newUnlocked = newFoundClues.length === CLUE_LOCATIONS.length;
    
    // Actualizar localStorage
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        clues: newFoundClues,
        unlocked: newUnlocked,
      })
    );

    // Actualizar estado local
    setFoundClues(newFoundClues);
    if (newUnlocked) {
      setIsGalleryUnlocked(true);
    }

    // Notificar a otros componentes
    dispatchClueUpdate();

    // Mostrar toast basado en el número de pistas encontradas
    const clueNumber = newFoundClues.length;
    const message = getClueMessage(clueNumber);

    if (clueNumber < CLUE_LOCATIONS.length) {
      toast.success(message.title, {
        description: message.description,
        duration: 4000,
      });
    } else {
      toast.success("¡Colección Secreta Desbloqueada! ✨", {
        description: "Has descubierto una galería exclusiva de imágenes inéditas. Mira el indicador en la esquina inferior izquierda.",
        duration: 6000,
      });
    }
  };

  const resetHunt = () => {
    setFoundClues([]);
    setIsGalleryUnlocked(false);
    localStorage.removeItem(STORAGE_KEY);
    
    // Notificar a otros componentes
    dispatchClueUpdate();
  };

  return {
    foundClues,
    isGalleryUnlocked,
    findClue,
    resetHunt,
    progress: `${foundClues.length}/${CLUE_LOCATIONS.length}`,
  };
};
