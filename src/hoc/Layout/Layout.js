import React from 'react';

import TreeChart from '../../containers/TreeChart/TreeChart';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <h3>Menu, Toolbar, Navigation</h3>
            <TreeChart />
        </div>
    )
}

export default layout;