import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const Demo = lazy(() => import('./DemoPage'));
const Login = lazy(() => import('../login'));
const HomePage = lazy(() => import('../HomePage'));

import { selectIsLoggedIn } from '../login/redux';
import { useAppSelector } from '../../app/hooks';

import * as S from './styled';

export default function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
        <Suspense fallback={<S.Container><S.Loader>Loading...</S.Loader></S.Container>}>
          <Switch>
            {isLoggedIn ? (
              <>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Demo />
                </Route>
              </>
            ) : (
              <>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
                <Redirect to='/' />
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