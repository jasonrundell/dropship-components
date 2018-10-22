import React from 'react';
import { shallow } from 'enzyme';
import Col from './Col';
import uuidv1 from 'uuid/v1';

describe('Col', () => {

  it('renders', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper.html()).toEqual('<col/>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Col />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Col>{testValue}</Col>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
