import React from 'react';
import { shallow } from 'enzyme';
import Em from './Em';
import uuidv1 from 'uuid/v1';

describe('Em', () => {

  it('renders', () => {
    const wrapper = shallow(<Em />);
    expect(wrapper.html()).toEqual('<em></em>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Em />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Em>{testValue}</Em>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
