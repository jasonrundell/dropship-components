import React from 'react';
import { shallow } from 'enzyme';
import UnorderedList from './UnorderedList';
import uuidv1 from 'uuid/v1';

describe('UnorderedList', () => {

  it('renders', () => {
    const wrapper = shallow(<UnorderedList items={[1,2,3,4]} />);
    expect(wrapper.html()).toEqual('<ul><li>1</li><li>2</li><li>3</li><li>4</li></ul>');
  });

  it('renders list parent with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<UnorderedList items={[1,2,3,4]} />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders list children with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<UnorderedList items={[1,2,3,4]} />);
    wrapper.setProps({ cssClassChildren: testValue });
    expect(wrapper.props().children[0].props.className).toEqual(testValue);
  });

});
