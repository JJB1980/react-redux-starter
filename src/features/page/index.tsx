import { lazy, Suspense, useContext } from 'react';
import MediaQuery from 'react-responsive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Demo = lazy(() => import('./DemoPage'));
const HomePage = lazy(() => import('../HomePage'));
const HomePageMobile = lazy(() => import('../HomePage/mobile'));
const Login = lazy(() => import('../login'));

import { selectIsLoggedIn } from '../login/redux';
import { ThemeContext } from 'components/Theme/Context';
import { useAppSelector } from 'app/hooks';
import * as S from './styled';

export default function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div>
        {isLoggedIn && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        )}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={
          <S.Container theme={theme}>
            <S.Loader>Loading...</S.Loader>
          </S.Container>
        }>
          <Switch>
            {isLoggedIn ? (
              <>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/demo">
                  <Demo />
                </Route>
              </>
            ) : (
              <>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <MediaQuery minDeviceWidth={701}>
                    <HomePage />
                  </MediaQuery>
                  <MediaQuery maxDeviceWidth={700}>
                    <HomePageMobile />
                  </MediaQuery>
                </Route>
              </>
            )}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}