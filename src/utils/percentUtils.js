/** Returns the width of a percent of total width, as an integer */
const getWidthAsPercentOfTotalWidth = (percent, totalWidth) =>
  parseInt(totalWidth * (percent / 100), 10);

export { getWidthAsPercentOfTotalWidth };
