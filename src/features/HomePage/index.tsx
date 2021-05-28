import { FormattedMessage } from 'react-intl';

import LinkButton from '../../components/LinkButton';
import * as S from './styled';
import * as G from '../../styled';

function HomePage() {
  return (
    <S.Container>
      <FormattedMessage id='homePage' />
      <br />
      <G.Padded>
        <LinkButton to='/login' messageId='login' />
      </G.Padded>
    </S.Container>
  );
}

export default HomePage;
