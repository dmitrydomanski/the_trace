import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './AddPersonForm.css';
import FormField from './FormField/FormField';

export default class AddPersonForm extends Component {
    closeStyle = {
        position: 'absolute',
        left: '65%',
        color: 'crimson',
        cursor: 'pointer',
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    formChangeHandler = (event) => {
        const { target } = event;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    }

    formSubmitHandler = () => {

    }

    render() {
        const { formClosed } = this.props;
        return (
            <form className={classes.Form}>
                <FontAwesomeIcon
                    icon="times-circle"
                    title="Cancel add person"
                    style={this.closeStyle}
                    onClick={formClosed}
                />
                <div className={classes.FormTitle}>Add person</div>
                <FormField label="Name" name="firstName" type="string" inputChanged={this.formChangeHandler} />
                <FormField label="Last Name" name="lastName" type="string" inputChanged={this.formChangeHandler} />
                <FormField label="Birth date" name="birthDate" type="string" inputChanged={this.formChangeHandler} />
                <FormField label="Death date" name="deathDate" type="string" inputChanged={this.formChangeHandler} />

                <FormField label="Gender" name="gender" type="string" inputChanged={this.formChangeHandler} />

                <FormField label="Matrimonial status" name="matrimonialStatus" type="string" inputChanged={this.formChangeHandler} />
                <FormField label="Maiden name" name="maidenName" type="string" inputChanged={this.formChangeHandler} />

            </form>
        );
    }
}

AddPersonForm.propTypes = {
    formClosed: PropTypes.func,
};

AddPersonForm.defaultProps = {
    formClosed: null,
};
