import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('satyajit_portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark aesthetic for tech & AI developer portfolio
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('satyajit_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('satyajit_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}
