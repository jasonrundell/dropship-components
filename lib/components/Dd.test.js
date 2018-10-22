import React from 'react';
import { shallow } from 'enzyme';
import Dd from './Dd';
import uuidv1 from 'uuid/v1';

describe('Dd', () => {

  it('renders', () => {
    const wrapper = shallow(<Dd />);
    expect(wrapper.html()).toEqual('<dd></dd>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Dd />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Dd>{testValue}</Dd>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
