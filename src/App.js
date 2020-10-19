import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import TopBanner from './Components/TopBanner/TopBanner';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';
import AdminPage from './Components/AdminPage/AdminPage';
import CatalogContext from './CatalogContext';
import STORE from './Components/Catalog/STORE';

class App extends React.Component {
	state = {
		categories: STORE.categories,
		learningTracks: STORE.learningTracks,
		courses: STORE.courses,
		error: null,
		addCourse: courses => {
			this.setState({
				courses: [ ...this.state.courses, courses ],
			})
		},
		deleteCourse: id => {
			console.log('before: ', this.state.courses);
			const newCourses = this.state.courses.filter(nc => 
				parseInt(nc.id) !== parseInt(id)
			)
 			this.setState({
				courses: newCourses,
			})
			console.log('after: ', this.state.courses);
		},
	};

	setCourses = courses => {
		this.setState({
			courses,
			error: null,
		})
	}

	render() {
		const contextValue = {
			categories: this.state.categories,
			learningTracks: this.state.learningTracks,
			courses: this.state.courses,
			addCourse: this.state.addCourse,
			deleteCourse: this.state.deleteCourse,
		}
		console.log(contextValue.categories);
		console.log(contextValue.learningTracks);
		console.log(contextValue.courses);
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