import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardFooterOverlay.css';
import IconButton from '../../UI/IconButton/IconButton';

const handleClick = parent => parent;

const cardFooterOverlay = ({ parent }) => (
    <div className={classes.CardFooterOverlay}>
        {!parent
            ? (
                <IconButton
                    onClick={() => handleClick(parent)}
                    icon="portrait"
                    color="whitesmoke"
                    size="3x"
                    title="Add Parent"
                />
            )
            : null
        }
        <div className={classes.OverlayLink}>
            <IconButton
                onClick={() => handleClick(parent)}
                icon="child"
                color="whitesmoke"
                size="3x"
                title="Add Child"
            />
        </div>
    </div>
);
cardFooterOverlay.propTypes = {
    parent: PropTypes.string,
};
cardFooterOverlay.defaultProps = {
    parent: null,
};

export default cardFooterOverlay;
