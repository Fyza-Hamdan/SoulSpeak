import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // adjust path if needed

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg 
                 bg-indigo-600 text-white hover:bg-indigo-700 
                 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500
                 transition-colors duration-300"
    >
      {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
};

export default ThemeToggle;
