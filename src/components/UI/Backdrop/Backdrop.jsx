import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const backdrop = ({ show, clicked }) => (
    show
        ? (
            <div
                role="link"
                tabIndex="-1"
                className={classes.Backdrop}
                onClick={clicked}
                onKeyPress={clicked}
            />
        )
        : null
);

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired,
};

export default backdrop;
