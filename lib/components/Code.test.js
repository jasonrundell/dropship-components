import React from 'react';
import { shallow } from 'enzyme';
import Code from './Code';
import uuidv1 from 'uuid/v1';

describe('Code', () => {

  it('renders', () => {
    const wrapper = shallow(<Code />);
    expect(wrapper.html()).toEqual('<code></code>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Code />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Code>{testValue}</Code>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
