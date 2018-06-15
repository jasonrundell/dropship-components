import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('Heading', () => {

  it('renders', () => {
    const wrapper = shallow(<Heading priority="1" />);
    expect(wrapper.html()).toEqual('<h1></h1>');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Heading />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Heading>June 14 2018</Heading>);
    expect(wrapper.text()).toEqual('June 14 2018');
  });

});
