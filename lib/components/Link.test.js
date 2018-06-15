import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link', () => {

  it('renders', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.html()).toEqual('<a></a>');
  });

  it('renders with test HREF', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Link>June 15 2018</Link>);
    expect(wrapper.text()).toEqual('June 15 2018');
  });

});
