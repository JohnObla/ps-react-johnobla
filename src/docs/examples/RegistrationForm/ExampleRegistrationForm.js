import React from 'react';
import RegistrationForm from 'ps-react/RegistrationForm';

/** Registration form with default options, that logs user to console */
const ExampleRegistrationForm = () => {
  const onSubmit = user => console.log(user);

  return <RegistrationForm onSubmit={onSubmit} />;
};

export default ExampleRegistrationForm;
