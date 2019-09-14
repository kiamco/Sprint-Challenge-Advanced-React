import React from 'react';
import useShow from './CustomHooks/show';

const Button = (props) => {
    const [isShow, setShow] = useShow('showing', false);

    const toggleMode = e => {
        e.preventDefault();
        setShow(!isShow);
    };

    return(
        <button onClick={toggleMode}> click</button>
    )
}

export default Button;