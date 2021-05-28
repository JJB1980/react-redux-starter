import { FormattedMessage } from 'react-intl';

import * as S from './styled';

type Props = {
  messageId: string;
  onClick?: Function;
  color?: string;
  to?: string;
}

function LinkButton({ messageId, onClick, color = 'blue', to = '' }: Props) {
  return (
    onClick ? (
      <S.LinkButtonS color={color} onClick={onClick as any}>
        <FormattedMessage id={messageId} />
      </S.LinkButtonS>
    ) :  (
      <S.StyledLink color={color} to={to}>
        <FormattedMessage id={messageId} />
      </S.StyledLink>
    )
  );
}

export default LinkButton;
