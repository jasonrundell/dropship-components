import React from 'react';
import { shallow } from 'enzyme';
import Aside from './Aside';
import uuidv1 from 'uuid/v1';

describe('Aside', () => {

  it('renders', () => {
    const wrapper = shallow(<Aside />);
    expect(wrapper.html()).toEqual('<aside></aside>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Aside />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Aside>{testValue}</Aside>);
    expect(wrapper.text()).toEqual(testValue);
  });

});
