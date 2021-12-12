import React from 'react';

type T = { setLocale: Function, locale: string, messages: any };

export const LanguageContext = React.createContext<T>({ locale: '', messages: {}, setLocale: () => {} });
