import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

/** Registration form with built-in validation */
const RegistrationForm = ({
  minPasswordLength = 8,
  onSubmit,
  confirmationMessage = 'Thanks for registering!',
}) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event =>
    setUser({ ...user, [event.target.name]: event.target.value });

  /** Returns a number from 0 to 100 that represents password quality.
   * For simplicity, just returning % of min length entered.
   * Could enhance with checks for number, special char, unique characters, etc.
   */
  const passwordQuality = password => {
    if (!password) return null;
    if (password.length >= minPasswordLength) return 100;

    const percentOfMinLength = parseInt(
      (password.length / minPasswordLength) * 100,
      10
    );

    return percentOfMinLength;
  };

  const validate = ({ email, password }) => {
    if (!email) setErrors({ ...errors, email: 'Email required' });

    if (password.length < minPasswordLength)
      setErrors({
        ...errors,
        password: `Password must be at least ${minPasswordLength} characters.`,
      });

    const isValidForm = errors.length === 0;

    return isValidForm;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValidForm = validate(user);
    if (isValidForm) {
      onSubmit(user);
      setSubmitted(true);
    }
  };

  return submitted ? (
    <h2>{confirmationMessage}</h2>
  ) : (
    <form>
      <TextInput
        htmlId="RegistrationForm__email"
        name="email"
        onChange={handleChange}
        label="Email"
        value={user.email}
        error={errors.email}
        required
      />

      <PasswordInput
        htmlId="RegistrationForm__password"
        name="password"
        value={user.password}
        onChange={handleChange}
        quality={passwordQuality(user.password)}
        showPasswordInitially
        maxLength={50}
        error={errors.password}
      />

      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};

RegistrationForm.propTypes = {
  /** Message displayed upon successful submission */
  confirmationMessage: PropTypes.string,

  /** Called when form is submitted */
  onSubmit: PropTypes.func.isRequired,

  /** Minimum password length */
  minPasswordLength: PropTypes.number,
};

export default RegistrationForm;
