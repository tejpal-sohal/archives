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
            <div className="row text-center hidden-xs hidden-sm ">
                    <Skills heading={'HTML'} icon={'fab fa-html5'} muted={'extensive knowledge of HTML5'}/>
                    <Skills heading={'CSS3'} icon={'fab fa-css3'} muted={'use of SASS/LESS'} />
                    <Skills heading={'JavaScript'} icon={'fab fa-js'} muted={'good understanding of Javascript'} />
                    <Skills heading={'React'} icon={'fab fa-react'} muted={'Framework'} />
                    <Skills heading={'Vue'} icon={'fab fa-vuejs'} muted={'Framework'} />
                    <Skills heading={'Sass'} icon={'fab fa-sass'} muted={'preprocessor scripting language'} />
                    <Skills heading={'Automation'} icon={'fas fa-cog'} spin={'fa-spin'} muted={'writen TDD automation'} />
                    <Skills heading={'Web Apps/Design'} icon={'fas fa-laptop'} muted={'frameworks such as Bootstrap.'} />
                    <Skills heading={'CMS'} icon={'fab fa-wordpress'} muted={'content management systems'} />
                    <Skills heading={'Java'} icon={'fas fa-coffee'} muted={'good understanding of OOP principles'} />
                    <Skills heading={'SQL'} icon={'fas fa-database'} muted={'good knowledge of SQL'} />
                    <Skills heading={'Linux'} icon={'fab fa-linux'} muted={'loving terminal commands OS'} />
                    <Skills heading={'github'} icon={'fab fa-github'} muted={'git version management'} />
                    <Skills heading={'aws'} icon={'fab fa-aws'} muted={'understanding of S3 buckets and elastic beanstalk web deployment'} />
                    <Skills heading={'SEO'} icon={'fas fa-mobile'} muted={'implementaion of SEO, accessibility, web standards and cross browser compatibility'} />
            </div>
        </div>
    </section>
    );
  }
}

export default ServicesSection
