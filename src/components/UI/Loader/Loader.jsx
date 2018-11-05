import React from 'react';
import classes from './Loader.css';

const loader = () => (
    //     <div className={classes.Loader} />

    <div className={classes.Wrapper}>
        <div className={classes.Striploader}>
            <div /><div /><div />
        </div>
    </div>
);

export default loader;
