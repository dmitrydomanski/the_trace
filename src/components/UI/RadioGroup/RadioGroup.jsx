import React from 'react';
import PropTypes from 'prop-types';
import classes from './RadioGroup.css';


const radioGroupButton = ({ gender, setGender }) => {
    const handleChange = genderValue => () => setGender(genderValue);
    return (
        <div className={classes.GroupButton}>
            <div>
                <label htmlFor="male"> male
                    <input
                        name="gender"
                        id="male"
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleChange('male')}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="female">female
                    <input
                        name="gender"
                        id="female"
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleChange('female')}
                    />
                </label>
            </div>
        </div>
    );
};

radioGroupButton.propTypes = {
    gender: PropTypes.string,
    setGender: PropTypes.func,
};

radioGroupButton.defaultProps = {
    gender: '',
    setGender: null,
};
export default radioGroupButton;
