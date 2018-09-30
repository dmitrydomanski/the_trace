import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import TreeChart from '../../components/TreeChart/TreeChart';
import HomePage from '../../components/HomePage/HomePage'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {

    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar color={this.props.location.pathname === '/' ? 'transparent' : 'dimgray'}
                    showLogo={this.props.location.pathname === '/' ? 'none' : 'flex'} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/treechart' render={props => (
                        <TreeChart />
                    )} />
                </Switch>
            </div>
        )

    }
}

export default withRouter(Layout);