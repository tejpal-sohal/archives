import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super() 
        this.state = {date: new Date()};
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="copyright"> &copy; Tejpal Sohal {this.state.date.getFullYear()} </span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer