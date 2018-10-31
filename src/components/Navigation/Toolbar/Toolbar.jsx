import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';

class Toolbar extends Component {
    handleClick = ({ history }) => {
        history.push('/');
    }

    render() {
        const { color, showLogo } = this.props;
        return (
            <header
                style={{
                    backgroundColor: color,
                }}
                className={classes.Toolbar}
            >
                <Logo click={this.handleClick} show={showLogo} />
                <NavItems />
            </header>
        );
    }
}

Toolbar.propTypes = {
    color: PropTypes.string.isRequired,
    showLogo: PropTypes.string.isRequired,
    // history: PropTypes.string.isRequired,
};

export default withRouter(Toolbar);
