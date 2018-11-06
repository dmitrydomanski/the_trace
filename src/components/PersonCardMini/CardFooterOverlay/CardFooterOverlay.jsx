import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CardFooterOverlay.css';

const cardFooterOverlay = ({ parent, triggerAddPerson }) => (
    <div className={classes.CardFooterOverlay}>
        {!parent
            ? (
                <button
                    className={classes.OverlayLink}
                    onClick={triggerAddPerson}
                    type="button"
                >
                    <FontAwesomeIcon
                        icon="portrait"
                        color="whitesmoke"
                        size="3x"
                        title="Add Parent"
                    />
                </button>
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
    triggerAddPerson: PropTypes.func,
};
cardFooterOverlay.defaultProps = {
    parent: null,
    triggerAddPerson: null,
};
export default cardFooterOverlay;
