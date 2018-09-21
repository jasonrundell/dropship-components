import React from 'react';
import { shallow } from 'enzyme';
import OrderedList from './OrderedList';
import uuidv1 from 'uuid/v1';

describe('OrderedList', () => {

  it('renders', () => {
    const wrapper = shallow(<OrderedList items={[1,2,3,4]} />);
    expect(wrapper.html()).toEqual('<ol><li>1</li><li>2</li><li>3</li><li>4</li></ol>');
  });

  it('renders with list type of 1 (decimal numbers)', () => {
    const wrapper = shallow(<OrderedList items={[1,2,3,4]} />);
    wrapper.setProps({ listType: '1' });
    expect(wrapper.html()).toEqual('<ol type="1"><li>1</li><li>2</li><li>3</li><li>4</li></ol>');
  });

  it('renders list parent with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<OrderedList items={[1,2,3,4]} />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders list children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<OrderedList items={[1,2,3,4]} />);
    wrapper.setProps({ classNameChildren: testValue });
    expect(wrapper.props().children[0].props.className).toEqual(testValue);
  });

});
