import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio/>
        <Blogs />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
