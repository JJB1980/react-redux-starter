import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Demo from './DemoPage';
import Login from '../login';
import { selectIsLoggedIn } from '../login/redux';
import { useAppSelector } from '../../app/hooks';


export default function App() {
  const loggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Router>
      <div>
        {loggedIn && (
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
        <Switch>
          {loggedIn ? (
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
            <Redirect to='/login' />
          </>
        )}
        </Switch>
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