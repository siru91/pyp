import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, About, Works } from '../pages/';

class App extends Component {
  render() {
    console.log("App rendered.")
    return(
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </div>
    );
  }
}

export default App