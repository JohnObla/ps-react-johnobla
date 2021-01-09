import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import './themes/prism-solarizedlight.css';

const CodeExample = ({ children }) => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <pre>
      <code className="language-javascript">{children}</code>
    </pre>
  );
};

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeExample;
