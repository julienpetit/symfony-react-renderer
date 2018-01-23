import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';

import UserListPage from './modules/users/components/UserList';
import ReviewAddPage from './modules/reviews/components/Add';
import ReviewListPage from './modules/reviews/components/List';

import {history} from './store';

const App = ({store}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/users" component={UserListPage}/>
                <Route exact strict path="/reviews" component={ReviewListPage}/>
                <Route exact strict path="/reviews/create" component={ReviewAddPage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default App;

