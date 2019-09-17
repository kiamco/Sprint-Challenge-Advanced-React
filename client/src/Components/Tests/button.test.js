import React from 'react';
// import ReactDOM from 'react-dom';
import {
    render,
    getByText
} from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../../App.js';
import Button from '../button.js'

// test('is button rendering', () => {
//     const buttons = render(< Button />);
// })

test('Button renders', async () => { await render(<Button />); });
