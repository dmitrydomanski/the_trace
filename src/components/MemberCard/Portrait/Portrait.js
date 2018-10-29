import React from 'react';

import classes from './Portrait.css';

const portrait = (props) => {
    // let imageUrl = 'url(../../../assets/' + props.url + '.jpg)'
    const imageUrl = require(`../../../assets/${props.url}.jpg`);
    const image = (<img src={imageUrl}  alt='a person pic'/>);
    console.log(image);
    
    return (
        <div className={classes.Portrait}
            style={{ backgroundImage: `url(${imageUrl})` }}>{props.children}</div>
    // >{props.children}</div>
    );
};

export default portrait;