import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  let action;
  const kegData = {
    name: 'Orange Beer',
    brand: 'Heff',
    price: '2',
    alcoholContent: 5,
    quantity: 2,
    id: 1,
  };
});
