import React from 'react';
import CardDirectory from '../components/CardDirectory/CardDirectory';
import { shallow } from 'enzyme';
import housesMock from './mockData/housesMock';

describe('CardDirectory', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <CardDirectory housesInTheGame={housesMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});
