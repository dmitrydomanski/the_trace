import React from 'react';
import PropTypes from 'prop-types';

import classes from './PersonPortrait.css';

const personPortrait = ({ url, children }) => {
    const imageUrl = import(`../../../assets/${url}.jpg`);
    return (
        <div
            className={classes.PersonPortrait}
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >{children}
        </div>
    );
};

personPortrait.propTypes = {
    url: PropTypes.number.isRequired,
    children: PropTypes.node,
};

personPortrait.defaultProps = {
    children: null,
};

export default personPortrait;
