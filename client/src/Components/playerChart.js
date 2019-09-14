import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Chart = (props) => {

    return(
        <div>
            <h1>Searches by country</h1>
            <LineChart width={800} height={300} data={props.data}>
                <Line type="monotone" dataKey="searches" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart;