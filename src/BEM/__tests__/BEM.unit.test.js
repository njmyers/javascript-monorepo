import React from 'react';
import BEM from '../BEM';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('the input works', () => {
  test('the input mounts without crashing', () => {
    const wrapper = shallow(<BEM />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('type check modifiers for string/array/undefined input', () => {
    const wrapper = shallow(<BEM />);
    const typeCheckModifiers = wrapper.instance().typeCheckModifiers;

    expect(typeof typeCheckModifiers).toBe('function');
    expect(typeCheckModifiers(undefined)).toMatchObject(['']);
    expect(typeCheckModifiers('')).toMatchObject(['']);
    expect(typeCheckModifiers('modifier')).toMatchObject(['', 'modifier']);
    expect(typeCheckModifiers(['modifier'])).toMatchObject(['', 'modifier']);
    expect(typeCheckModifiers(['modifier', 'active'])).toMatchObject([
      '',
      'modifier',
      'active',
    ]);
  });

  test('type check elements for string/undefined input', () => {
    const wrapper = shallow(<BEM />);
    const typeCheckElement = wrapper.instance().typeCheckElement;

    expect(typeof typeCheckElement).toBe('function');
    expect(typeCheckElement(undefined)).toBe('');
    expect(typeCheckElement('')).toBe('');
    expect(typeCheckElement('element')).toBe('element');
    expect(typeCheckElement('elementName')).toBe('elementName');
  });

  test('return correct BEM syntax -> getClassName method', () => {
    const wrapper = shallow(<BEM />);
    const getClassName = wrapper.instance().getClassName;

    expect(typeof getClassName).toBe('function');
    expect(getClassName('block')).toBe('block');
    expect(getClassName('block', 'element')).toBe('block_element');
    expect(getClassName('block', '', 'modifier')).toBe('block-modifier');
    expect(getClassName('block', 'element', 'modifier')).toBe(
      'block_element-modifier'
    );
    expect(getClassName('', 'element', 'modifier')).toBe('element-modifier');
  });

  test('getAllClasses method', () => {
    const wrapper = shallow(<BEM block="block" />);
    const getAllClasses = wrapper.instance().getAllClasses;

    expect(typeof getAllClasses).toBe('function');
    expect(getAllClasses('element', [''])).toBe('block_element');
    expect(getAllClasses('element', ['', 'modifier'])).toBe(
      'block_element block_element-modifier'
    );
    expect(getAllClasses('element', ['', 'modifier', 'red'])).toBe(
      'block_element block_element-modifier block_element-red'
    );

    expect(getAllClasses('', ['', 'modifier'])).toBe('block block-modifier');
    expect(getAllClasses('', ['', 'modifier', 'red'])).toBe(
      'block block-modifier block-red'
    );
  });

  test('mergeClassNames method with block, element and no modifier', () => {
    const wrapper = shallow(<BEM block="block" />);
    const mergeClassNames = wrapper.instance().mergeClassNames;

    const element = 'element';
    const modifiers = '';

    expect(typeof mergeClassNames).toBe('function');

    expect(mergeClassNames({ modifiers })).toMatchObject({
      className: 'block',
    });

    expect(mergeClassNames({ element, modifiers })).toMatchObject({
      className: 'block_element',
    });
  });

  test('mergeClassNames method with block and single modifier', () => {
    const wrapper = shallow(<BEM block="block" />);
    const mergeClassNames = wrapper.instance().mergeClassNames;

    const element = 'element';
    const modifiers = 'modifier';

    expect(typeof mergeClassNames).toBe('function');

    expect(mergeClassNames({ modifiers })).toMatchObject({
      className: 'block block-modifier',
    });

    expect(mergeClassNames({ element, modifiers })).toMatchObject({
      className: 'block_element block_element-modifier',
    });
  });

  // test('it renders a child element', () => {
  //   const wrapper = shallow(
  //     <BEM>
  //       <div>Some Content</div>
  //     </BEM>
  //   );

  //   console.log(wrapper.find('div').props());

  //   expect(wrapper.length).toBe(1);
  //   expect(wrapper.find('div').exists()).toBe(true);
  // });

  // test('it applies a block className to a child element', () => {
  //   const wrapper = shallow(
  //     <BEM block="block">
  //       <div>Some Content</div>
  //     </BEM>
  //   );

  //   expect(wrapper.find('div').props().className).toBe('block');
  // });

  // test('the input renders default classNames', () => {
  //   const wrapper = shallow(<Input />);
  //   expect(wrapper.find('div').props().className).toBe('formInput');
  //   expect(wrapper.find('label').props().className).toBe('formInput_label');
  //   expect(wrapper.find('input').props().className).toBe('formInput_input');
  // });

  // test('the input renders input classNames', () => {
  //   const wrapper = shallow(<Input className="addressInput" />);
  //   expect(wrapper.find('div').props().className).toBe('addressInput');
  //   expect(wrapper.find('label').props().className).toBe('addressInput_label');
  //   expect(wrapper.find('input').props().className).toBe('addressInput_input');
  // });

  // test('the input renders adds modifier classNames', () => {
  //   const wrapper = shallow(
  //     <Input className="addressInput" classModifier="active" />
  //   );
  //   expect(wrapper.find('div').props().className).toBe(
  //     'addressInput addressInput-active'
  //   );
  //   expect(wrapper.find('label').props().className).toBe(
  //     'addressInput_label addressInput_label-active'
  //   );
  //   expect(wrapper.find('input').props().className).toBe(
  //     'addressInput_input addressInput_input-active'
  //   );
  // });

  // test('the input renders adds multiple modifier classNames', () => {
  //   const wrapper = shallow(
  //     <Input className="addressInput" classModifier={['active', 'red']} />
  //   );
  //   expect(wrapper.find('div').props().className).toBe(
  //     'addressInput addressInput-active addressInput-red'
  //   );
  // });
});
