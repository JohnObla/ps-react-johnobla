import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  describe('width', () => {
    it('should create a div with a width of 250 with total width of 500 and percent of 50', () => {
      const wrapper = shallow(<ProgressBar width={500} percent={50} />);
      const bar = wrapper.find('.ProgressBar__bar');

      expect(bar.prop('style')).toHaveProperty('width', 250);
    });
  });
});
