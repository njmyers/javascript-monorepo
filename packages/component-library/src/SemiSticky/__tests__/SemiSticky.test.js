import React from 'react';
import SemiSticky from '../SemiSticky';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('the input works', () => {
  test('the input mounts without crashing', () => {
    const wrapper = shallow(<SemiSticky />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
