import React from 'react';

import classes from './PersonPortrait.css';

const personPortrait = (props) => {
    // const imageUrl = require(`../../../assets/${props.url}.jpg`);
    // console.log(imageUrl);
    // const image = (<img src={imageUrl ? imageUrl : "../../../assets/mock.jpg"}  alt='a person pic'/>);
    // console.log(image);
    
    // const image = (<img src={imageUrl ? imageUrl : "../../../assets/mock.jpg"}  alt='a person pic'/>);
    
    return (
        <div className={classes.PersonPortrait}
            // style={{ backgroundImage: `url(${props.url})` }}
            >{props.children}</div>
    )
}

export default personPortrait;