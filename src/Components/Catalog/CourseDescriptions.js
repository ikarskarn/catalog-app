import React from "react";
import "./Catalog.css";

function CourseDescriptions(props) {
    //display courses using props values passed down by Course Section component
    return (
        <section className="course-section">
            <h4 className="course-header">{props.title}</h4>
            <div className="connections-block">
                <div className="connections">
                    <p
                        className={
                            props.learningTrack === "Learning Track: 1"
                                ? "course-association hidden"
                                : "course-association coming-soon"
                        }
                    >
                        {props.learningTrack}
                    </p>
                    <p
                        className={
                            props.certification === "Certification: none"
                                ? "course-association hidden"
                                : "course-association coming-soon"
                        }
                    >
                        {props.certification}
                    </p>
                </div>
                <div className="course-code">
                    <p>{props.courseCode}</p>
                </div>
            </div>
            <p className="course-description">{props.description}</p>
        </section>
    );
}

CourseDescriptions.defaultProps = {
    item: [],
};

export default CourseDescriptions;
