import React from 'react';
import { shallow } from 'enzyme';
import Li from './Li';
import uuidv1 from 'uuid/v1';

describe('Li', () => {

  it('renders', () => {
    const wrapper = shallow(<Li />);
    expect(wrapper.html()).toEqual('<li></li>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Li />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Li>{testValue}</Li>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
