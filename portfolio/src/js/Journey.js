import React from 'react';

const Journey = (props) => {
    return (
       <li className={`${props.inverted}`}>
            <div className="timeline-image">
                <img className="img-circle img-responsive" src={`${props.img}`} alt="" />
            </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4 className="subheading">{props.subHeading}</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">{props.muted}</p>
                </div>
            </div>
       </li>
    )
}

export default Journey
