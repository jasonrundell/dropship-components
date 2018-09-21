import React from 'react';
import { shallow } from 'enzyme';
import Div from './Div';
import uuidv1 from 'uuid/v1';

describe('Div', () => {

  it('renders', () => {
    const wrapper = shallow(<Div />);
    expect(wrapper.html()).toEqual('<div></div>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Div />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Div>{testValue}</Div>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
