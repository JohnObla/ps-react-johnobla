import React from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';

const CodeExample = ({ children }) => (
  <pre className="line-numbers">
    <code className="language-javascript">{children}</code>
  </pre>
);

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeExample;
