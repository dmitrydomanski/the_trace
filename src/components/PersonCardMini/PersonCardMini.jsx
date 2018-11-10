import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PersonCardMini.css';
import PersonPortrait from './PersonPortrait/PersonPortrait';
import CardMiniFooter from './CardMiniFooter/CardMiniFooter';
import CardFooterOverlay from './CardFooterOverlay/CardFooterOverlay';

export default class PersonCardMini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: false,
        };
    }

    mouseEnteredHandler = () => {
        this.setState({
            overlay: true,
        });
    }

    mouseLeavedHandler = () => {
        this.setState({
            overlay: false,
        });
    }

    render() {
        const { overlay } = this.state;
        const { person, addPersonTrigger } = this.props;
        return (
            <div className={classes.PersonCardMini}>
                <PersonPortrait url={person.url} />

                <div
                    onMouseEnter={this.mouseEnteredHandler}
                    onMouseLeave={this.mouseLeavedHandler}
                >
                    {
                        overlay
                            ? (
                                <CardFooterOverlay
                                    person={person}
                                    addPersonTrigger={addPersonTrigger}
                                />
                            )
                            : (
                                <CardMiniFooter
                                    parent={person.parent}
                                    firstName={person.firstName}
                                    lastName={person.lastName}
                                    birthDate={person.birthDate}
                                    deathDate={person.deathDate}
                                    maidenName={person.maidenName}
                                />
                            )
                    }
                </div>
            </div>
        );
    }
}

PersonCardMini.propTypes = {
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

PersonCardMini.defaultProps = {
    person: null,
    addPersonTrigger: null,
};
