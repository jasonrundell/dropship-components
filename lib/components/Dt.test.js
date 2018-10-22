import React from 'react';
import { shallow } from 'enzyme';
import Dt from './Dt';
import uuidv1 from 'uuid/v1';

describe('Dt', () => {

  it('renders', () => {
    const wrapper = shallow(<Dt />);
    expect(wrapper.html()).toEqual('<dt></dt>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Dt />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Dt>{testValue}</Dt>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
