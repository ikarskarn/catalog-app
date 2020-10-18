import React from 'react';
//import CategoryButtons from './CatalogButtons';
import CatalogSection from './CatalogSection.js';
import STORE from './STORE.js';
import SearchBar from './SearchBar';
import TopBanner from '../TopBanner/TopBanner';
import NavBar from '../NavBar/NavBar';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    handleSearch = (e, query) => {
        e.preventDefault();
        this.setState({
            query
        })
    }
    render() {
        const store = STORE;
        return (
            <div className="App-list">
                <SearchBar
                    handleSearch={(e, query)=>this.handleSearch(e, query)}
                />
                {store.categories
                .filter(category => category.id !== 'random')
                .map(category => (
                    <CatalogSection
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        courses={category.courseIds
                            .filter(id => store.courses[id].name.toLowerCase().includes(this.state.query.toLowerCase()))
                            .map(id => store.courses[id])}
                    >
                    </CatalogSection>
                ))}
            </div>
        )
    }
}

export default Catalog;