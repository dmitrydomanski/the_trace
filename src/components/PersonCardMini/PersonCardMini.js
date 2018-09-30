import React from 'react';

import classes from './PersonCardMini.css';
// import CardTitle from '../MemberCard/CardTitle/CardTitle';
import PersonPortrait from '../PersonCardMini/PersonPortrait/PersonPortrait';
import CardMiniFooter from '../../components/PersonCardMini/CardMiniFooter/CardMiniFooter'
// import CardFooterOverlay from '../UIElements/CardFooterOverlay/CardFooterOverlay';
// import Portrait from '../MemberCard/Portrait/Portrait';
// import TextArea from '../MemberCard/TextArea/TextArea';

const personCardMini = (props) => (
    <div className={classes.PersonCardMini}>
        <PersonPortrait url={props.url}/>
        
        <CardMiniFooter
            firstName={props.firstName}
            lastName={props.lastName}
            birthDate={props.birthDate}
            deathDate={props.deathDate}
            maidenName={props.maidenName} />

       
    </div>
)

export default personCardMini;