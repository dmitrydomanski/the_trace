import React from 'react';
import PropTypes from 'prop-types';

import classes from './CardMiniFooter.css';

const cardMiniFooter = ({ firstName, lastName, maidenName, birthDate, deathDate }) => (
    <div className={classes.Wrapper}>
        <div className={classes.CardMiniFooter}>
            <div className={classes.Name}>
                {firstName} {lastName}
            </div>
            {maidenName && <div>nee {maidenName}</div>}

            <div className={classes.TextArea}>
                {deathDate
                    ? (
                        <div>born: {birthDate}
                            <br />
                            died: {deathDate}
                            <br />
                            age: {+deathDate.split('').slice(-4).join('')
                                - birthDate.split('').slice(-4).join('')}
                        </div>)
                    : (<div>born {birthDate}</div>)}
            </div>
        </div>
    </div>
);


cardMiniFooter.propTypes = {
    // parent: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    maidenName: PropTypes.string,
    birthDate: PropTypes.string.isRequired,
    deathDate: PropTypes.string,
};

cardMiniFooter.defaultProps = {
    maidenName: '',
    deathDate: null,
    // parent: null,
};

export default cardMiniFooter;
