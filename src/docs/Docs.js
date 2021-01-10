import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

const Docs = () => {
  const [route, setRoute] = useState(window.location.hash.substr(1));

  useEffect(
    () =>
      window.addEventListener('hashchange', () => {
        setRoute(window.location.hash.substr(1));
      }),
    []
  );

  const component = route
    ? componentData.filter(component => component.name === route)[0]
    : componentData[0];

  return (
    <div>
      <Navigation components={componentData.map(component => component.name)} />
      <ComponentPage component={component} />
    </div>
  );
};

export default Docs;
