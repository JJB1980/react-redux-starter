import { useState } from 'react';

import { ThemeContext } from './Context';

import light from './themes/theme.json';
import dark from './themes/themeDark.json';

const themes = {
  light,
  dark
};

const defaultTheme = window?.localStorage.getItem('theme') || 'light';

function updateCssVars(bodyBg: string) {
  const root = document.documentElement;
  root.style.setProperty('--body-bg', bodyBg);
}

updateCssVars(themes[defaultTheme].BG);

export default function ThemeProvider({ children }): JSX.Element {
  const [theme, setTheme] = useState<string>(defaultTheme);

  const updateTheme = (t: string) => {
    window?.localStorage.setItem('theme', t);
    setTheme(t);
    updateCssVars(themes[t].BG);
  };

  return (
    <ThemeContext.Provider value={{ setTheme: updateTheme, theme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}
