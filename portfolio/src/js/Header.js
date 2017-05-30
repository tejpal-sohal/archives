import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    //   <!-- Header -->
    <header>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">Welcome To My Online Profile</div>
                <div className="intro-heading">It's Nice To Meet You</div>
                <a href="#contact" className="page-scroll btn btn-xl">Contact me</a>
            </div>
        </div>
    </header>
    );
  }
}

export default Header
