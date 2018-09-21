import React from 'react';
import { shallow } from 'enzyme';
import Caption from './Caption';
import uuidv1 from 'uuid/v1';

describe('Caption', () => {

  it('renders', () => {
    const wrapper = shallow(<Caption />);
    expect(wrapper.html()).toEqual('<caption></caption>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Caption />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Caption>{testValue}</Caption>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
