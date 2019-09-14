import React from 'react';
import {
    render,
    getByText
} from '@testing-library/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



import Chart from '../playerChart.js';
import data from '../../../../data.js'

// test('is button rendering', () => {
//     const buttons = render(< Button />);
// })

test('is button rendering', () => {
    render(<Chart data={data} />)
})
            