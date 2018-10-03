import React from 'react';
import { shallow } from 'enzyme';
import OptGroup from './OptGroup';
import uuidv1 from 'uuid/v1';

describe('OptGroup', () => {

  it('renders', () => {
    const wrapper = shallow(<OptGroup items={[1,2,3,4]} />);
    expect(wrapper.html()).toEqual('<optgroup><option>1</option><option>2</option><option>3</option><option>4</option></optgroup>');
  });

  it('renders list parent with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<OptGroup items={[1,2,3,4]} />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders list children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<OptGroup items={[1,2,3,4]} />);
    wrapper.setProps({ classNameChildren: testValue });
    expect(wrapper.props().children[0].props.className).toEqual(testValue);
  });

});
