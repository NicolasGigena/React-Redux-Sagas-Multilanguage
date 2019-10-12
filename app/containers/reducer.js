const stateDefault = {
  number: 0
}


const homeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return Object.assign({},state,{
        number: state.number + 1
      })
    default:
      return state
  }
}

export default homeReducer
