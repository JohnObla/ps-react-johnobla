import React from 'react';

const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map(name => (
        <li key={name}>
          <a href={`#${name}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};

export default Navigation;
