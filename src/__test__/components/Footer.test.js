import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = mount(<Footer />);
  test('Call component', () => {
    expect(wrapper.exists('.Footer')).toEqual(true);
  });
  test('Title render', () => {
    expect(wrapper.find('.Footer-title').text()).toBe('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('Compare snapshot', () => {
    const header = create(<Footer />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});

