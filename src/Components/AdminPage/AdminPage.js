import React from 'react';
import CatalogContext from '../../CatalogContext';
import './AdminPage.css';
import AddCourseForm from '../Forms/AddCourseForm';
import DeleteCourseForm from '../Forms/DeleteCourseForm';

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

    render() {
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
                <AddCourseForm
                    state={this.state}
                    updateChooseForm={str=>this.updateChooseForm(str)}
                    updateAddCourse={str=>this.updateAddCourse(str)}
                    updatePageTitle={str=>this.updatePageTitle(str)}
                />
                <DeleteCourseForm
                    state={this.state}
                    updateChooseForm={str=>this.updateChooseForm(str)}
                    updateDeleteCourse={str=>this.updateDeleteCourse(str)}
                    updatePageTitle={str=>this.updatePageTitle(str)}
                />
            </div>
        )
    }
}

export default AdminPage;