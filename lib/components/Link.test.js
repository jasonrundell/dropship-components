import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import uuidv1 from 'uuid/v1';
import { wrap } from 'module';

describe('Link', () => {

  it('renders', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.html()).toEqual('<a></a>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test `href` value', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

});
