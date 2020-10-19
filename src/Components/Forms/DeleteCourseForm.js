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
        id: {
            value: 0,
        },
    }

    //#endregion
    
    handleCancelButton = () => {
        this.props.updateChooseForm('');
        this.props.updateDeleteCourse('hidden');
        this.props.updatePageTitle('What would you like to do?');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit hit');
        this.handleCancelButton();
    }

    render() {
        const { error } = this.state;
        const courseOptions = this.context.courses.courses.map((course, i) => {
            return(
                <option 
                    key={course.id}
                    id={course.id}
                    value={course.title}
                >
                    {course.title}
                </option>
            )
        });
        return (
            <section className={this.props.state.deleteCourse}>
                <form
                    className='delete-course-form'
                    onSubmit={(e)=>this.handleSubmit(e)}
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
                            defaultValue={''}
                            required
                        >
                            <option value="" disabled>Choose a Course</option>
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