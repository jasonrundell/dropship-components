import React from 'react';
import { shallow } from 'enzyme';
import InputText from './InputText';
import uuidv1 from 'uuid/v1';

describe('InputText', () => {

  it('renders', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.html()).toEqual('<input type="text"/>');
  });

  it('renders with correct type of text', () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper.props().type).toEqual('text');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test input name', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ inputName: testValue });
    expect(wrapper.props().name).toEqual(testValue);
  });

  it('renders with test value text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ inputValue: testValue });
    expect(wrapper.props().value).toEqual(testValue);
  });

  it('renders with test placeholder text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ placeholder: testValue });
    expect(wrapper.props().placeholder).toEqual(testValue);
  });

  it('renders with required', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ required: true });
    expect(wrapper.props().required).toEqual(true);
  });

  it('renders with test autoComplete text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ autoComplete: testValue });
    expect(wrapper.props().autoComplete).toEqual(testValue);
  });


  it('renders with test onChange function', () => {
    const testFunction = function(){};
    const wrapper = shallow(<InputText />);
    wrapper.setProps({ onChange: testFunction });
    expect(wrapper.props().onChange).toEqual(testFunction);
  });

});
