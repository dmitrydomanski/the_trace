import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
    <div className={classes.NavItems}>
        <NavItem componentClass="span">
            <Link to={{
                pathname: '/treechart',
            }}
            >tree
            </Link>
        </NavItem>
        <NavItem componentClass="span">
            <Link to={{
                pathname: '/gallery',
            }}
            >gallery
            </Link>
        </NavItem>
        <NavItem componentClass="span">
            <Link to={{
                pathname: '/documents',
            }}
            >documents
            </Link>
        </NavItem>
    </div>

);

export default navItems;
