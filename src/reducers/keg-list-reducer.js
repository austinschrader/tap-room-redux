export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, quantity, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          quantity: quantity,
          id: id,
        },
      });
    case 'DELETE_KEG':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
