import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './IconButton.css';

const iconButton = ({ onClick, icon, color, size, title }) => (
    <button
        className={classes.IconButton}
        type="button"
        onClick={onClick}
    >
        <FontAwesomeIcon
            icon={icon}
            color={color}
            size={size}
            title={title}
        />
    </button>
);

iconButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
};
iconButton.defaultProps = {
    color: null,
    size: null,
};

export default iconButton;
