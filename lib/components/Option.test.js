import React from 'react';
import { shallow } from 'enzyme';
import Option from './Option';
import uuidv1 from 'uuid/v1';

describe('Option', () => {

  it('renders', () => {
    const wrapper = shallow(<Option />);
    expect(wrapper.html()).toEqual('<option></option>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Option />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Option>{testValue}</Option>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
