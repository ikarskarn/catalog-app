import React from 'react';
import CatalogContext from '../../CatalogContext';

const Required = () => (
	<span className='DeleteCourse__required'>*</span>
)

class DeleteCourseForm extends React.Component {
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        error: null,
        id: 0,
    }

    //#endregion
    
    handleCancelButton = () => {
        this.props.updateChooseForm('');
        this.props.updateDeleteCourse('hidden');
        this.props.updatePageTitle('What would you like to do?');
    }

    updateID = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            id: e.target.value,
        })
    }

    handleDeleteCourseRequest = (e) => {
        e.preventDefault();
        this.context.deleteCourse(this.state.id);
        this.handleCancelButton();
    }

    render() {
        const { error } = this.state;
        const courses = this.context.courses || [];
        const courseOptions = courses.map((course) => {
            return(
                <option 
                    key={course.id}
                    id={course.id}
                    value={course.id}
                >
                    {course.title}
                </option>
            )
        });
        return (
            <section className={this.props.state.deleteCourse}>
                <form
                    className='delete-course-form'
                    onSubmit={(e)=>this.handleDeleteCourseRequest(e)}
                >
                    <div className='delete-course-error' role='alert' >
                        {error && <p>{error.message}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="course-to-delete">
                            Choose Course to Delete
                            {' '}
                            <Required />
                        </label>
                        <select
                            className="course-to-delete"
                            name="course-to-delete"
                            id="course-to-delete"
                            aria-label="Course To Delete"
                            aria-required="true"
                            aria-invalid="true"
                            defaultValue={0}
                            required
                            onChange={(e)=>this.updateID(e)}
                        >
                            <option value={0} disabled>Choose a Course</option>
                            {courseOptions}
                        </select>
                    </div>
                    <div className='delete-course-buttons'>
                        <button type='button' onClick={this.handleCancelButton}>
                            Cancel
                        </button>
                        {' '}
                        <button type='submit'>
                            Delete
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}

export default DeleteCourseForm;