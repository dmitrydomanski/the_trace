import React from 'react';

import classes from './CardMiniFooter.css'
import Aux from '../../../hoc/Aux/Aux';

const cardMiniFooter = (props) => (

    <Aux>
        <div className={classes.CardMiniFooter}>
            <div className={classes.Name}>{props.firstName} {props.lastName}</div>
            {props.maidenName && <div>nee {props.maidenName}</div>}
        </div>
        <div className={classes.TextArea}>
            {props.deathDate ?
                (<div>born: {props.birthDate}
                    <br />
                    died: {props.deathDate}
                    <br />
                    age: {+props.deathDate.split('').slice(-4).join('')
                        - props.birthDate.split('').slice(-4).join('')}</div>)
                : (<div>born {props.birthDate}</div>)}
        </div>
    </Aux>
)

export default cardMiniFooter;