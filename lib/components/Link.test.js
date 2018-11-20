import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import uuidv1 from 'uuid/v1';
import { wrap } from 'module';

describe('Link', () => {

  it('renders', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.html()).toEqual('<a></a>');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ className: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test `href` value', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

  it('renders with test `rel` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ rel: testValue });
    expect(wrapper.props().rel).toEqual(testValue);
  });

  it('renders with test `media` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ media: testValue });
    expect(wrapper.props().media).toEqual(testValue);
  });

  it('renders with test `as` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ as: testValue });
    expect(wrapper.props().as).toEqual(testValue);
  });

  it('renders with test `type` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ type: testValue });
    expect(wrapper.props().type).toEqual(testValue);
  });

  it('renders with test `crossorigin` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ crossorigin: testValue });
    expect(wrapper.props().crossOrigin).toEqual(testValue);
  });

  it('renders with test `media` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ media: testValue });
    expect(wrapper.props().media).toEqual(testValue);
  });

  it('renders with test `importance` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ importance: testValue });
    expect(wrapper.props().importance).toEqual(testValue);
  });

  it('renders with test `integrity` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ integrity: testValue });
    expect(wrapper.props().integrity).toEqual(testValue);
  });

  it('renders with test `referrerpolicy` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ referrerpolicy: testValue });
    expect(wrapper.props().referrerPolicy).toEqual(testValue);
  });

  it('renders with test `sizes` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ sizes: testValue });
    expect(wrapper.props().sizes).toEqual(testValue);
  });

  it('renders with test `title` value', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ title: testValue });
    expect(wrapper.props().title).toEqual(testValue);
  });

});
