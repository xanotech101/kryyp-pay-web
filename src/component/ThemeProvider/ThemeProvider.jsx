'use client';
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-20 right-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded z-50"
      >
         {theme === 'dark' ? <FiSun /> : <FaMoon />} 
      </button>
      {children}
    </>
  );
}
