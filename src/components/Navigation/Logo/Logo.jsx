import React from 'react';
import PropTypes from 'prop-types';
import classes from './Logo.css';
import coat from '../../../assets/coat.png';

const logo = ({ click, show }) => (
    <div
        className={classes.Logo}
        onClick={click}
        style={{
            display: show,
        }}
        onKeyDown={click}
        role="link"
        tabIndex="-1"
    >
        <img src={coat} alt="coat" />
    </div>
);

logo.propTypes = {
    click: PropTypes.func.isRequired,
    show: PropTypes.string.isRequired,
};

export default logo;
