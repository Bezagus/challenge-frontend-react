import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@components/darkMode/useDarkMode.js';

export default function DarkMode() {
  const presenter = useDarkMode();

  return (
    <button
      onClick={presenter.handleToggleDarkMode}
      className="p-2.5 hover:bg-muted rounded-xl transition-all duration-200 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {presenter.darkMode ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
