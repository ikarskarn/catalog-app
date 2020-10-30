import React from "react";
import CourseDescriptions from "./CourseDescriptions.js";
import "./Catalog.css";

function CatalogSection(props) {
    const courses = props.courses || [];

    return (
        <section className={`rel category-section ${courses.length > 0 ? "" : "hidden"}`}>
            <div className="course-title">
                <header id={props.id} className={`category-header`}>
                    <h3>{props.title}</h3>
                </header>
            </div>

            <div className="list-courses">
                {courses.map((course) => (
                    <CourseDescriptions
                        key={`course-${course.id}`}
                        id={course.id}
                        title={course.title}
                        courseCode={`Course ID: ${course.course_code}`}
                        learningTrack={`Learning Track: ${course.learning_track_id}`}
                        certification={`Certification: ${course.certification}`}
                        description={course.course_description}
                    />
                ))}
            </div>
        </section>
    );
}

CatalogSection.defaultProps = {
    items: [],
};

export default CatalogSection;
