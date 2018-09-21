import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';
import uuidv1 from 'uuid/v1';

describe('Label', () => {

  it('renders', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.html()).toEqual('<label></label>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Label />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Label>{testValue}</Label>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('renders with test label name', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Label />);
    wrapper.setProps({ labelName: testValue });
    expect(wrapper.props().htmlFor).toEqual(testValue);
  });

});
