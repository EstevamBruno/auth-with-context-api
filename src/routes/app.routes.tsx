import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {

  return (
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  );
};

export default AppRoutes;
