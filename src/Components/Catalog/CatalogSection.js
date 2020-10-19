import React from 'react';
import CourseDescriptions from './CourseDescriptions.js';
import './Catalog.css';

function CatalogSection(props) {
    return (
        <section className={`rel category-section ${props.courses.length > 0 ? '' : 'hidden'}`}>
            <div className='course-title'>
                <header 
                    id={props.id}
                    className={`category-header`}
                >
                    <h3>{props.title}</h3>
                </header>
            </div>

            <div className='list-courses'>
                {props.courses.map((course) =>
                    <CourseDescriptions
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        courseCode={`Course ID: ${course.courseCode}`}
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