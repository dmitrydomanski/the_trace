import React from 'react';

import classes from './PersonCardMini.css';
import PersonPortrait from './PersonPortrait/PersonPortrait';
import CardMiniFooter from './CardMiniFooter/CardMiniFooter'

const personCardMini = props => (
    <div className={classes.PersonCardMini}>
        <PersonPortrait url={props.url} />

        <CardMiniFooter
            parent={props.parent}
            firstName={props.firstName}
            lastName={props.lastName}
            birthDate={props.birthDate}
            deathDate={props.deathDate}
            maidenName={props.maidenName} />


    </div>
);

export default personCardMini;