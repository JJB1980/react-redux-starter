import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { IResponse } from '../../index.d'
import LangSelect from '../../components/Language/Selector';
import AsyncButton from '../../components/AsyncButton';
import logo from '../page/logo.svg';
import { asyncLogin, loggedIn } from './redux';
import TextInput from '../../components/TextInput'
import * as S from './styled';

type State = {
  username: string;
  password: string;
}

function LoginPage() {
  const [state, setState] = useState<State>({username: '', password: ''});
  const dispatch = useDispatch<any>();
  const history = useHistory();

  const doLogin = async () => {
    const response: IResponse = await dispatch(asyncLogin(state.username, state.password));
    if (response.data) {
      toast(<FormattedMessage id='loginSuccess' />, {type: 'success'})
      setTimeout(() => {
        dispatch(loggedIn());
        history.push('/')
      }, 2000)
    } else {
      toast(<FormattedMessage id='loginFailed' values={{message: response.error}} />, {type: 'error'});
    }
  };

  return (
    <S.Container>
      <S.Form>
        <S.Logo src={logo} alt='logo' />
        <form onSubmit={e => e.preventDefault()}>
          <TextInput value={state.username} label='username' onChange={(value: string) => setState({...state, username: value || ''})} />
          <TextInput password value={state.password} label='password' onChange={(value: string) => setState({...state, password: value || ''})} />
          <AsyncButton onClick={doLogin} messageId='login' />
          <S.Link href='#'><FormattedMessage id='forgotPassword' /></S.Link>
        </form>
        <LangSelect />
      </S.Form>
    </S.Container>
  );
}

export default LoginPage;