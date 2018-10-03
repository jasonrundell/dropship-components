import React from 'react';
import { shallow } from 'enzyme';
import Colgroup from './Colgroup';
import uuidv1 from 'uuid/v1';

describe('ColGroup', () => {

  it('renders', () => {
    const wrapper = shallow(<Colgroup />);
    expect(wrapper.html()).toEqual('<colgroup></colgroup>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Colgroup />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Colgroup>{testValue}</Colgroup>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
