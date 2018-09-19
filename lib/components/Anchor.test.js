import React from 'react';
import { shallow } from 'enzyme';
import Anchor from './Anchor';
import uuidv1 from 'uuid/v1';

describe('Anchor', () => {

  it('renders', () => {
    const wrapper = shallow(<Anchor />);
    expect(wrapper.html()).toEqual('<a></a>');
  });

  it('renders with test HREF', () => {
    const wrapper = shallow(<Anchor />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Anchor />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Anchor>{testValue}</Anchor>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('onClick attribute should be of type `function`', () => {
    const wrapper = shallow(<Anchor />);
    wrapper.setProps({ onClick: function(){ console.log();} });
    expect(typeof wrapper.props().onClick === 'function').toEqual(true);
  });

  it('renders with target = _blank', () => {
    const testValue = '_blank';
    const wrapper = shallow(<Anchor />);
    wrapper.setProps({ target: testValue });
    expect(wrapper.props().target).toEqual(testValue);
  });

});
