import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from '../../App.js';

test('is App rendering', async () => { await render(<App/>); });