import React from 'react';

const SkillsComp = (props) => {
    return (
        <div className="col-md-4">
            <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className={`fa ${props.icon} ${props.spin} fa-stack-1x fa-inverse`}></i>
            </span>
            <h4 className="service-heading">{props.heading}</h4>
            <p className="text-muted">{props.muted}</p>
        </div>
    )
}
export default SkillsComp
