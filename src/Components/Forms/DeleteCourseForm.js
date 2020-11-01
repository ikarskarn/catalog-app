import React from "react";
import CatalogContext from "../../CatalogContext";
import config from "../../config";

const Required = () => <span className="DeleteCourse__required">*</span>;

class DeleteCourseForm extends React.Component {
    //reference context
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        error: null,
        id: 0,
    };
    //#endregion

    //determines visibility of buttons and forms
    handleCancelButton = () => {
        //sets choose form button visible
        this.props.updateChooseForm("");
        //hides delete form
        this.props.updateDeleteCourse("hidden");
        //resets page title to default
        this.props.updatePageTitle("What would you like to do?");
    };

    //updates ID state
    updateID = (e) => {
        e.preventDefault();
        this.setState({
            id: e.target.value,
        });
    };

    //used to sort course list alphabetically
    order = (a, b) => {
        return a.props.children < b.props.children ? -1 : a > b ? 1 : 0;
    };

    //makes a delete request to the api
    handleDeleteCourseRequest = (e) => {
        e.preventDefault();
        const url = `${config.API_ENDPOINT}/api/courses/${this.state.id}`;
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        };
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((error) => {
                        throw error;
                    });
                }
                return res;
            })
            .then(this.context.deleteCourse(parseToInt(this.state.id)))
            .catch((error) => {
                console.error(error);
            });
        this.handleCancelButton();
    };

    render() {
        const { error } = this.state;
        //gets list of courses for form dropdown
        const courses = this.context.courses || [];
        const courseOptions = courses
            .sort()
            .map((course) => {
                return (
                    <option key={`course-${course.id}`} id={course.id} value={course.id}>
                        {course.title}
                    </option>
                );
            })
            .sort(this.order);
        return (
            <section className={this.props.state.deleteCourse}>
                <form
                    className="delete-course-form"
                    onSubmit={(e) => this.handleDeleteCourseRequest(e)}
                >
                    <div className="delete-course-error" role="alert">
                        {error && <p>{error.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="course-to-delete">
                            Choose Course to Delete <Required />
                        </label>
                        <select
                            className="course-to-delete"
                            name="course-to-delete"
                            id="course-to-delete"
                            aria-label="Course To Delete"
                            aria-required="true"
                            aria-invalid="true"
                            defaultValue={""}
                            required
                            onChange={(e) => this.updateID(e)}
                        >
                            <option value={""} disabled>
                                Choose a Course
                            </option>
                            {courseOptions}
                        </select>
                    </div>
                    <div className="delete-course-buttons">
                        <button type="button" onClick={this.handleCancelButton}>
                            Cancel
                        </button>{" "}
                        <button type="submit">Delete</button>
                    </div>
                </form>
            </section>
        );
    }
}

DeleteCourseForm.defaultProps = {
    state: [],
};

export default DeleteCourseForm;
