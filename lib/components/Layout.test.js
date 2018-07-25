import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import uuidv1 from 'uuid/v1';

describe('Layout', () => {

  it('renders', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html()).toEqual('<div></div>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Layout />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Layout>{testValue}</Layout>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
