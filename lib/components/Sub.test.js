import React from 'react';
import { shallow } from 'enzyme';
import Sub from './Sub';
import uuidv1 from 'uuid/v1';

describe('Sub', () => {

  it('renders', () => {
    const wrapper = shallow(<Sub />);
    expect(wrapper.html()).toEqual('<sub></sub>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Sub />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Sub>{testValue}</Sub>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
