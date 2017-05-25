import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
    //    <!-- Navigation -->
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Tejpal Sohal</a>
            </div>
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#services">Profile</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">My Journey</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
    </nav>
    );
  }
}

export default Navigation;
