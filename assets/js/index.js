import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';

import UserListPage from './modules/users/components/UserList';
import UserEditPage from './modules/users/components/UserEdit';

import {history} from './store';

const App = ({store}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/users" component={UserListPage}/>
                <Route exact strict path="/reviews/new" component={UserEditPage}/>
                {/*<Route exact path="/reviews" component={ReviewsPage}/>*/}
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default App;

