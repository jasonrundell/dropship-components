import React from 'react';
import { shallow } from 'enzyme';
import Legend from './Legend';
import uuidv1 from 'uuid/v1';

describe('Legend', () => {

  it('renders', () => {
    const wrapper = shallow(<Legend />);
    expect(wrapper.html()).toEqual('<legend></legend>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Legend />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Legend>{testValue}</Legend>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
