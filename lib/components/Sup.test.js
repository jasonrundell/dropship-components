import React from 'react';
import { shallow } from 'enzyme';
import Sup from './Sup';
import uuidv1 from 'uuid/v1';

describe('Sup', () => {

  it('renders', () => {
    const wrapper = shallow(<Sup />);
    expect(wrapper.html()).toEqual('<sup></sup>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Sup />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Sup>{testValue}</Sup>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
