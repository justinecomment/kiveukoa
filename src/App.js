import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content   from './hoc/Content/Content'
import Dashboard from './containers/Dashboard/Dashboard';
import Auth      from './containers/Auth/Auth';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <Content>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Content>
    );
  }
}

export default App;
