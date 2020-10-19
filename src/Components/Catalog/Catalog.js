import React from 'react';
import CatalogSection from './CatalogSection.js';
import SearchBar from './SearchBar';
import CatalogContext from '../../CatalogContext.js';

class Catalog extends React.Component {
    static contextType = CatalogContext;
    constructor(props) {
        super(props);
        this.state = {
            query: '',
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
    }

    handleSearch = (e, query) => {
        e.preventDefault();
        this.setState({
            query
        })
    }

    render() {
        const store = this.context.courses;
        console.log(store.courses.length);
        return (
            <div className="App-list">
                <SearchBar
                    handleSearch={(e, query)=>this.handleSearch(e, query)}
                />
                {store.categories
                .map(category => (
                    <CatalogSection
                        key={category.key}
                        id={category.id}
                        title={category.title}
                        courses={(store.courses)
                            .filter(course => category.id === course.category && course.title.toLowerCase().includes(this.state.query.toLowerCase()))
                            .map(course => course)
                        }
                    >
                    </CatalogSection>
                ))}
            </div>
        )
    }
}

export default Catalog;