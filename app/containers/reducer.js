const stateDefault = {
  number: 0
};

const modifyState = (state, action) => {
  const { value, modifier } = action;

  if (modifier === 'More') {
    return Object.assign({}, state, {
      number: state.number + parseInt(value, 10)
    });
  }

  return Object.assign({}, state, {
    number: state.number - parseInt(value, 10)
  });
}


const homeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return Object.assign({}, state, {
        number: state.number + 1
      });
    case 'LESS_ONE':
      return Object.assign({}, state, {
        number: state.number - 1
      });
    case 'MODIFY_EXACTLY':
      return Object.assign({}, state, modifyState(state, action));
    default:
      return state;
  }
};

export default homeReducer;
