import React from 'react';
import { shallow } from 'enzyme';
import Strong from './Strong';
import uuidv1 from 'uuid/v1';

describe('Strong', () => {

  it('renders', () => {
    const wrapper = shallow(<Strong />);
    expect(wrapper.html()).toEqual('<strong></strong>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Strong />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Strong>{testValue}</Strong>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
