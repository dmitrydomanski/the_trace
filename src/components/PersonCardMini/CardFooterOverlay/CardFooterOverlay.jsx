import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CardFooterOverlay.css';

const cardFooterOverlay = ({ parent }) => (
    <div className={classes.CardFooterOverlay}>
        {!parent
            ? (
                <div className={classes.OverlayLink}>
                    <FontAwesomeIcon
                        icon="portrait"
                        color="whitesmoke"
                        size="3x"
                        title="Add Parent"
                    />
                </div>
            )
            : null
        }
        <div className={classes.OverlayLink}>
            <FontAwesomeIcon
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
