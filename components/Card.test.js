import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  it('renders', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.html()).toEqual('<div></div>');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Card />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Card>June 15 2018</Card>);
    expect(wrapper.text()).toEqual('June 15 2018');
  });

});
