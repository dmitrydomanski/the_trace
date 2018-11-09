import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardFooterOverlay.css';
import IconButton from '../../UI/IconButton/IconButton';


const cardFooterOverlay = ({ parent, addPersonTrigger }) => {
    const handleClick = parentID => () => addPersonTrigger(parentID);
    return (
        <div className={classes.CardFooterOverlay}>
            {!parent
                ? (
                    <IconButton
                        onClick={handleClick(parent)}
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
                    onClick={handleClick(parent)}
                    icon="child"
                    color="whitesmoke"
                    size="3x"
                    title="Add Child"
                />
            </div>
        </div>
    );
};

cardFooterOverlay.propTypes = {
    parent: PropTypes.string,
    addPersonTrigger: PropTypes.func,
};
cardFooterOverlay.defaultProps = {
    parent: null,
    addPersonTrigger: null,
};

export default cardFooterOverlay;
