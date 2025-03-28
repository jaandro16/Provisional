export const enableScreenshotProtection = () => {
  // Prevenir DevTools
  const devToolsListener = (e) => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey)) {
      e.preventDefault();
    }
  };

  // Prevenir clic derecho
  const preventRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Prevenir atajos de teclado comunes para capturas
  const preventKeyboardShortcuts = (e) => {
    if (
      (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Ctrl + P
      (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Ctrl + C
      (e.ctrlKey && (e.key === 'k' || e.key === 'K')) || // Ctrl + K
      (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || // Ctrl + Shift + I
      (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) || // Ctrl + Shift + J
      (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) || // Ctrl + Shift + C
      (e.key === 'PrintScreen') || // Print Screen
      (e.key === 'F12') // F12
    ) {
      e.preventDefault();
      return false;
    }
  };

  window.addEventListener('keydown', devToolsListener);
  window.addEventListener('keydown', preventKeyboardShortcuts);
  document.addEventListener('contextmenu', preventRightClick);
  
  return () => {
    window.removeEventListener('keydown', devToolsListener);
    window.removeEventListener('keydown', preventKeyboardShortcuts);
    document.removeEventListener('contextmenu', preventRightClick);
  };
};