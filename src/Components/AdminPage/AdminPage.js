import React from 'react';
import CatalogContext from '../../CatalogContext';
import './AdminPage.css';

const Required = () => (
	<span className='AddBookmark__required'>*</span>
)

class AdminPage extends React.Component {
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        pageTitle: 'What would you like to do?',
        chooseForm: 'choose-form-section',
        addCourse: 'add-course-section hidden',
        deleteCourse: 'delete-course-section hidden',
        error: null,
    }

    updatePageTitle = (str) => {
        this.setState({
            pageTitle: str,
        })
    }
    
    updateChooseForm = (str) => {
        this.setState({
            chooseForm: `choose-form-section ${str}`
        })
    }

    updateAddCourse = (str) => {
        this.setState({
            addCourse: `add-course-section ${str}`
        })
    }

    updateDeleteCourse = (str) => {
        this.setState({
            deleteCourse: `delete-course-section ${str}`
        })
    }
    //#endregion
    
    addNewCourse = () => {
        console.log('add new course ran');
    }

    deleteCourse = () => {
        console.log('delete course ran');
    }

    handleTopButton = (str) => {
        this.updateChooseForm('hidden');
                
        if(str === 'create') {
            this.updateAddCourse('');
            this.updatePageTitle('Create New Course');
        } else if (str === 'delete') {
            this.updateDeleteCourse('');
            this.updatePageTitle('Delete Course');
        }
    }

    handleCancelButton = () => {
        this.updateChooseForm('');
        this.updateAddCourse('hidden');
        this.updateDeleteCourse('hidden');
        this.updatePageTitle('What would you like to do?');
    }

    render() {
        const { error } = this.state;
        const categoryOptions = this.context.courses.categories.map((category, i) => {
            return(
                <option 
                    key={category.id}
                    id={category.id}
                    value={category.title}
                >
                    {category.title}
                </option>
            )
        });
        const learningTrackOptions = this.context.courses.learningTracks.map((track, i) => {
            return(
                <option 
                    key={track.key}
                    id={track.id}
                    value={track.title}
                >
                    {track.title}
                </option>
            )
        });
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
            <div className="admin-page">
                <h2>{this.state.pageTitle}</h2>
                <section className={this.state.chooseForm}>
                    <button type='button' onClick={()=>this.handleTopButton('create')} >
                        Create New Course
                    </button>
                    <button type='button' onClick={()=>this.handleTopButton('delete')} >
                        Delete a Course
                    </button>
                </section>
                <section className={this.state.addCourse}>
                    <form
                        className='add-course-form'
                        onSubmit={this.addNewCourse}
                    >
                        <div className='add-course-error' role='alert' >
                            {error && <p>{error.message}</p>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="category">
                                Category
                                {' '}
                                <Required />
                            </label>
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
                                {categoryOptions}
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
                                {learningTrackOptions}
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
                            <button type='button' onClick={this.handleCancelButton}>
                                Cancel
                            </button>
                            {' '}
                            <button type='submit'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
                <section className={this.state.deleteCourse}>
                    <form
                        className='delete-course-form'
                        onSubmit={this.deleteCourse}
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
                                {courseOptions}

                            </select>
                            <div id="delete-constraint">Choose a Course</div>
                            <div className="errorMessage" id="delete-error">
                                A Course Must be Selected for Deletion
                            </div>
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
            </div>
        )
    }
}

export default AdminPage;