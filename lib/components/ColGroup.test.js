import React from 'react';
import { shallow } from 'enzyme';
import ColGroup from './ColGroup';
import uuidv1 from 'uuid/v1';

describe('ColGroup', () => {

  it('renders', () => {
    const wrapper = shallow(<ColGroup items={[1,2,3,4]} />);
    expect(wrapper.html()).toEqual('<colgroup><col/><col/><col/><col/></colgroup>');
  });

  it('renders list parent with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<ColGroup items={[1,2,3,4]} />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders list children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<ColGroup items={[1,2,3,4]} />);
    wrapper.setProps({ classNameChildren: testValue });
    expect(wrapper.props().children[0].props.className).toEqual(testValue);
  });

});
