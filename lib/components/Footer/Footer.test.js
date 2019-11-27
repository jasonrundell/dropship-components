import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import uuidv1 from 'uuid/v1';

describe('Footer', () => {

  it('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.html()).toEqual('<footer></footer>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Footer />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Footer>{testValue}</Footer>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
