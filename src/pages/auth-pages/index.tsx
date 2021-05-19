import React, { FunctionComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from '../auth-pages/home-page';

const UnAuthPages: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Redirect to="/home"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default UnAuthPages;
