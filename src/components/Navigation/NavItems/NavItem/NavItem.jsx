import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavItem.css';

const navItem = ({ active, link, children }) => (
    <span className={classes.NavItem}>
        <div
            href={link}
            className={active ? classes.active : null}
        >{children}
        </div>
    </span>
);

navItem.propTypes = {
    active: PropTypes.string,
    link: PropTypes.string,
    children: PropTypes.node,
};

navItem.defaultProps = {
    active: '',
    link: '',
    children: null,
};

export default navItem;
