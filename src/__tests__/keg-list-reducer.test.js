import kegListReducer from '../reducers/reducers/keg-list-reducer';

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

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        quantity: quantity,
        id: id,
      },
    });
  });
});
