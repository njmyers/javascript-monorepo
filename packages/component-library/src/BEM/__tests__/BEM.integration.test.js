import React from 'react';
import BEM from '../BEM';

import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('integration testing and rendering of children', () => {
  test('the input mounts without crashing', () => {
    const wrapper = shallow(<BEM />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders children', () => {
    const wrapper = mount(
      <BEM>
        <div>some text</div>
      </BEM>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders children with block name added', () => {
    const wrapper = mount(
      <BEM block="block">
        <div>some text</div>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe('block');
  });

  test('renders multiple children with block name added', () => {
    const wrapper = mount(
      <BEM block="block">
        <div>some text</div>
        <p>some text</p>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe('block');
    expect(wrapper.find('p').props().className).toBe('block');
  });

  test('it addd block info to children of children', () => {
    const wrapper = mount(
      <BEM block="block">
        <div>
          <p>some text</p>
        </div>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe('block');
    expect(wrapper.find('p').props().className).toBe('block');
  });

  test('renders multiple children with block name and element added', () => {
    const wrapper = mount(
      <BEM block="block">
        <div element="div">some text</div>
        <p element="p">some text</p>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe('block_div');
    expect(wrapper.find('p').props().className).toBe('block_p');
  });

  test('renders multiple children with block/element and single mod', () => {
    const wrapper = mount(
      <BEM block="block">
        <div element="div" modifiers="active">
          some text
        </div>
        <p element="p">some text</p>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe(
      'block_div block_div-active'
    );
    expect(wrapper.find('p').props().className).toBe('block_p');
  });

  test('renders multiple children with block/element and multiple mod', () => {
    const wrapper = mount(
      <BEM block="block">
        <div element="div" modifiers={['active', 'red']}>
          some text
        </div>
        <p element="p" modifiers={['yellow', 'important']}>
          some text
        </p>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe(
      'block_div block_div-active block_div-red'
    );
    expect(wrapper.find('p').props().className).toBe(
      'block_p block_p-yellow block_p-important'
    );
  });

  test('it merges classNames => font awesome example', () => {
    const wrapper = mount(
      <BEM block="block">
        <p element="p" modifiers="active" className="fa">
          Text
        </p>
      </BEM>
    );
    expect(wrapper.find('p').props().className).toBe(
      'fa block_p block_p-active'
    );
  });

  test('it applys BEM to nested DOM elements', () => {
    const wrapper = mount(
      <BEM block="block">
        <div element="div">
          <a element="link" modifiers="blue">
            <p element="p" modifiers="active" className="fa">
              Text
            </p>
          </a>
        </div>
      </BEM>
    );
    expect(wrapper.find('div').props().className).toBe('block_div');
    expect(wrapper.find('a').props().className).toBe(
      'block_link block_link-blue'
    );

    expect(wrapper.find('p').props().className).toBe(
      'fa block_p block_p-active'
    );
  });

  test('it applys BEM to nested DOM elements but NOT to Components', () => {
    const NotDOM = (props) => <p>Unstyled by BEM</p>;

    const wrapper = mount(
      <BEM block="block">
        <div element="div">
          <a element="link" modifiers="blue">
            <p element="p" modifiers="active" className="fa">
              Text
            </p>
            <NotDOM val="val" />
          </a>
        </div>
      </BEM>
    );

    expect(wrapper.find('div').props().className).toBe('block_div');
    expect(wrapper.find('a').props().className).toBe(
      'block_link block_link-blue'
    );

    // find specific classed p
    expect(wrapper.find('.block_p').props().className).toBe(
      'fa block_p block_p-active'
    );

    expect(wrapper.find('NotDOM').props().className).toBe(undefined);
  });
});
