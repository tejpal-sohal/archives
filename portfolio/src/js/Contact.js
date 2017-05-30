import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Contact Me</h2>
                            <h3 className="section-heading text-muted">any queries or opportunities please contact me</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3 className="section-heading fa fa-envelope-square"> <a href="mailto:tej.sohal@hotmail.co.uk">Email</a> </h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact