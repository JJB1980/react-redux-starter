import { useContext } from 'react';

import { ThemeContext } from './Context';
import * as S from './styled';
import LinkButton from '../LinkButton';

export default function ThemeSelector(): JSX.Element {
  const { setTheme } = useContext(ThemeContext);

  return (
    <S.ThemesContainer>
      <LinkButton onClick={() => setTheme('light')} alt messageId='light' />
      <S.Pad>|</S.Pad>
      <LinkButton onClick={() => setTheme('dark')} alt messageId='dark' />
    </S.ThemesContainer>
  );
}
