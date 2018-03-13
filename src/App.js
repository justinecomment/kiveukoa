import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content          from './hoc/Content/Content'
import Dashboard        from './containers/Dashboard/Dashboard';
import Login            from './containers/Login/Login';
import Navigation       from './components/Navigation/Navigation';
import Consulter        from './containers/Dashboard/Consulter/Consulter';
import Ajouter          from './containers/Dashboard/Ajouter/Ajouter';
import CreateRestaurant from './containers/Admin/CreateRestaurant/CreateRestaurant';
import CreateTypeMenu from './containers/Admin/CreateTypeMenu/CreateTypeMenu';
import CreateMenu from './containers/Admin/CreateMenu/CreateMenu';


class App extends Component {
  render() {
    return (
      <Content>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create-restaurant" component={CreateRestaurant} />
          <Route path="/create-type-menu" component={CreateTypeMenu} />
          <Route path="/create-menu" component={CreateMenu} />
          <Route path="/consulter" component={Consulter} />
          <Route path="/ajouter" component={Ajouter} />
        </Switch>
      </Content>
    );
  }
}

export default App;
