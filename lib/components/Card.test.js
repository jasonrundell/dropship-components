import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import uuidv1 from 'uuid/v1';

describe('Card', () => {

  it('renders', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.html()).toEqual('<div></div>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Card />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Card>{testValue}</Card>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
