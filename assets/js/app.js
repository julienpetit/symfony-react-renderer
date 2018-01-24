import React from 'react';
import ReactOnRails from 'react-on-rails';
import Main from './index';
import appStore from './store';
import './lib/form-validators';

// See documentation for https://github.com/reactjs/react-redux.
// This code here binds your smart component to the redux store.
const mainNode = (_initialProps) => {
  const store = ReactOnRails.getStore('appStore');

  const reactComponent = (
    <Main store={store} locale={_initialProps.locale} />
  );
  return reactComponent;
};

const App = mainNode;

ReactOnRails.registerStore({ appStore });
ReactOnRails.register({ App });
