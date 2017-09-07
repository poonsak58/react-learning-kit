import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, About, Dashboard, LoginOrRegister, HOCForm, ComponentLifecycle, DataManagement } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
      <Route path="about" component={About} />
      <Route path="/component/hoc" component={HOCForm} />
      <Route path="/component/lifecycle" component={ComponentLifecycle} />
      <Route path="/component/data-management" component={DataManagement} />
    </Route>
  );
};
