import React from 'react';
import { shallow } from 'enzyme';
import InputSubmit from './InputSubmit';
import uuidv1 from 'uuid/v1';

describe('InputSubmit', () => {

  it('renders', () => {
    const wrapper = shallow(<InputSubmit />);
    expect(wrapper.html()).toEqual('<input type="submit"/>');
  });

  it('renders with correct type of submit', () => {
    const wrapper = shallow(<InputSubmit />);
    expect(wrapper.props().type).toEqual('submit');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputSubmit />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test input name', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputSubmit />);
    wrapper.setProps({ inputName: testValue });
    expect(wrapper.props().name).toEqual(testValue);
  });

  it('renders with test value text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputSubmit />);
    wrapper.setProps({ inputValue: testValue });
    expect(wrapper.props().value).toEqual(testValue);
  });

});
