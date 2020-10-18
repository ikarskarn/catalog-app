import React from 'react';
import CatalogContext from '../../CatalogContext';
import config from '../../config';
import './AdminPage.css';

const Required = () => (
	<span className='AddBookmark__required'>*</span>
)

export default class AdminPage extends React.Component {
    static contextType = CatalogContext;

    state = {
        pageTitle: 'What would you like to do?',
        error: null,
    }

    addNewCourse = () => {
        console.log('add new course ran');
    }

    deleteCourse = () => {
        console.log('delete course ran');
    }

    tempCall = () => {
		console.log("Temp call ran");
    }

    render() {
        const { error } = this.state;
        return (
            <div className="admin-page">
                <h2>{this.state.pageTitle}</h2>
                
                <button 
                    type='button'
                    onClick={()=>this.addNewCourse()}
                >
                    Create New Course
                </button>
                
                <button 
                    type='button'
                    onClick={()=>this.deleteCourse()}
                >
                    Delete a Course
                </button>

                <section className="add-course-section hidden">
                    <form
                        className='add-course-form'
                        onSubmit={()=>this.tempCall()}
                    >
                        <div className='add-course-error' role='alert' >
                            {error && <p>{error.message}</p>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                className="course-category"
                                name="category"
                                id="category"
                                aria-label="Category for Course"
                                aria-required="true"
                                aria-describedby="category-contraint"
                                aria-invalid="true"
                                defaultValue={'default'}
                            >
                                <option value="default" disabled>Choose a Folder</option>
                                <option value="cat1">Faculty Engagement</option>
                                <option value="cat2">Pedagogical Content Knowledge</option>
                                <option value="cat3">Feedback and Assessment</option>
                                <option value="cat4">Inclusive Pedagogy</option>
                                <option value="cat5">Curriculum Alignment</option>
                                <option value="cat6">Classroom Climate</option>
                                <option value="cat7">Instructional Strategies</option>
                                <option value="cat8">Faculty Adminstrative Processes</option>
                            </select>
                            <div id="category-constraint">Choose a Category</div>
                            <div className="errorMessage" id="category-error">
                                A Category Must be Selected
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor='title'>
                                Title
                                {' '}
                                <Required />
                            </label>
                            <input
                                type='text'
                                name='title'
                                id='title'
                                placeholder='Course Title'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='course-code'>
                                Course Code
                                {' '}
                                <Required />
                            </label>
                            <input
                                type='text'
                                name='course-code'
                                id='course-code'
                                placeholder='Course Code'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="learning-track">Learning Track</label>
                            <select
                                className="learning-track"
                                name="learning-track"
                                id="learning-track"
                                aria-label="Learning Track for Course"
                                aria-required="true"
                                aria-describedby="track-contraint"
                                aria-invalid="true"
                                defaultValue={'none'}
                            >
                                <option value="none">None</option>
                                <option value="accessibility">Online Accessibility</option>
                                <option value="prime">OTC Prime</option>
                                <option value="enrich">OTC Enrich</option>
                                <option value="multimedia">OTC Multimedia</option>
                                <option value="communcation">OTC Communication</option>
                                <option value="engagement">OTC Engagement</option>
                                <option value="foundations">Foundations for Teaching Online</option>
                                <option value="essentials">Teaching Essentials</option>
                                <option value="assessment">Assessment as Learning</option>
                            </select>
                            <div id="track-constraint">Choose a Learning Track</div>
                            <div className="errorMessage" id="track-error">
                                A Learning Track Must be Selected
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="certification">Certification</label>
                            <select
                                className="certification"
                                name="certification"
                                id="certification"
                                aria-label="Certification for Course"
                                aria-required="true"
                                aria-describedby="certification-contraint"
                                aria-invalid="true"
                                defaultValue={'none'}
                            >
                                <option value="none">None</option>
                                <option value="otc">Online Teaching Certification</option>
                            </select>
                            <div id="certification-constraint">Choose a Certification</div>
                            <div className="errorMessage" id="certification-error">
                                A Certification Must be Selected
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor='description'>
                                Course Description
                            </label>
                            <textarea
                                name='description'
                                id='description'
                            />
                        </div>
                        <div className='add-course-buttons'>
                            <button type='button' onClick={this.handleClickCancel}>
                                Cancel
                            </button>
                            {' '}
                            <button type='submit'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
                <section className="delete-course-section hidden">
                    <form
                        className='delete-course-form'
                        onSubmit={()=>this.tempCall()}
                    >
                        <div className='delete-course-error' role='alert' >
                            {error && <p>{error.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="course-to-delete">Choose Course to Delete</label>
                            <select
                                className="course-to-delete"
                                name="course-to-delete"
                                id="course-to-delete"
                                aria-label="Course To Delete"
                                aria-required="true"
                                aria-describedby="delete-contraint"
                                aria-invalid="true"
                                defaultValue={'default'}
                            >
                                <option value="default" disabled>Choose a Course</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                                <option value="course3">Course 3</option>
                            </select>
                            <div id="delete-constraint">Choose a Course</div>
                            <div className="errorMessage" id="delete-error">
                                A Course Must be Selected for Deletion
                            </div>
                        </div>
                        <div className='delete-course-buttons'>
                            <button type='button' onClick={this.handleClickCancel}>
                                Cancel
                            </button>
                            {' '}
                            <button type='submit'>
                                Delete
                            </button>
                        </div>
                    </form>
                </section>

            </div>
        )
    }
}