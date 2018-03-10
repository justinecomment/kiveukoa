import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div>
        <p>bonjour</p>
        <Switch>
          <Route path="/Auth" component={Auth} />
          <a href="/Auth" >Auth</a>
        </Switch>
      </div>
    );
  }
}

export default App;
