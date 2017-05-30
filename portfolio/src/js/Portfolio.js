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
                <Projects href={'#portfolioModal10'} projectImg={mailsubs} heading={'Mail Subscriptions'} muted={'Website'}/>
                <Projects href={'#portfolioModal15'} projectImg={myMail} heading={'MyMail'} muted={'Website'}/>
                <Projects href={'#portfolioModal11'} projectImg={dmgmedia} heading={'dmg::media careers'} muted={'Website'}/>
                <Projects href={'#portfolioModal14'} projectImg={mailf} heading={'Mail Finance'} muted={'Website'}/>
                <Projects href={'#portfolioModal13'} projectImg={dailymailplus} heading={'Daily Mailplus'} muted={'Website'}/>
                <Projects href={'#portfolioModal12'} projectImg={insta} heading={'Inspiration'} muted={'App'} />
                <Projects href={'#portfolioModal1'} projectImg={roundicons} heading={'Mailplus'} muted={'Automation'} />
                <Projects href={'#portfolioModal2'} projectImg={startup} heading={'Coffee Break'} muted={'Application Build'} />
                <Projects href={'#portfolioModal3'} projectImg={treehouse} heading={'Oscars 2014'} muted={'Wordpress'} />
                <Projects href={'#portfolioModal4'} projectImg={golden} heading={'BBC News Website'} muted={'Web Developement'} />
                <Projects href={'#portfolioModal5'} projectImg={escape} heading={'Centrica'} muted={'Developement'} />
                <Projects href={'#portfolioModal6'} projectImg={dmu} heading={'DMU'} muted={'Web Development'} />
                <Projects href={'#portfolioModal7'} projectImg={dreams} heading={'MC.Escher'} muted={'Project'} />
                <Projects href={'#portfolioModal8'} projectImg={maya} heading={'3D Modelling'} muted={'Project'} />
                <Projects href={'#portfolioModal9'} projectImg={lucozade} heading={'Lucozade'} muted={'Project'} />
            </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;