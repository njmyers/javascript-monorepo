import React from 'react';
import Input from '../Input';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('the input works', () => {
  test('the input mounts without crashing', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('the input receives value as prop', () => {
    const wrapper = shallow(<Input value={4} />);
    expect(wrapper.find('input').props().value).toBe(4);
  });

  test('the input receives value changes as prop', () => {
    const wrapper = shallow(<Input value={4} />);
    expect(wrapper.find('input').props().value).toBe(4);

    wrapper.setProps({ value: 5 });
    expect(wrapper.find('input').props().value).toBe(5);
  });

  test('the input passes name, type and label property', () => {
    const wrapper = shallow(<Input name="age" type="number" label="Age" />);
    expect(wrapper.find('input').props().name).toBe('age');
    expect(wrapper.find('input').props().type).toBe('number');
    expect(wrapper.find('label').text()).toBe('Age');
  });

  test('the input passes overwrites label with name when no prop is provided', () => {
    const wrapper = shallow(<Input name="age" type="number" />);
    expect(wrapper.find('input').props().name).toBe('age');
    expect(wrapper.find('input').props().type).toBe('number');
    expect(wrapper.find('label').text()).toBe('age');
  });

  test('the input renders default classNames', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('div').props().className).toBe('formInput');
    expect(wrapper.find('label').props().className).toBe('formInput_label');
    expect(wrapper.find('input').props().className).toBe('formInput_input');
  });

  test('the input renders input classNames', () => {
    const wrapper = shallow(<Input className="addressInput" />);
    expect(wrapper.find('div').props().className).toBe('addressInput');
    expect(wrapper.find('label').props().className).toBe('addressInput_label');
    expect(wrapper.find('input').props().className).toBe('addressInput_input');
  });

  test('the input renders adds modifier classNames', () => {
    const wrapper = shallow(
      <Input className="addressInput" classModifier="active" />
    );
    expect(wrapper.find('div').props().className).toBe(
      'addressInput addressInput-active'
    );
    expect(wrapper.find('label').props().className).toBe(
      'addressInput_label addressInput_label-active'
    );
    expect(wrapper.find('input').props().className).toBe(
      'addressInput_input addressInput_input-active'
    );
  });

  test('the input renders adds multiple modifier classNames', () => {
    const wrapper = shallow(
      <Input className="addressInput" classModifier={['active', 'red']} />
    );
    expect(wrapper.find('div').props().className).toBe(
      'addressInput addressInput-active addressInput-red'
    );
  });
});
