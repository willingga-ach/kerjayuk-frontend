// KerjaYuk — Theme Context: mode gelap/terang, tersimpan di localStorage
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

function initialDark() {
  const saved = localStorage.getItem('kerjayuk_theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  // belum pernah memilih: ikuti preferensi sistem
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('kerjayuk_theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
