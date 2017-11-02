import * as reducers from '../reducers/AppReducer';
import housesMock from './mockData/housesMock';

describe('reducers', () => {

  it('should pass data array through', () => {
    const action = {
      type: 'FETCH_DATA',
      houses:housesMock
    };
    
    const expectation = action.houses;

    expect(reducers.housesInTheGame([], action)).toEqual(expectation);

  })
})
