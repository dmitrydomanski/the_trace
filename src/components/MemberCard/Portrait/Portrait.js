import React from 'react';

import classes from './Portrait.css';

const portrait = (props) => {
    return (
        <div className={classes.Portrait}>{props.children}</div>
    )
}

export default portrait;