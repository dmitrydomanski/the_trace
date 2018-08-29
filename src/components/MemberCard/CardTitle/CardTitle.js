import React from 'react';

import classes from './CardTitle.css'

const cardTitle = (props) => (

    <div className={classes.CardTitle}>
        <div className={classes.Name}>{props.firstName} {props.lastName}</div>
        {props.maidenName && <div>nee {props.maidenName}</div>}
    </div>   

)

export default cardTitle;