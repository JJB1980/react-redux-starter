import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LanguageContext } from './Context';

import en from '../../lang/en.json';
import es from '../../lang/es.json';

const locales = {
  en,
  es
};

const defaultLocale = window?.localStorage.getItem('locale') || 'en';

export default function LanguageProvider({ children }): JSX.Element {
  const [locale, setLocale] = useState<string>(defaultLocale);

  const updateLocale = (l: string) => {
    window?.localStorage.setItem('locale', l);
    setLocale(l);
  };

  return (
    <LanguageContext.Provider value={{ setLocale: updateLocale, locale }}>
      <IntlProvider messages={locales[locale]} locale={locale} defaultLocale="en">
			  {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
