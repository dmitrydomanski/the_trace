import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardFooterOverlay.css';
import IconButton from '../../UI/IconButton/IconButton';


const cardFooterOverlay = ({ person, addPersonTrigger }) => {
    const handleClick = (personNode, type) => () => addPersonTrigger(personNode, type);
    return (
        <div className={classes.CardFooterOverlay}>
            {!person.parent
                ? (
                    <IconButton
                        onClick={handleClick(person, 'parent')}
                        icon="portrait"
                        color="whitesmoke"
                        size="3x"
                        title="Add Parent"
                    />
                )
                : null
            }
            <div className={classes.OverlayLink}>
                <IconButton
                    onClick={handleClick(person, 'child')}
                    icon="child"
                    color="whitesmoke"
                    size="3x"
                    title="Add Child"
                />
            </div>
        </div>
    );
};

cardFooterOverlay.propTypes = {
    person: PropTypes.shape({
        url: PropTypes.number,
        parent: PropTypes.object,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        maidenName: PropTypes.string,
        birthDate: PropTypes.string.isRequired,
        deathDate: PropTypes.string,
    }),
    addPersonTrigger: PropTypes.func,
};
cardFooterOverlay.defaultProps = {
    person: null,
    addPersonTrigger: null,
};

export default cardFooterOverlay;
