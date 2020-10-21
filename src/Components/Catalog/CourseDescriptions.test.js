import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CourseDescriptions from './CourseDescriptions';

describe('<CourseDescriptions />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<CourseDescriptions />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

