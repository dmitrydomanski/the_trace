import React from 'react';

import classes from './PersonPortrait.css';

const personPortrait = (props) => {
    const imageUrl = require(`../../../assets/${props.url}.jpg`);
    const image = (<img src={imageUrl}  alt='a person pic'/>)
    console.log(image);
    
    return (
        <div className={classes.PersonPortrait}
            style={{ backgroundImage: `url(${imageUrl})` }}>{props.children}</div>
    )
}

export default personPortrait;