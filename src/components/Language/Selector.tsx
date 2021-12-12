import { useContext } from 'react';

import { LanguageContext } from './Context';
import * as S from './styled';
import LinkButton from '../LinkButton';

export default function LanguageSelector(): JSX.Element {
  const { setLocale } = useContext(LanguageContext);

  return (
    <S.LocalesContainer>
      <LinkButton onClick={() => setLocale('es')} alt messageId='spanish' />
      <S.Pad />
      <LinkButton onClick={() => setLocale('en')} alt messageId='english' />
    </S.LocalesContainer>
  );
}
