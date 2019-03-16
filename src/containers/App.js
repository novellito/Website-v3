import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MiniNav />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
