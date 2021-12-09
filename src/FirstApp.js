//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// Funcional components

const FirstApp = ({words, subtitle}) => {

    //const words = 'Hello brothers';

    return (
        <>
            <h1>{words}</h1>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    words: PropTypes.string.isRequired
}

FirstApp.defaultProps={
    subtitle: 'My first app'
}

export default FirstApp;