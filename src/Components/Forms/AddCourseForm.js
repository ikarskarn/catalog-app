import React from 'react';
import CatalogContext from '../../CatalogContext';

const Required = () => (
	<span className='AddCourse__required'>*</span>
)

class AddCourseForm extends React.Component {
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        error: null,
        id: {
            value: 0,
        },
        category: {
            value: 0,
        },
        title: {
            touched: false,
            value: '',
        },
        courseCode: {
            touched: false,
            value: '',
        },
        learningTrack: {
            value: '',
        },
        certification: {
            value: '',
        },
        description: {
            touched: false,
            value: '',
        },
    }

    //#endregion
    
    handleCancelButton = () => {
        this.props.updateChooseForm('');
        this.props.updateAddCourse('hidden');
        this.props.updatePageTitle('What would you like to do?');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit hit');
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
        
        return (
            <section className={this.props.state.addCourse}>
                <form
                    className='add-course-form'
                    onSubmit={(e)=>this.handleSubmit(e)}
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
                            aria-invalid="true"
                            defaultValue={''}  
                            required
                        >
                            <option value='' disabled>Choose a Category</option>
                            {categoryOptions}
                        </select>
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
                            aria-invalid="true"
                            defaultValue={'none'}
                        >
                            <option value="none">None</option>
                            {learningTrackOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="certification">Certification</label>
                        <select
                            className="certification"
                            name="certification"
                            id="certification"
                            aria-label="Certification for Course"
                            aria-invalid="true"
                            defaultValue={'none'}
                        >
                            <option value="none">None</option>
                            <option value="otc">Online Teaching Certification</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>
                            Course Description
                        </label>
                        <textarea
                            name='description'
                            id='description'
                            placeholder='Add a Description'
                            required
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
        )
    }
}

export default AddCourseForm;