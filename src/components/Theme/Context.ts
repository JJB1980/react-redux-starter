import React from 'react';

type T = { setTheme: Function, theme: any };

export const ThemeContext = React.createContext<T>({ theme: {}, setTheme: () => {} });