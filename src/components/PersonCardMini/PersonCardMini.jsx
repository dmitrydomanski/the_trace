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
        const {
            url, parent, firstName, lastName,
            birthDate, deathDate, maidenName,
            addPersonTrigger,
        } = this.props;
        return (
            <div className={classes.PersonCardMini}>
                <PersonPortrait url={url} />

                <div
                    onMouseEnter={this.mouseEnteredHandler}
                    onMouseLeave={this.mouseLeavedHandler}
                >
                    {
                        overlay
                            ? (
                                <CardFooterOverlay
                                    parent={parent}
                                    addPersonTrigger={addPersonTrigger}
                                />
                            )
                            : (
                                <CardMiniFooter
                                    parent={parent}
                                    firstName={firstName}
                                    lastName={lastName}
                                    birthDate={birthDate}
                                    deathDate={deathDate}
                                    maidenName={maidenName}
                                />
                            )
                    }
                </div>
            </div>
        );
    }
}

PersonCardMini.propTypes = {
    url: PropTypes.string,
    parent: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    maidenName: PropTypes.string,
    birthDate: PropTypes.string.isRequired,
    deathDate: PropTypes.string,
    addPersonTrigger: PropTypes.func,
};

PersonCardMini.defaultProps = {
    url: '',
    maidenName: '',
    deathDate: null,
    parent: null,
    addPersonTrigger: null,
};
