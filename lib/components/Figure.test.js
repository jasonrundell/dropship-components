import React from 'react';
import { shallow } from 'enzyme';
import Figure from './Figure';
import uuidv1 from 'uuid/v1';

describe('Figure', () => {

  it('renders', () => {
    const wrapper = shallow(<Figure />);
    expect(wrapper.html()).toEqual('<figure></figure>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Figure />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Figure>{testValue}</Figure>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
