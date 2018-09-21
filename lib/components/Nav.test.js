import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import uuidv1 from 'uuid/v1';

describe('Nav', () => {

  it('renders', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.html()).toEqual('<nav></nav>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Nav />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Nav>{testValue}</Nav>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
