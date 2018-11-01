import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import TreeChart from '../../components/TreeChart/TreeChart';
import HomePage from '../../components/HomePage/HomePage';
import DisclaimerPage from '../../components/UI/DisclaimerPage/DisclaimerPage';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

// const handleClick = () => alert('click');

const layout = ({ location }) => (
    <div className={classes.Layout}>
        <Toolbar
            color={location.pathname === '/' ? 'transparent' : 'dimgray'}
            showLogo={location.pathname === '/' ? 'none' : 'flex'}
        />
        <Switch>
            <Route
                exact
                path="/"
                component={HomePage}
            />
            <Route
                path="/treechart"
                component={TreeChart}
            />
            <Route
                path="/gallery"
                component={DisclaimerPage}
            />
            <Route
                path="/gallery"
                component={DisclaimerPage}
            />
        </Switch>
    </div>
);

layout.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
};

layout.defaultProps = {
    location: {
        pathname: '',
    },
};

export default withRouter(layout);
