import React from 'react';
import { shallow } from 'enzyme';
import Blockquote from './Blockquote';
import uuidv1 from 'uuid/v1';

describe('Blockquote', () => {

  it('renders', () => {
    const wrapper = shallow(<Blockquote />);
    expect(wrapper.html()).toEqual('<blockquote></blockquote>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Blockquote />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Blockquote>{testValue}</Blockquote>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('renders with test `cite` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Blockquote />);
    wrapper.setProps({ cite: testValue });
    expect(wrapper.props().cite).toEqual(testValue);
  });

});
