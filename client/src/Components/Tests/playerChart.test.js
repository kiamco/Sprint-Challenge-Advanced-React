import React from 'react';
// import ReactDOM from 'react-dom';
import {
    render,
    getByText
} from '@testing-library/react';

import Chart from '../playerChart.js';
import data from '../../../../data.js'

// test('is button rendering', () => {
//     const buttons = render(< Button />);
// })

test('is button rendering', () => {
            render( < Chart data = { data }
                /> )
            })