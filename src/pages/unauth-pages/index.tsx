import React, { FunctionComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './login-page';

const UnAuthPages: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Redirect to="/auth/login"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default UnAuthPages;
