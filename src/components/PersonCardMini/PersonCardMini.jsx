import React from 'react';
import PropTypes from 'prop-types';

import classes from './PersonCardMini.css';
import PersonPortrait from './PersonPortrait/PersonPortrait';
import CardMiniFooter from './CardMiniFooter/CardMiniFooter';

const personCardMini = ({ url, parent, firstName, lastName, birthDate, deathDate, maidenName }) => (
    <div className={classes.PersonCardMini}>
        <PersonPortrait url={url} />

        <CardMiniFooter
            parent={parent}
            firstName={firstName}
            lastName={lastName}
            birthDate={birthDate}
            deathDate={deathDate}
            maidenName={maidenName}
        />


    </div>
);

personCardMini.propTypes = {
    url: PropTypes.string.isRequired,
    parent: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    maidenName: PropTypes.string,
    birthDate: PropTypes.string.isRequired,
    deathDate: PropTypes.string,
};

personCardMini.defaultProps = {
    maidenName: '',
    deathDate: null,
    parent: null,
};

export default personCardMini;
