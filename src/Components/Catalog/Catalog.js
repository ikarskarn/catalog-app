import React from "react";
import CatalogSection from "./CatalogSection.js";
import SearchBar from "./SearchBar";
import CatalogContext from "../../CatalogContext.js";
import Footer from "../Footer/Footer.js";

class Catalog extends React.Component {
    //reference context
    static contextType = CatalogContext;

    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    //update query state on change
    handleSearch = (e, query) => {
        e.preventDefault();
        this.setState({
            query,
        });
    };

    render() {
        //set categories to map
        const categories = this.context.categories || [];
        //filter courses by category id and search query
        //pass prop values to the Catalog Section component
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
