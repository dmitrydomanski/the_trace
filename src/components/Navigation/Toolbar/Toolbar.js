import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Logo from '../Logo/Logo';


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
        )
    }
}

export default withRouter(Toolbar);