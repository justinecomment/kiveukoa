import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content   from './hoc/Content/Content'
import Dashboard from './containers/Dashboard/Dashboard';
import Login      from './containers/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Admin from './containers/Admin/Admin';
import Consulter from './containers/Dashboard/Consulter/Consulter';
import Ajouter from './containers/Dashboard/Ajouter/Ajouter';


class App extends Component {
  render() {
    return (
      <Content>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/consulter" component={Consulter} />
          <Route path="/ajouter" component={Ajouter} />
        </Switch>
      </Content>
    );
  }
}

export default App;
