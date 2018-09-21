import React from 'react';
import { shallow } from 'enzyme';
import Address from './Address';
import uuidv1 from 'uuid/v1';

describe('Address', () => {

  it('renders', () => {
    const wrapper = shallow(<Address />);
    expect(wrapper.html()).toEqual('<address></address>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Address />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Address>{testValue}</Address>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
