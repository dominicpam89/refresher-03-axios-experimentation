export type Theme = 'light' | 'dark' | 'system';

export type ThemeContext = {
  theme: Theme;
  changeTheme: (t: Theme) => void;
};

export type ThemeContextProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
