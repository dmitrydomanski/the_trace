import React from 'react';

import classes from './MemberCard.css';
import TextArea from '../MemberCard/TextArea/TextArea';
import Portrait from '../MemberCard/Portrait/Portrait';
import CardTitle from '../MemberCard/CardTitle/CardTitle';

const memberCard = (props) => (
    <div className={classes.FamilyCard}>

        <CardTitle
            firstName={props.firstName}
            lastName={props.lastName}
            maidenName={props.maidenName} />
        <div style={{ display: 'flex' }}>
            <Portrait />
            <TextArea
                birthDate={props.birthDate}
                deathDate={props.deathDate} />
        </div>
        
    </div>

);

export default memberCard;