import React from 'react';
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
  label = 'Password',
  error,
  onChange,
  placeholder,
  maxLength = 50,
  showPasswordInitially = false,
  quality,
  ...props
}) => {
  const [showPassword, toggleShowPassword] = useToggleBool(
    showPasswordInitially
  );

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
      {showPassword && (
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

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used*/
  name: PropTypes.string.isRequired,

  /** Password Value */
  value: PropTypes.any,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Function called when password input value changes */
  onChange: PropTypes.func.isRequired,

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Placeholder to display when no password is entered */
  placeholder: PropTypes.string,

  /** When set to true, shows the toggle for displaying the currently entered password */
  showPasswordInitially: PropTypes.bool,

  /** Displaypassword quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number,

  /** Validation error to display */
  error: PropTypes.string,
};

export default PasswordInput;
