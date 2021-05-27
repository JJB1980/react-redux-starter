import { useContext } from 'react';
import { FormattedMessage } from 'react-intl'

import { LanguageContext } from './Context';
import * as S from './styled';

export default function LanguageSelector(): JSX.Element {
  const { setLocale } = useContext(LanguageContext);

	return (
		<S.LocalesContainer>
			<S.LocaleOption onClick={() => setLocale('es')}><FormattedMessage id='spanish' /></S.LocaleOption>
			<S.LocaleOption onClick={() => setLocale('en')}><FormattedMessage id='english' /></S.LocaleOption>
		</S.LocalesContainer>
	);
}
