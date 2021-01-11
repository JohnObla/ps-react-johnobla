import React from 'react';
import PropTypes from 'prop-types';

/** Progress bar that scales and changes color based on percentage */
const ProgressBar = ({ percent, width, height = 5 }) => {
  const getColor = () => {
    if (percent === 100) return 'green';

    return percent > 50 ? 'lightgreen' : 'red';
  };

  const getWidthAsPercentOfTotalWidth = () =>
    parseInt(width * (percent / 100), 10);

  return (
    <div className="ProgressBar" style={{ width }}>
      <div
        style={{
          width: getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: getColor(),
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar Width */
  width: PropTypes.number.isRequired,

  /** Bar Height */
  height: PropTypes.number,
};

export default ProgressBar;
