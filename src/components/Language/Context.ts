import React from 'react';

type T = { setLocale: Function, locale: string };

export const LanguageContext = React.createContext<T>({ locale: '', setLocale: () => {} });
