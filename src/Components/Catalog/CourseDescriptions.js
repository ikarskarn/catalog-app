import React from 'react';
//import STORE from './STORE.js';
import './Catalog.css';

function CourseDescriptions(props) {
    function getCertLink(str) {
        console.log("Type: ", str);
        if(str === 'none') {
            return;
        } else if (str === "Certification: Online Teaching Certification") {
            return 'https://drive.google.com/file/d/1sCZj1B8XxYZNEcMfasd8LXAwUGJxpL1C/view?usp=sharing';
        }
    }
    return(
        <section className='course-section'>
            <h4 className='course-header'>{props.name}</h4>
            <div className='connections-block'>
                <div className="connections">
                    <p className={(props.learningTrack === 'Learning Track: none') ? 'course-association hidden' : 'course-association coming-soon'}>
                        {props.learningTrack}
                    </p>
                    <p className={(props.certification === 'Certification: none') ? 'course-association hidden' : 'course-association coming-soon'}>
                        {props.certification}
                    </p>
                </div>
                <div className='course-code'>
                    <p>{props.courseLink}</p>
                </div>
            </div>
            <p className='course-description'>{props.description}</p>
        </section>
    );
}

CourseDescriptions.defaultProps = {
    item: [],
}

export default CourseDescriptions;