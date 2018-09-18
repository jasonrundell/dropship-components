import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';
import uuidv1 from 'uuid/v1';

describe('Paragraph', () => {

  it('renders', () => {
    const wrapper = shallow(<Paragraph />);
    expect(wrapper.html()).toEqual('<p></p>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Paragraph />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Paragraph>{testValue}</Paragraph>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
