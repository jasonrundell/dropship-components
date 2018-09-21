import React from 'react';
import { shallow } from 'enzyme';
import Summary from './Summary';
import uuidv1 from 'uuid/v1';

describe('Summary', () => {

  it('renders', () => {
    const wrapper = shallow(<Summary />);
    expect(wrapper.html()).toEqual('<summary></summary>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Summary />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Summary>{testValue}</Summary>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
