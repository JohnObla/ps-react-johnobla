import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional TextBox */
const ExampleOptional = () => {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
    />
  );
};

export default ExampleOptional;
