import React from 'react';
import CourseDescriptions from './CourseDescriptions.js';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Catalog.css';

function CatalogSection(props) {
    console.log("Empty: ", props.courses.length);
    return (
        <section className={`rel category-section ${props.courses.length > 0 ? '' : 'hidden'}`}>
            <div className='course-title'>
                <header 
                    id={props.id}
                    className={`category-header`}
                >
                    <h3>{props.name}</h3>
                </header>
            </div>

            <div className='list-courses'>
                {props.courses.map((course) =>
                    <CourseDescriptions
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        courseLink={`Course ID: ${course.courseLink}`}
                        learningTrack={`Learning Track: ${course.learningTrack}`}
                        certification={`Certification: ${course.certification}`}
                        description={course.description}
                    />
                )}
            </div>
        </section>
    );    
}

CatalogSection.defaultProps = {
    items: [],
}

export default CatalogSection;