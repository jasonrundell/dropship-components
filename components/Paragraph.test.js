import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

describe('Paragraph', () => {

  it('renders', () => {
    const wrapper = shallow(<Paragraph />);
    expect(wrapper.html()).toEqual('<p></p>');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Paragraph />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Paragraph>June 14 2018</Paragraph>);
    expect(wrapper.text()).toEqual('June 14 2018');
  });

});
