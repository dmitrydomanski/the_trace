import React, {Component} from 'react';

import classes from './CardMiniFooter.css'
import CardFooterOverlay from '../CardFooterOverlay/CardFooterOverlay';


export default class CardMiniFooter extends Component {
    state = {
        showOverlay: true
    }

    mouseEnteredHandler = () => {
        this.setState({ showOverlay: true })
    }

    mouseLeavedHandler = () => {
        this.setState({ showOverlay: false })
    }
    render() {
        return (
            <div className={classes.Wrapper}
                // onMouseEnter={this.mouseEnteredHandler}
                // onMouseLeave={this.mouseLeavedHandler}
                >
                {this.state.showOverlay ? <CardFooterOverlay parent={this.props.parent}/> : null}
                <div className={classes.CardMiniFooter}>
                    <div className={classes.Name}>{this.props.firstName} {this.props.lastName}</div>
                    {this.props.maidenName && <div>nee {this.props.maidenName}</div>}

                    <div className={classes.TextArea}>
                        {this.props.deathDate ?
                            (<div>born: {this.props.birthDate}
                                <br />
                                died: {this.props.deathDate}
                                <br />
                                age: {+this.props.deathDate.split('').slice(-4).join('')
                                    - this.props.birthDate.split('').slice(-4).join('')}</div>)
                            : (<div>born {this.props.birthDate}</div>)}
                    </div>
                </div>

            </div>
        )
    }
}
