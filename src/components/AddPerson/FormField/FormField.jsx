import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormField.css';

const formField = ({ label, name, type, inputChanged }) => (
    <div className={classes.FormField}>
        <label htmlFor={name}> {label}
            <input name={name} type={type} onChange={inputChanged} />
        </label>
    </div>
);

formField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputChanged: PropTypes.func.isRequired,
};

export default formField;
