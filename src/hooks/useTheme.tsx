import { createContext, PropsWithChildren, useContext, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  onChangeTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkTheme, setIsDark] = useState(false);

  const onChangeTheme = () => {
    setIsDark((isDarkTheme) => !isDarkTheme);
  };

  const value = {
    isDarkTheme,
    onChangeTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
