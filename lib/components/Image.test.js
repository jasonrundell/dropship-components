import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';
import uuidv1 from 'uuid/v1';

describe('Image', () => {

  it('renders', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.html()).toEqual('<img alt=""/>');
  });

  it('renders with test src', () => {
    const wrapper = shallow(<Image />);
    wrapper.setProps({ src: 'test-src.svg' });
    expect(wrapper.props().src).toEqual('test-src.svg');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Image />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test alt text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Image />);
    wrapper.setProps({ alt: testValue });
    expect(wrapper.props().alt).toEqual(testValue);
  });

});
