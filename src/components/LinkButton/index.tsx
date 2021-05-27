import { FormattedMessage } from 'react-intl';

import * as S from './styled';

type Props = {
  messageId: string;
  onClick: Function;
  color: string;
}

function LinkButton({ messageId, onClick, color }: Props) {
  return (
    <S.LinkButtonS color={color} onClick={onClick as any}>
      <FormattedMessage id={messageId} />
    </S.LinkButtonS>
  );
}

export default LinkButton;
