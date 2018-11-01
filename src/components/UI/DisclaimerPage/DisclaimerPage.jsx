import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classes from './DicslaimerPage.css';

const disclaimerPage = ({ location }) => (
    <div className={classes.Layout}>
        <div className={classes.Disclaimer}>{location.pathname} page is under construction</div>
    </div>
);

disclaimerPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

disclaimerPage.defaultProps = {
    location: {
        pathname: '',
    },
};

export default withRouter(disclaimerPage);
