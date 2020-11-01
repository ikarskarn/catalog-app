import React from "react";
import CatalogContext from "../../CatalogContext";
import "./AdminPage.css";
import AddCourseForm from "../Forms/AddCourseForm";
import DeleteCourseForm from "../Forms/DeleteCourseForm";
import Footer from "../Footer/Footer";

class AdminPage extends React.Component {
    //reference context
    static contextType = CatalogContext;

    //#region State and State Updates
    state = {
        pageTitle: "What would you like to do?",
        chooseForm: "choose-form-section",
        addCourse: "add-course-section hidden",
        deleteCourse: "delete-course-section hidden",
        error: null,
    };

    //set state of page title
    updatePageTitle = (str) => {
        this.setState({
            pageTitle: str,
        });
    };

    //determine whether choose form buttons are visible or not
    //set to 'hidden' or ''
    updateChooseForm = (str) => {
        this.setState({
            chooseForm: `choose-form-section ${str}`,
        });
    };

    //determine whether add course form is visible or not
    //set to 'hidden' or ''
    updateAddCourse = (str) => {
        this.setState({
            addCourse: `add-course-section ${str}`,
        });
    };

    //determine whether delete form is visible or not
    //set to 'hidden' or ''
    updateDeleteCourse = (str) => {
        this.setState({
            deleteCourse: `delete-course-section ${str}`,
        });
    };
    //#endregion

    //hide form choice buttons and show specified form
    handleTopButton = (str) => {
        this.updateChooseForm("hidden");

        if (str === "create") {
            this.updateAddCourse("");
            this.updatePageTitle("Create New Course");
        } else if (str === "delete") {
            this.updateDeleteCourse("");
            this.updatePageTitle("Delete Course");
        }
    };

    render() {
        return (
            <div className="admin-page">
                <h2>{this.state.pageTitle}</h2>
                <section className={this.state.chooseForm}>
                    <button type="button" onClick={() => this.handleTopButton("create")}>
                        Create New Course
                    </button>
                    <button type="button" onClick={() => this.handleTopButton("delete")}>
                        Delete a Course
                    </button>
                </section>
                <AddCourseForm
                    state={this.state}
                    updateChooseForm={(str) => this.updateChooseForm(str)}
                    updateAddCourse={(str) => this.updateAddCourse(str)}
                    updatePageTitle={(str) => this.updatePageTitle(str)}
                />
                <DeleteCourseForm
                    state={this.state}
                    updateChooseForm={(str) => this.updateChooseForm(str)}
                    updateDeleteCourse={(str) => this.updateDeleteCourse(str)}
                    updatePageTitle={(str) => this.updatePageTitle(str)}
                />
                <Footer />
            </div>
        );
    }
}

export default AdminPage;
