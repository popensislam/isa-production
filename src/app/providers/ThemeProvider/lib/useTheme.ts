import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';


interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme = Theme.DARK;

    if (theme === Theme.DARK) newTheme = Theme.LIGHT;
    if (theme === Theme.LIGHT) newTheme = Theme.ORANGE;
    if (theme === Theme.ORANGE) newTheme === Theme.DARK;

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.DARK, toggleTheme };
}
