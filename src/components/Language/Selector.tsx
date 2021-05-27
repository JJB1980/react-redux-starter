import { useContext } from 'react';

import LinkButton from '../LinkButton';
import { LanguageContext } from './Context';
import * as S from './styled';

export default function LanguageSelector(): JSX.Element {
  const { setLocale } = useContext(LanguageContext);

	return (
		<S.LocalesContainer>
			<LinkButton onClick={() => setLocale('es')} color='red' messageId='spanish' />
			<S.Pad>|</S.Pad>
			<LinkButton onClick={() => setLocale('en')} color='red' messageId='english' />
		</S.LocalesContainer>
	);
}
