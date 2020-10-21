import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CatalogSection from './CatalogSection';

describe('<CatalogSection />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<BrowserRouter>
				<CatalogSection />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});

