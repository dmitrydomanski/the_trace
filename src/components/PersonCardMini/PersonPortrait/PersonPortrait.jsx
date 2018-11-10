import React from 'react';
import PropTypes from 'prop-types';

import classes from './PersonPortrait.css';

const personPortrait = ({ url, children }) => (
    <div
        className={classes.PersonPortrait}
        style={{
            backgroundImage: `url(${url})`,
        }}
    >{children}
    </div>
);

personPortrait.propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
};

personPortrait.defaultProps = {
    url: '',
    children: null,
};

export default personPortrait;
