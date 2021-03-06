import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import Footer from '../components/Footer';
import Root from './Root';
import Projects from '../components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <>
        <MiniNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
