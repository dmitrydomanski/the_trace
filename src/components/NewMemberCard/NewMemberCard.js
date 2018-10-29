import React from 'react';

import classes from './NewMemberCard.css';
import CardTitle from '../MemberCard/CardTitle/CardTitle';
import Portrait from '../MemberCard/Portrait/Portrait';
// import TextArea from '../MemberCard/TextArea/TextArea';

const newMemberCard = (props) => (
    <div className={classes.NewMemberCard}>
        <Portrait url={props.url}/>
        <CardTitle
            firstName={props.firstName}
            lastName={props.lastName}
            birthDate={props.birthDate}
            deathDate={props.deathDate}
            maidenName={props.maidenName} />
        {/* <TextArea
            birthDate={props.birthDate}
            deathDate={props.deathDate} /> */}
    </div>
);

export default newMemberCard;
