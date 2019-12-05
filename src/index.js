import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './style.scss';

import App from './components/app';
import createStore from './store';

const store = createStore();

class Main extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
            <App />
        </Provider>
      </>
    )
  }
}

const rootElement = document.getElementById('root');
React.DOM.render(<Main />, rootElement);
