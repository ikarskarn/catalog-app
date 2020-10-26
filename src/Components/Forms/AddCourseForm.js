import React from 'react';
import CatalogContext from '../../CatalogContext';
import config from '../../config';

const Required = () => (
	<span className='AddCourse__required'>*</span>
)

class AddCourseForm extends React.Component {
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        error: null,
        id: 0,
        category: 0,
        title: '',
        courseCode: '',
        learningTrack: 0,
        certification: '',
        description: '',
    }

    //#endregion
    
    handleCancelButton = () => {
        this.props.updateChooseForm('');
        this.props.updateAddCourse('hidden');
        this.props.updatePageTitle('What would you like to do?');
    }

    handleAddCourseRequest = (e) => {
        e.preventDefault();
        //const id = parseInt(this.context.courses.length + 1);
        const category_id = parseInt(this.state.category);
        const title = this.state.title;
        const course_code = this.state.courseCode;
        const learning_track_id = parseInt(this.state.learningTrack);
        const certification = this.state.certification;
        const course_description = this.state.description;
        const newCourse = { category_id, title, course_code, learning_track_id, certification, course_description };
        
        const url=`${config.API_ENDPOINT}/api/courses`
        const options = {
            method: 'POST',
            body: JSON.stringify(newCourse),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        fetch(url, options)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(this.context.addCourse(newCourse))
        .catch(error => {
            console.error(error)
        })
    
        this.handleCancelButton();
    }

    updateCategory = (e) => {
        const category = parseInt(e.target.value);
        this.setState({
            category
        })
    }

    updateTitle = (e) => {
        const title = e.target.value;
        this.setState({
            title
        })
    }

    updateCourseCode = (e) => {
        const courseCode = e.target.value;
        this.setState({
            courseCode
        })
    }

    updateLearningTrack = (e) => {
        const learningTrack = parseInt(e.target.value);
        this.setState({
            learningTrack
        })
    }

    updateCertification = (e) => {
        const certification = e.target.value;
        this.setState({
            certification
        })
    }

    updateDescription = (e) => {
        const description = e.target.value;
        this.setState({
            description
        })
    }

    render() {
        const { error } = this.state;
        const categories = this.context.categories || [];
        const categoryOptions = categories.map((category) => {
            return(
                <option 
                    key={`category-${category.id}`}
                    id={category.id}
                    value={category.id}
                >
                    {category.title}
                </option>
            )
        });
        const learningTracks = this.context.learningTracks || [];
        const learningTrackOptions = learningTracks.map((track) => {
            return(
                <option 
                    key={`track-${track.id}`}
                    id={track.id}
                    value={track.id}
                >
                    {track.title}
                </option>
            )
        });
        
        return (
            <section className={this.props.state.addCourse}>
                <form
                    className='add-course-form'
                    onSubmit={(e)=>this.handleAddCourseRequest(e)}
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
                            onChange={e=>this.updateCategory(e)}
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
                            onChange={e=>this.updateTitle(e)}
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
                            onChange={e=>this.updateCourseCode(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="learning-track">
                            Learning Track
                            {' '}
                            <Required />
                        </label>
                        <select
                            className="learning-track"
                            name="learning-track"
                            id="learning-track"
                            aria-label="Learning Track for Course"
                            aria-invalid="true"
                            defaultValue={''}
                            onChange={e=>this.updateLearningTrack(e)}
                        >
                            <option value='' disabled>Choose a Learning Track</option>
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
                            onChange={e=>this.updateCertification(e)}
                        >
                            <option value="none">None</option>
                            <option value="otc">Online Teaching Certification</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>
                            Course Description
                            {' '}
                            <Required />
                        </label>
                        <textarea
                            name='description'
                            id='description'
                            placeholder='Add a Description'
                            required
                            onChange={e=>this.updateDescription(e)}
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