import React, { Component } from 'react';
import dailymailplusPrev from '../img/portfolio/dailymailplusPrev.png'
import myMailPrev from '../img/portfolio/myMailPrev.png'
import dmgsitePrev from '../img/portfolio/dmgsitePrev.png'
import mailFinancePrev from '../img/portfolio/mailfinancePrev.png'
import mailsubsPrev from '../img/portfolio/mailsubsPrev.png'
import roundiconsFree from '../img/portfolio/roundicons-free.png'
import treehousePreview from '../img/portfolio/treehouse-preview.png'
import startupFrameworkPreview from '../img/portfolio/startup-framework-preview.png'
import goldenPreview from '../img/portfolio/golden-preview.png'
import centrica from '../img/portfolio/centrica.png'
import dmuPreview from '../img/portfolio/dmupreview.png'
import povray from '../img/portfolio/povray.png'
import luco from '../img/portfolio/luco.png'
import bender from '../img/portfolio/bender.mp4'

class ProfolioModals extends Component {
    render() {
        return (
            //         <!-- Portfolio Modals -->
            // <!-- Use the modals below to showcase details about your portfolio projects! -->
            // <!-- Portfolio Modal 1 -->
            <div>
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>MailPlus</h2>
                                        <p className="item-intro text-muted">Application</p>
                                        <img className="img-responsive" src={roundiconsFree} alt="" />
                                        <p>The MailPlus Programme started in early 2012 with a view to re-imagine the printed Daily Mail newspaper on the tablets. Since then, we have launched apps on the Apple AppStore for the iPad (using the Digital Publishing Solution from Adobe), the Amazon MarketPlace for the Kindle Family of devices and the Google PlayStore for the Android tablets. The app for the Android devices is a custom Android app, built in-house. Apart from the daily printed news, the apps carry 30 interactive puzzles and interactive TV and Radio listings.</p>
                                        <ul className="list-inline">
                                            {/*<!-- <li>Date: June 2013</li> -->*/}
                                            <li>Client: dmg::media</li>
                                            <li>Category: Mobile Application</li>
                                        </ul>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*// <!-- Portfolio Modal 2 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>Coffee Break</h2>
                                        <p className="item-intro text-muted">Application</p>
                                        <img className="img-responsive img-centered" src={startupFrameworkPreview} alt="" />
                                        <p>Coffee Break application which is part of MailPlus features
                            30 puzzles (digital verison) of games which are printed in the DailyMail everyday. This application was build in-house using Angularjs, HTML5 and CSS3 and uses customised Word Press CMS which imported the XML puzzles and publishes them using automated services.</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 3 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Oscars 2014 Solution</h2>
                                        <p className="item-intro text-muted">Live coverage of Oscars 2014</p>
                                        <img className="img-responsive img-centered" src={treehousePreview} alt="" />
                                        <p>Custom backend system was created using wordpress which was hosted to allow 'Live photos' to be uploaded
                             from the after party at the Academy Awards in Hollywood, Los Angeles to be pushed live for the MailPlus edition.</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<!-- Portfolio Modal 4 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>BBC News Online</h2>
                                        <p className="item-intro text-muted">Relaunch of BBC News online</p>
                                        <img className="img-responsive img-centered" src={goldenPreview} alt="" />
                                        <p>Lanched in July 2010  site was completely redesigned, with the vertical section headings moved to run horizontally near the top of the page. The new design, incorporating larger in-line videos within news articles and standardised font usage, was introduced as a first step to bringing the entire BBC website into line with its new style guidelines.</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 5 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Smart Metering</h2>
                                        <p className="item-intro text-muted">Centrica</p>
                                        <img className="img-responsive img-centered" src={centrica} alt="" />
                                        <p>Smart Metering Team which designed and delievered backend web soultion for automatic
                            meter reading and vend code generation as part of goverment energy saving scheme </p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 6 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>De Montfort Univeristy </h2>
                                        <p className="item-intro text-muted">website</p>
                                        <img className="img-responsive img-centered" src={dmuPreview} alt="" />
                                        <p>Build using HTML, CSS and Javascript the new improved website for De Montfort University Student intranet which provided information to students in news and events around the campus</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 7 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Persistence of Vision Raytracer</h2>
                                        <p className="item-intro text-muted">C++</p>
                                        <img className="img-responsive img-centered" src={povray} alt="" />
                                        <p>To use Pov-Ray to create a 3D scene similar to that represented in one of the Escher artworks selected.</p>
                                        <p>Maurits Cornelis Escher (1898-1972) was a graphic artist.  He is most famous for his so-called impossible structures.The work, which I began to embark on and appealed to me, was the architectural “impossible” structure called Cycle 1938 Lithograph.</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 8 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Animation</h2>
                                        <p className="item-intro text-muted">Bender : from the hit TV series “Futurama”. </p>
                                        <video width="560" height="340" preload="auto" controls>
                                            <source src={bender} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                        </video>
                                        <p>The task for this assignment was to build a model character of any choice and to animate that character into the gallery.The character which is built should walk into the room and interact with the surroundings and look realistic. </p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 9 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal9" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Lucozade energy</h2>
                                        <p className="item-intro text-muted">Rendering</p>
                                        <img className="img-responsive img-centered" src={luco} alt="" />
                                        <p>This assignment was to construct life like object using texutre components with Maya 3D</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 10 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal10" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Mail Subscriptions</h2>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.mailsubscriptions.co.uk/"><p className="item-intro text-muted">click here to visit website</p></a>
                                        <img className="img-responsive img-centered" src={mailsubsPrev} alt="" />
                                        <p>Built using Bootstrap, JQuery and PHP Zend Framework</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 11 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal11" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>dmg::media careers</h2>
                                        <a target="_blank" rel="noopener noreferrer" href="http://www.dmgmedia.co.uk/careers/"><p className="item-intro text-muted">click here to visit website</p></a>
                                        <img className="img-responsive img-centered" src={dmgsitePrev} alt="" />
                                        <p>Built using Bootstrap, JQuery and Angular JS</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<!-- Portfolio Modal 12 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal12" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Motivation App</h2>
                                        <p className="item-intro text-muted">#motivation</p>
                                        {/*<!--     <img className="img-responsive img-centered" src="img/portfolio/dmgsitePrev.png" alt=""> -->*/}
                                        <iframe src="https://s3-eu-west-1.amazonaws.com/instaqoute/index.html#/before5am" title="insta"></iframe>
                                        <p>Application for motivation build using instagram API/Angular/Boostrap/AWS</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<!-- Portfolio Modal 13 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal13" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Daily Mailplus</h2>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.dailymailplus.co.uk/"><p className="item-intro text-muted">click here to visit website</p></a>
                                        <img className="img-responsive img-centered" src={dailymailplusPrev} alt="" />
                                        <p>HTML5/CSS3/JQuery</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 14 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal14" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>My Mail</h2>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.mymail.co.uk/home"><p className="item-intro text-muted">click here to visit website</p></a>
                                        <img className="img-responsive img-centered" src={myMailPrev} alt="" />
                                        <p>Built using Angular JS</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Portfolio Modal 15 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal15" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        {/*<!-- Project Details Go Here -->*/}
                                        <h2>Mail Finance</h2>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.mailfinance.co.uk/"><p className="item-intro text-muted">click here to visit website</p></a>
                                        <img className="img-responsive img-centered" src={mailFinancePrev} alt="" />
                                        <p>HTML5/CSS3/Zend Framework</p>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default ProfolioModals