import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ number = 1 }) => {

    const [counter, setCounter] = useState(number);

    //handeAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    const handleSubtract = (e) => {
        setCounter(counter - 1);
    }

    const handleReset = (e) => {
        setCounter(number);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubtract}> -1 </button>
        </>)
}


CounterApp.propTypes
    = {
    number: PropTypes.number.isRequired
}

export default CounterApp;
