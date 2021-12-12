import { useState, useEffect, useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { ThemeContext } from 'components/Theme/Context';
import * as S from './styled';

type Props = {
  value: string;
  label: string;
  onChange: Function;
  password?: boolean;
}

function TextInput({ value, label, password, onChange }: Props) {
  const [id, setId] = useState<string>();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    import('uuid').then(uuid => {
      setId(uuid.v1());
    });
  }, []);

  return (
    <>
      <S.TextContainer>
        <S.Label theme={theme} htmlFor={id}><FormattedMessage id={label} /></S.Label>
        <S.Input
          theme={theme}
          id={id}
          autoComplete={password ? 'password' : label.split(' ').join('-')}
          type={password ? 'password' : 'text'}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
        />
      </S.TextContainer>
    </>
  );
}

export default TextInput;
