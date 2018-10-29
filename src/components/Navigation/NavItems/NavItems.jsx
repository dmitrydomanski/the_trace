import React from 'react';

import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';

const navItems = (props) => (
    <div className={classes.NavItems}>
        <NavItem componentClass='span'><Link to={{pathname: '/treechart'}}>tree</Link></NavItem>
        <NavItem componentClass='span'>gallery</NavItem>
        <NavItem componentClass='span'>documents</NavItem>
    </div>

);

export default navItems;
