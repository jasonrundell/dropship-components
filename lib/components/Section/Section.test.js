import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';
import uuidv1 from 'uuid/v1';

describe('Section', () => {

  it('renders', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.html()).toEqual('<section></section>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Section />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Section>{testValue}</Section>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
