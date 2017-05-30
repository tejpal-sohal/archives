import React, { Component } from 'react';
import '../css/font-awesome.min.css'
import '../css/bootstrap.min.css'
import '../css/agency.css'
import Navigation from './Navigation'
import Header from './Header'
import ServicesSection from './ServicesSection'
import Portfolio from './Portfolio'
import PortfolioModals from './PortfolioModals'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Message from './Console'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header/>
        <ServicesSection/>
        <Portfolio />
        <PortfolioModals />
        <About />
        <Contact />
        <Footer />
        <Message />
      </div>
    );
  }
}

export default App;
