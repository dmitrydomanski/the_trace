import React from 'react';

import classes from './TextArea.css';

const textArea = (props) => {
    return (
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
    );
};

export default textArea;