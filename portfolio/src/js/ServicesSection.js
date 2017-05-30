import React, { Component } from 'react'
import Skills from './SkillsComp'

class ServicesSection extends Component {
  render() {
    return (
        // <!-- Services Section -->
    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Who am i?</h2>
                    <p className="section-subheading text-muted">I’ve greatly enjoyed the constant change and evolution of the internet industry and mobile apps. One of my strongest assets is a diversity of  real world experience working on all kinds of projects with all kinds of clients (public and private organisations). To stick around in this industry you have to be a quick learner, and I am constantly updating my skill set with new strategies and technologies</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row text-center">
                    <Skills heading={'HTML'} icon={'fa-html5'} muted={'extensive knowledge of HTML5'}/>
                    <Skills heading={'CSS3'} icon={'fa-css3'} muted={'use of SASS/LESS'} />
                    <Skills heading={'JavaScript'} icon={'fa-code'} muted={'good understanding of Javascript including frameworks such as JQuery/AngularJs'} />
                    <Skills heading={'Automation'} icon={'fa-cog'} spin={'fa-spin'} muted={'writen TDD automation with frameworks such as Jbehave with Selenium using Java.'} />
                    <Skills heading={'Web Apps/Design'} icon={'fa-html5'} muted={'enjoy development of web sites and Apps using frameworks such as Bootstrap.'} />
                    <Skills heading={'CMS'} icon={'fa-wordpress'} muted={'extensive knowledge of content management systems including low-level setup'} />
                    <Skills heading={'Java'} icon={'fa-coffee'} muted={'good understanding of OOP principles'} />
                    <Skills heading={'SQL'} icon={'fa-database'} muted={'good knowledge of SQL'} />
                    <Skills heading={'Linux'} icon={'fa-linux'} muted={'loving terminal commands OS'} />
                    <Skills heading={'github'} icon={'fa-github'} muted={'git version management'} />
                    <Skills heading={'aws'} icon={'fa-cloud'} muted={'understanding of S3 buckets and elastic beanstalk web deployment'} />
                    <Skills heading={'SEO'} icon={'fa-mobile'} muted={'implementaion of SEO, accessibility, web standards and cross browser compatibility'} />
            </div>
        </div>
    </section>
    );
  }
}

export default ServicesSection
