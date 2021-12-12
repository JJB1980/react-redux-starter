import { FormattedMessage } from 'react-intl';

import { selectStatus } from '../../api';
import { useAppSelector } from '../../app/hooks';
import * as S from './styled';

type Props = {
  messageId: string;
  onClick: Function;
}

function AsyncButton({ messageId, onClick }: Props) {
  const status = useAppSelector(selectStatus);

  return (
    <S.LoginButton disabled={status === 'loading'} onClick={onClick as any}>
      {status === 'loading' ? <FormattedMessage id='waiting' /> : <FormattedMessage id={messageId} />}
    </S.LoginButton>
  );
}

export default AsyncButton;
