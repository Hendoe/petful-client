import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome/Welcome';
import Adopt from './adopt/Adopt';

class App extends Component {
  renderRoutes() {
    return (
      <>
        <Route exact path={'/'} component={Welcome} />
        <Route path={'/adopt'} component={Adopt} />
      </>
    );
  };

  render() {
    return (
      <div className='App'>
        <main className='App-Main'>{this.renderRoutes()}</main>
      </div>
    );
  };
};

export default App;