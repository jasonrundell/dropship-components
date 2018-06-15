import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Card', () => {

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
    const wrapper = shallow(<Image />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test alt text', () => {
    const wrapper = shallow(<Image />);
    wrapper.setProps({ alt: 'test-alt-text' });
    expect(wrapper.props().alt).toEqual('test-alt-text');
  });

});
