import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';

import { LanguageContext } from 'components/Language/Context';
import { ThemeContext } from 'components/Theme/Context';
import * as G from 'styled';
import * as S from './styled';
import LinkButton from 'components/LinkButton';

function HomePage() {
  const { setTheme } = useContext(ThemeContext);
  const { messages } = useContext(LanguageContext);

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <S.Container>
      <Helmet>
        <title>{messages.homePage}</title>
      </Helmet>
      <FormattedMessage id='homePage' />
      <br />
      <G.Padded>
        <LinkButton to='/login' messageId='login' />
      </G.Padded>
    </S.Container>
  );
}

export default HomePage;
