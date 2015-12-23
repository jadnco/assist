import React from 'react';
import {expect} from 'chai';

import {shallow} from 'enzyme';

import {Repo} from '../src/scripts/components/Repo';

describe('<Assist />', () => {
  describe('<Repo />', () => {
    it('renders multiple <Repo /> components', () => {
      const wrapper = shallow(<Repo />);
    });
  });
});
