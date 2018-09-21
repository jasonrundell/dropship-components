import React from 'react';
import { shallow } from 'enzyme';
import Small from './Small';
import uuidv1 from 'uuid/v1';

describe('Small', () => {

  it('renders', () => {
    const wrapper = shallow(<Small />);
    expect(wrapper.html()).toEqual('<small></small>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Small />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Small>{testValue}</Small>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
