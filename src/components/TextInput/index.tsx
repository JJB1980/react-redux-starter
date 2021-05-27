import { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { FormattedMessage } from 'react-intl';

import * as S from './styled';

type Props = {
  value: string;
  label: string;
  onChange: Function;
  password?: boolean;
}

function TextInput({ value, label, password, onChange }: Props) {
  const [id] = useState<string>(uuid());

  return (
    <>
      <S.TextContainer>
        <S.Label htmlFor={id}><FormattedMessage id={label} /></S.Label>
        <S.Input
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
