import kegListReducer from '../reducers/keg-list-reducer';

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

  const currentState = {
    1: {
      name: 'PBR',
      brand: 'Anheuser',
      price: 2,
      alcoholContent: 4,
      quantity: 5,
      id: 1,
    },
    2: {
      name: 'IPA',
      brand: 'Ninkasi',
      price: 3,
      alcoholContent: 5,
      quantity: 2,
      id: 2,
    },
  };

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1,
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'IPA',
        brand: 'Ninkasi',
        price: 3,
        alcoholContent: 5,
        quantity: 2,
        id: 2,
      },
    });
  });
});
