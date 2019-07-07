import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ItemsPage from './Containers/ItemsPage/ItemsPage'
import s from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Switch>
        <Route path='/'><ItemsPage /></Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
