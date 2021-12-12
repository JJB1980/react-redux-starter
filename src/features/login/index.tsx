import { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { asyncLogin, loggedIn } from './redux';
import { IResponse } from 'types';
import { LanguageContext } from 'components/Language/Context';
import { ThemeContext } from 'components/Theme/Context';
import * as G from 'styled';
import * as S from './styled';
import AsyncButton from 'components/AsyncButton';
import LangSelect from 'components/Language/Selector';
import LinkButton from 'components/LinkButton';
import logo from '../page/logo.svg';
import TextInput from 'components/TextInput';

type State = {
  username: string;
  password: string;
}

function LoginPage() {
  const [state, setState] = useState<State>({ username: '', password: '' });
  const dispatch = useDispatch<Function>();
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  const { messages } = useContext(LanguageContext);

  const doLogin = async () => {
    const response: IResponse = await dispatch(asyncLogin(state.username, state.password));
    if (response.data) {
      toast(<FormattedMessage id='loginSuccess' />, { type: 'success' });
      setTimeout(() => {
        dispatch(loggedIn());
        history.push('/');
      }, 2000);
    } else {
      toast(<FormattedMessage id='loginFailed' values={{ message: response.error }} />, { type: 'error' });
    }
  };

  return (
    <S.Container theme={theme}>
      <Helmet>
        <title>{messages.login}</title>
      </Helmet>
      <G.Padded>
        <LinkButton to='/' messageId='homePage' />
      </G.Padded>
      <S.Form theme={theme}>
        <S.Logo src={logo} alt='logo' />
        <form onSubmit={e => e.preventDefault()}>
          <TextInput value={state.username} label='username' onChange={(value: string) => setState({ ...state, username: value || '' })} />
          <TextInput password value={state.password} label='password' onChange={(value: string) => setState({ ...state, password: value || '' })} />
          <AsyncButton onClick={doLogin} messageId='login' />
          <LinkButton onClick={() => console.log('forgot password')} messageId='forgotPassword' />
        </form>
        <LangSelect />
      </S.Form>
    </S.Container>
  );
}

export default LoginPage;
