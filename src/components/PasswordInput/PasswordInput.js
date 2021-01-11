import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToggleBool from '../../hooks/useToggleBool';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';
import './PasswordInput.scss';

/** Password inpuit with integratedlabel, quality tips, and show password toggle. */
const PasswordInput = ({
  htmlId,
  value,
  label,
  error,
  onChange,
  placeholder,
  maxLength,
  showVisibilityToggle,
  quality,
  ...props
}) => {
  const [showPassword, toggleShowPassword] = useToggleBool(false);

  const handleToggle = event => {
    toggleShowPassword();
    if (event) event.preventDefault();
  };

  return (
    <TextInput
      htmlId={htmlId}
      label={label}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      error={error}
      required
      {...props}
    >
      {showVisibilityToggle && (
        <a className="PasswordInput__toggle" href="#" onClick={handleToggle}>
          <EyeIcon />
        </a>
      )}
      {value.length > 0 && quality && (
        <ProgressBar percent={quality} width={130} />
      )}
    </TextInput>
  );
};

export default PasswordInput;
