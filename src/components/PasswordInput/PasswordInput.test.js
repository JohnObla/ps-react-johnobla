import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  it('should hide password quality by default', () => {
    const tree = renderer
      .create(
        <PasswordInput
          htmlId="test"
          name="test"
          onChange={() => {}}
          value="This Is a Dummy Password"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
