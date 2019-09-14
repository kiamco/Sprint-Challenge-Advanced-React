import React from 'react';
import {
    render,
    getByText
} from '@testing-library/react';
import {Tooltip} from 'recharts';
import Chart from '../playerChart.js';
import data from '../../../../data.js'

test('is button rendering', () => {
    render(<Chart data={data} />)
})
            