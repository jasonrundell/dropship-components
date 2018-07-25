import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';
import uuidv1 from 'uuid/v1';

describe('Heading', () => {

  it('renders', () => {
    const wrapper = shallow(<Heading priority="1" />);
    expect(wrapper.html()).toEqual('<h1></h1>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Heading />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Heading>{testValue}</Heading>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
