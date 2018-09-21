import React from 'react';
import { shallow } from 'enzyme';
import Hgroup from './Hgroup';
import uuidv1 from 'uuid/v1';

describe('Hgroup', () => {

  it('renders', () => {
    const wrapper = shallow(<Hgroup />);
    expect(wrapper.html()).toEqual('<hgroup></hgroup>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Hgroup />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Hgroup>{testValue}</Hgroup>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
