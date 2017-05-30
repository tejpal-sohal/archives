import React from 'react'

const Project = (props) => {
    return (
        <div className="col-md-4 col-sm-6 portfolio-item">
            <a href={`${props.href}`} className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={`${props.projectImg}`} className="img-responsive" alt="" />
            </a>
            <div className="portfolio-caption">
                <h4>{props.heading}</h4>
                <p className="text-muted">{props.muted}</p>
            </div>
        </div>
    )
}

export default Project