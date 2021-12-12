import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom';

import './index.css';
import { store } from 'app/store';
import * as serviceWorker from './serviceWorker';
import App from 'features/page';
import LanguageProvider from 'components/Language/Provider';
import ThemeProvider from 'components/Theme/Provider';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ToastContainer />
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
