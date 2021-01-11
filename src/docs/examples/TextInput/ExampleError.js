import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with error */
const ExampleOptional = () => {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required"
    />
  );
};

export default ExampleOptional;
