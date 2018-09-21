import React from 'react';
import { shallow } from 'enzyme';
import Span from './Span';
import uuidv1 from 'uuid/v1';

describe('Span', () => {

  it('renders', () => {
    const wrapper = shallow(<Span />);
    expect(wrapper.html()).toEqual('<span></span>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Span />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Span>{testValue}</Span>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
