import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavItem.css';

const navItem = ({ active, link, children }) => (
    <span className={classes.NavItem}>
        <a
            href={link}
            className={active ? classes.active : null}
        >{children}
        </a>
    </span>
);

navItem.propTypes = {
    active: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default navItem;
