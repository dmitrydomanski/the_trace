import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';


class Toolbar extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <header style={{ backgroundColor: this.props.color }}
                className={classes.Toolbar}>
                <Logo click={this.handleClick} show={this.props.showLogo} />
                <NavItems />
            </header>
        );
    }
}

Toolbar.propTypes = {
    color: PropTypes.string.isRequired,
    showLogo: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired
};

export default withRouter(Toolbar);