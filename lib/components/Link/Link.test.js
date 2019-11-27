import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';
import uuidv1 from 'uuid/v1';

describe('Link', () => {

  it('renders', () => {
    const wrapper = shallow(<Link />);
    expect(wrapper.html()).toEqual('<a></a>');
  });

  it('renders with test HREF', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

  it('renders with test CSS class', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link />);
    wrapper.setProps({ cssClass: testValue });
    expect(wrapper.props().className).toEqual(testValue);
  });

  it('renders with test text', () => {
    const testValue = uuidv1();
    const wrapper = shallow(<Link>{testValue}</Link>);
    expect(wrapper.text()).toEqual(testValue);
  });

  it('onClick attribute should be of type `function`', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ onClick: function(){ console.log();} });
    expect(typeof wrapper.props().onClick === 'function').toEqual(true);
  });

});
