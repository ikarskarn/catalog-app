import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import TopBanner from './Components/TopBanner/TopBanner';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';
import AdminPage from './Components/AdminPage/AdminPage';
import CatalogContext from './CatalogContext';
import config from './config';

class App extends React.Component {
	state = {
		categories: [],
		learningTracks: [],
		courses: [],
		error: null,
		addCourse: courses => {
			this.setState({
				courses: [ ...this.state.courses, courses ],
			})
		},
		deleteCourse: id => {
			const newCourses = this.state.courses.filter(nc => 
				parseInt(nc.id) !== parseInt(id)
			)
 			this.setState({
				courses: newCourses,
			})
		},
		setCourses: courses => {
			this.setState({
				courses,
				error: null,
			})
		},

	};

	componentDidMount() {
		//get categories from api
		fetch(`${config.API_ENDPOINT}/api/categories`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => Promise.reject(error))
            }
            return response.json();
        })
        .then(categories => {
			this.setState({ categories })
        })
        .catch(error => {
            console.error('Category error: ', error);
        });
		
		//get learning-tracks from api
        fetch(`${config.API_ENDPOINT}/api/learning-tracks`, {
              method: 'GET',
              headers: {
                  'content-type': 'application/json'
              },
        })
        .then(response => {
            if(!response.ok) {
                return response.json().then(error => Promise.reject(error))
            }
            return response.json();
        })
        .then(learningTracks => {
            this.setState({ learningTracks })
        })
        .catch(error => {
            console.error('Learning Track error: ', error);
		})
		
		//get courses from api
		fetch(`${config.API_ENDPOINT}/api/courses`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			},
		})
		.then(response => {
			if(!response.ok) {
				return response.json().then(error => Promise.reject(error))
			}
			return response.json();
		})
		.then(courses => {
			this.setState({ courses })
		})
		.catch(error => {
			console.error('Course error: ', error);
	  })
    }

	render() {
		return (
			<main className='App'>
				<CatalogContext.Provider value={this.state}>
					<NavBar/>
					<TopBanner />
					<div className='content' aria-live='polite'>
						<Route exact path='/' component={HomePage} />
						<Route path='/catalog' component={Catalog} />
						<Route path='/admin' component={AdminPage} />
					</div>
				</CatalogContext.Provider>
			</main>
		)
	}
}

export default App;