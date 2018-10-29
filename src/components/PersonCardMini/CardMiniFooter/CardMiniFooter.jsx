import React, { Component } from 'react';

import classes from './CardMiniFooter.css';
import CardFooterOverlay from '../CardFooterOverlay/CardFooterOverlay';
import PropTypes from 'prop-types';



export default class CardMiniFooter extends Component {
    state = {
        showOverlay: false,
    }

    mouseEnteredHandler = () => {
        this.setState({
            showOverlay: true,
        });
    }

    mouseLeavedHandler = () => {
        this.setState({
            showOverlay: false,
        });
    }

    render() {
        const { showOverlay } = this.state;
        const { parent, firstName, lastName, maidenName, birthDate, deathDate } = this.props;
        return (
            <div
                className={classes.Wrapper}
                onMouseEnter={this.mouseEnteredHandler}
                onMouseLeave={this.mouseLeavedHandler}
            >
                {showOverlay
                    ? <CardFooterOverlay parent={parent} />
                    : (
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
                        </div>)}
            </div>
        );
    }
}

CardMiniFooter.propTypes = {
    parent: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    maidenName: PropTypes.string,
    birthDate: PropTypes.string.isRequired,
    deathDate: PropTypes.string.isRequired,
}
