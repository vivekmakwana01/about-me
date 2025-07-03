import React, { useEffect, useState } from "react";
import About from "./components/About";
import { Moon, Sun } from "lucide-react";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 border border-gray-300 dark:border-gray-600 shadow hover:scale-105 transition"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
      </button>

      <About />
    </div>
  );
};

export default App;
