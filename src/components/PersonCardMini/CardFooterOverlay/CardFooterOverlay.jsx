import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardFooterOverlay.css';

const cardFooterOverlay = ({ parent }) => (
    <div className={classes.CardFooterOverlay}>
        {!parent
            ? <div className={classes.OverlayLink}>add parent</div> : null
        }
        <div className={classes.OverlayLink}>add child</div>
    </div>
);
cardFooterOverlay.propTypes = {
    parent: PropTypes.number,
};
cardFooterOverlay.defaultProps = {
    parent: null,
};
export default cardFooterOverlay;
