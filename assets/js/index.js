import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import UserListPage from './modules/users/components/UserList';
import ReviewAddPage from './modules/reviews/components/Add';
import ReviewListPage from './modules/reviews/components/List';

import { history } from './store';

const App = ({ store, locale }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter basename={`/${locale}`}>
        <Switch>
          <Route exact path="/users" component={UserListPage} />
          <Route exact strict path="/reviews" component={ReviewListPage} />
          <Route exact strict path="/reviews/create" component={ReviewAddPage} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
};

export default App;

