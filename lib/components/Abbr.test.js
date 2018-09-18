import React from 'react';
import { shallow } from 'enzyme';
import Abbr from './Abbr';
import uuidv1 from 'uuid/v1';

describe('Abbr', () => {

  it('renders', () => {
    const wrapper = shallow(<Abbr />);
    expect(wrapper.html()).toEqual('<abbr></abbr>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Abbr />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Abbr>{testValue}</Abbr>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('renders with test title', () => {
    const testTitle = uuidv1();
    const wrapper = shallow(<Abbr title={testTitle}></Abbr>);
    expect(wrapper.props().title).toEqual(testTitle);
  });

});
