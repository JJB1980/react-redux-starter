import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import { ThemeContext } from 'components/Theme/Context';
import * as S from './styled';

type Props = {
  messageId: string;
  onClick?: Function;
  to?: string;
  alt?: boolean;
}

function LinkButton({ messageId, onClick, to = '', alt = false }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    onClick ? (
      <S.LinkButtonS theme={theme} alty={alt ? 'y' : 'n'} onClick={onClick as any}>
        <FormattedMessage id={messageId} />
      </S.LinkButtonS>
    ) :  (
      <S.StyledLink theme={theme} alty={alt ? 'y' : 'n'} to={to}>
        <FormattedMessage id={messageId} />
      </S.StyledLink>
    )
  );
}

export default LinkButton;
