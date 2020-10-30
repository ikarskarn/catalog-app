import React from "react";
import CatalogSection from "./CatalogSection.js";
import SearchBar from "./SearchBar";
import CatalogContext from "../../CatalogContext.js";
import Footer from "../Footer/Footer.js";

class Catalog extends React.Component {
    static contextType = CatalogContext;
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            id: 0,
            category: 0,
            title: "",
            courseCode: "",
            learningTrack: "",
            certification: "",
            description: "",
        };
    }

    handleSearch = (e, query) => {
        e.preventDefault();
        this.setState({
            query,
        });
    };

    render() {
        const categories = this.context.categories || [];
        //const courses = this.context.courses || [];
        return (
            <div className="App-list">
                <SearchBar handleSearch={(e, query) => this.handleSearch(e, query)} />
                {categories.map((category) => (
                    <CatalogSection
                        key={`category-${category.id}`}
                        id={category.id}
                        title={category.title}
                        courses={this.context.courses
                            .filter(
                                (course) =>
                                    category.id === course.category_id &&
                                    course.title
                                        .toLowerCase()
                                        .includes(this.state.query.toLowerCase())
                            )
                            .map((course) => course)}
                    ></CatalogSection>
                ))}
                <Footer />
            </div>
        );
    }
}

export default Catalog;
