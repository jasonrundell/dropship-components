import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import uuidv1 from 'uuid/v1';

describe('Link', () => {

  it('renders', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.html()).toEqual('<button></button>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Button />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Button>{testValue}</Button>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('onClick attribute should be of type `function`', () => {
    const wrapper = shallow(<Button />);
    wrapper.setProps({ onClick: function(){ console.log();} });
    expect(typeof wrapper.props().onClick === 'function').toEqual(true);
  });

});
