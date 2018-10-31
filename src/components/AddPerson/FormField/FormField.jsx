import React from 'react';
// import classes from './FormField.css';
import PropTypes from 'prop-types';

const formField = ({ label, name, type, inputChanged }) => (
    <React.Fragment>
        <label htmlFor={name}> {label}
            <input name={name} type={type} onChange={inputChanged} />
        </label>
    </React.Fragment>
);

formField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputChanged: PropTypes.func.isRequired,
};

export default formField;
