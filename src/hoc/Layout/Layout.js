import React from 'react';

// import FamilyTree from '../../containers/FamilyTree/FamilyTree';
import FamilyTree from '../../containers/Chart';
import classes from './Layout.css';

// import Aux from '../Aux/Aux';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <h3>Menu, Toolbar, Navigation</h3>
            <FamilyTree />
        </div>
    )
}

export default layout;