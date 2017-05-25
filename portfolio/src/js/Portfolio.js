import React, { Component } from 'react'
import Projects from './Project'
import mailsubs from '../img/portfolio/mailsubs.png' 
import myMail from '../img/portfolio/myMail.png' 
import dmgmedia from '../img/portfolio/dmgmedia.png' 
import mailf from '../img/portfolio/mailf.png' 
import dailymailplus from '../img/portfolio/dailymailplus.png' 
import insta from '../img/portfolio/insta.png' 
import roundicons from '../img/portfolio/roundicons.png' 
import treehouse from '../img/portfolio/treehouse.png' 
import startup from '../img/portfolio/startup-framework.png' 
import golden from '../img/portfolio/golden.png' 
import escape from '../img/portfolio/escape.png' 
import dmu from '../img/portfolio/dmu.png' 
import dreams from '../img/portfolio/dreams.png' 
import maya from '../img/portfolio/maya.png' 
import lucozade from '../img/portfolio/lucozade.png' 

class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Various Projects </h3>
                </div>
            </div>
            <div className="row">
                <Projects img={mailsubs} heading={'Mail Subscriptions'} muted={'Website'}/>
                <Projects img={myMail} heading={'MyMail'} muted={'Website'}/>
                <Projects img={dmgmedia} heading={'dmg::media careers'} muted={'Website'}/>
                <Projects img={mailf} heading={'Mail Finance'} muted={'Website'}/>
                <Projects img={dailymailplus} heading={'Daily Mailplus'} muted={'Website'}/>
                <Projects img={insta} heading={'Inspiration'} muted={'App'} />
                <Projects img={roundicons} heading={'Mailplus'} muted={'Automation'} />
                <Projects img={startup} heading={'Coffee Break'} muted={'Application Build'} />
                <Projects img={treehouse} heading={'Oscars 2014'} muted={'Wordpress'} />
                <Projects img={golden} heading={'BBC News Website'} muted={'Web Developement'} />
                <Projects img={escape} heading={'Centrica'} muted={'Developement'} />
                <Projects img={dmu} heading={'DMU'} muted={'Web Development'} />
                <Projects img={dreams} heading={'MC.Escher'} muted={'Project'} />
                <Projects img={maya} heading={'3D Modelling'} muted={'Project'} />
                <Projects img={lucozade} heading={'Lucozade'} muted={'Project'} />
            </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;