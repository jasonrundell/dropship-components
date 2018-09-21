import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import uuidv1 from 'uuid/v1';

describe('Header', () => {

  it('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.html()).toEqual('<header></header>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Header />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Header>{testValue}</Header>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
