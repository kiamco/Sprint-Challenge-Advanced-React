import useLocalStorage from './localStorage'
import React, { useEffect } from 'react';

const ShowGraph = (key, initialValue) => {

    const [show, setShow] = useLocalStorage('show', false);

    useEffect(() => {
        const app = document.querySelector('.container');
        if (app !== null) {
            show ? app.classList.add('hide') : app.classList.remove('hide');
        }
    }, [show])

    return [show, setShow];



}
export default ShowGraph;