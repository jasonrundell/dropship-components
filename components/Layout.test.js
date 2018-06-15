import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {

  it('renders', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html()).toEqual('<div></div>');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Layout />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Layout>June 15 2018</Layout>);
    expect(wrapper.text()).toEqual('June 15 2018');
  });

});
