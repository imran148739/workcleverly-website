import { useEffect } from 'react';

export default function EnableRightClick() {
  useEffect(() => {
    // Enable pointer events
    document.body.style.pointerEvents = 'auto';

    // Remove all 'oncontextmenu' attributes
    document.querySelectorAll('[oncontextmenu]').forEach((el) => el.removeAttribute('oncontextmenu'));

    // Add a new 'contextmenu' event listener to ensure right-click works
    const enableRightClick = (event) => event.stopPropagation();
    document.addEventListener('contextmenu', enableRightClick, true);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('contextmenu', enableRightClick, true);
    };
  }, []);

  return null; // No UI, just enabling right-click
}