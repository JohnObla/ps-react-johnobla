import React, { useState } from 'react';
import PasswordInput from '../../../components/PasswordInput';

const ExampleAllFeatures = props => {
  const [password, setPassword] = useState('');

  const getQuality = () => (password.length > 10 ? 100 : password.length * 10);

  const handleChange = event => setPassword(event.target.value);

  return (
    <div>
      <PasswordInput
        htmlId="password-input-example-all-features"
        name="password"
        onChange={handleChange}
        value={password}
        minLength={8}
        placeholder="Enter password"
        showPasswordInitially
        quality={getQuality()}
        {...props}
      />
    </div>
  );
};

export default ExampleAllFeatures;
