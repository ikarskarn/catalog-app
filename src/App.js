import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import TopBanner from './Components/TopBanner/TopBanner';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';
import AdminPage from './Components/AdminPage/AdminPage';
import CatalogContext from './CatalogContext';
import config from './config';
import STORE from './Components/Catalog/STORE';

class App extends React.Component {
	state = {
		courses: STORE,
		error: null,
	};

	setCourses = courses => {
		this.setState({
			courses,
			error: null,
		})
	}

	addCourse = courses => {
		this.setState({
			courses: [ ...this.state.courses, courses ],
		})
	}

	deleteCourse = courseID => {
		const newCourses = this.state.bookmarks.filter(c => 
			c.id !== courseID
		)
		this.setState({
			courses: newCourses
		})
	}

	componentDidMount() {
		fetch(config.API_ENDPOINT, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) {
				return res.json().then(error => Promise.reject(error))
			}
			return res.json()
		})
		.then(this.setCourses)
		.catch(error => { 
			console.error(error)
			this.setState({ error })
		})
	}

	render() {
		const contextValue = {
			courses: this.state.courses,
			addCourse: this.addCourse,
			deleteCourse: this.deleteCourse,
		}
		return (
			<main className='App'>
				<CatalogContext.Provider value={contextValue}>
					<NavBar/>
					<TopBanner />
					<div className='content' aria-live='polite'>
						<Route
							exact
							path='/'
							component={HomePage}
						/>
						<Route
							path='/catalog'
							component={Catalog}
						/>
						<Route
							path='/admin'
							component={AdminPage}
						/>
					</div>
				</CatalogContext.Provider>
			</main>
		)
	}
}

export default App;