import React from 'react';
import classes from './Logo.css';
import coat from '../../../assets/coat.png'

const logo = (props) => (
    <div className={classes.Logo} onClick={props.click} style={{display: props.show}}>
    <img src={coat} alt='coat' /></div>
)

export default logo;