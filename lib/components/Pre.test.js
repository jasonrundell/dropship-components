import React from 'react';
import { shallow } from 'enzyme';
import Pre from './Pre';
import uuidv1 from 'uuid/v1';

describe('Pre', () => {

  it('renders', () => {
    const wrapper = shallow(<Pre />);
    expect(wrapper.html()).toEqual('<pre></pre>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Pre />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Pre>{testValue}</Pre>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
