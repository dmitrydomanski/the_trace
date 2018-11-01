import React from 'react';
import PropTypes from 'prop-types';

import classes from './PersonPortrait.css';
// import portrait from '../../../assets/8.jpg';

const personPortrait = ({ url, children }) => (
    // const imageUrl = import(`../../../assets/${url}.jpg`);
    // return (
    <div
        className={classes.PersonPortrait}
        style={{
            backgroundImage: `url(${url})`,
        }}
    >{children}
    </div>
    // );
);

personPortrait.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node,
};

personPortrait.defaultProps = {
    children: null,
};

export default personPortrait;
