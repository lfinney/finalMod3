import React from 'react';
import App from '../components/App/App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('App', () => {

  it('should render component', () => {
    const initialState = {
      housesInTheGame: []
    };
    const mockFunc = jest.fn();
    const store = mockStore(initialState);

    const wrapper = shallow(
      <App store={store} />);

    expect(wrapper.length).toEqual(1);
  });
});
