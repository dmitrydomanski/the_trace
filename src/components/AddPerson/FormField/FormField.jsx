import React from 'react';
// import classes from './FormField.css';
import PropTypes from 'prop-types';

const formField = props => (
    <React.Fragment>
        <label> {props.label}
            <input name={props.name} type={props.type} onChange={props.inputChanged} />
        </label>
    </React.Fragment>
);

formField.propTypes = {
    label: PropTypes.label.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputChanged: PropTypes.func,
}

export default formField;