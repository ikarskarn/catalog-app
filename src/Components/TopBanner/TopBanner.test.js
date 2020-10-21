import React from 'react';
import ReactDOM from 'react-dom';
import TopBanner from './TopBanner';

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopBanner />, div);
    ReactDOM.unmountComponentAtNode(div);
})