import React from 'react';
import { shallow } from 'enzyme';
import UnorderedList from './UnorderedList';

describe('UnorderedList', () => {

  it('renders', () => {
    const wrapper = shallow(<UnorderedList items={[1,2,3,4]} />);
    console.log(wrapper.html());
    //expect(wrapper.html()).toEqual('<a></a>');
  });

  /*it('renders with test HREF', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ href: 'https://github.com/jasonrundell/dropship' });
    expect(wrapper.props().href).toEqual('https://github.com/jasonrundell/dropship');
  });

  it('renders with test CSS class', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ cssClass: 'test-css-class' });
    expect(wrapper.props().className).toEqual('test-css-class');
  });

  it('renders with test text', () => {
    const wrapper = shallow(<Link>June 15 2018</Link>);
    expect(wrapper.text()).toEqual('June 15 2018');
  });

  it('onClick attribute should be of type `function`', () => {
    const wrapper = shallow(<Link />);
    wrapper.setProps({ onClick: function(){ console.log();} });
    expect(typeof wrapper.props().onClick === 'function').toEqual(true);
  });*/

});