import React, { Component } from 'react'
import classes from './FormField.css'

const formField = (props) => (
    <React.Fragment>
        <label> {props.label}
            <input name={props.name} type={props.type} onChange={props.inputChanged} />
        </label>
    </React.Fragment>
)

export default formField;