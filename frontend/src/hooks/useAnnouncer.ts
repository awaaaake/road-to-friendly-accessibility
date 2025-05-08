import { useAccessibilityContext } from "@/contexts";

export const useAnnouncer = () => {
  const { assertiveRef, politeRef } = useAccessibilityContext();

  const announceToScreenReader = (message: string, priority: 'assertive' | 'polite' = 'assertive') => {
    const ref = priority === 'assertive' ? assertiveRef.current : politeRef.current;
    if (ref) {
      ref.textContent = '';
      
      setTimeout(() => {
        ref.textContent = message;
      }, 10);
    }
  };

  return { announceToScreenReader };
};
