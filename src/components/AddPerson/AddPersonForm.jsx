import React, { Component } from 'react';
import classes from './AddPersonForm.css';
import FormField from './FormField/FormField';

export default class AddPersonForm extends Component {
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
        return (
            <form className={classes.Form}>
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
