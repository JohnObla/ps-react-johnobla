import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor and block styling */
const Label = ({ htmlFor, label, required = false }) => (
  <label className="Label" htmlFor={htmlFor}>
    {label} {required && <span className="Label__required">*</span>}
  </label>
);
export default Label;

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool,
};
