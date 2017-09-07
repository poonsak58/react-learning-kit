import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../../css/components/main-section';

const cx = classNames.bind(styles);

const InputField = ({ name, value, onUpdate }) => {
  return (
    <input
        type="text"
        className="form-control"
        name={name}
        defaultValue={value}
        onKeyUp={(e) => {
            onUpdate(e.target.value);
        }}
    />
  );
};

InputField.propTypes = {

};

export default InputField;
