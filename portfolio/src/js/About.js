import React, { Component } from 'react';

import Journey from './Journey'

import one from '../img/about/1.jpg'
import two from '../img/about/2.jpg'
import three from '../img/about/3.jpg'
import four from '../img/about/4.jpg'
import five from '../img/about/5.jpg'
import six from '../img/about/6.jpg'
import seven from '../img/about/7.jpg'
import eight from '../img/about/8.jpg'

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">My Journey</h2>
                    <h3 className="section-subheading text-muted">Present</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">
                            <Journey img={one} subHeading={'dmg::media'} muted={'DMG Media is a leading multi-channel consumer media company which is home to some of the UK’s most popular brands, including the Daily Mail, MailOnline, The Mail on Sunday, Metro, Wowcher, Jobsite and Jobrapido. Part of DMGT, DMG Medias portfolio of national newspapers, websites and mobile and tablet applications regularly reach 55% of the GB adult population.'}/>
                            <Journey inverted={'timeline-inverted'} img={two} subHeading={'Centrica'} muted={'Centrica plc is a British multinational utility company with its headquarters in Windsor, Berkshire. Its principal activity is the supply of electricity and gas to businesses and consumers in the United Kingdom and North America. It is the largest supplier of gas to domestic customers in the UK, and one of the largest suppliers of electricity'}/>
                            <Journey img={three} subHeading={'BBC News'} muted={'BBC News is an operational business division of the British Broadcasting Corporation (BBC) responsible for the gathering and broadcasting of news and current affairs. The department is the worlds largest broadcast news organisation and as well as online news coverage.'}/>
                            <Journey inverted={'timeline-inverted'} img={four} subHeading={'South Africa'} muted={'Commercial experience with a leading global IT Service provider, whilst progressively taking on larger client responsibilities, I gained insightful experience on business operations and processes by working on the projects in Durban SA/UK'}/>
                            <Journey img={five} subHeading={'Tesco.com'} muted={'Integration and development and managed information web system demands for retailer Tesco.com'}/>
                            <Journey inverted={'timeline-inverted'} img={six} subHeading={'MagNorth Software'} muted={'Maintained and implemented telecommunication applications on systems and networks such cisco sip and telephony'}/>
                            <Journey img={seven} subHeading={'DMU'} muted={'Developed 40 page CSE intranet for students, set up servers and databases, designed all web pages and the engine. This project used Microsoft FrontPage, Photoshop and HTML.'}/>
                            <Journey inverted={'timeline-inverted'}  img={eight} subHeading={'DMU'} muted={'BSc Computer Science 2:1'}/>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    );
  }
}

export default About;