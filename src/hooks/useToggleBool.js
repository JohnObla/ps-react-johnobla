import React, { useState } from 'react';

const useToggleBool = initial => {
  const [state, setState] = useState(initial);

  const toggleBool = () => setState(!state);

  return [state, toggleBool];
};

export default useToggleBool;
