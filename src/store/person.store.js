//actions and reducers in this file
const actions = {};

const initialState = { name: 'pip' };

//============== REDUCER ===============
//creates copy of state and hands to store
const reducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CHANGE':
      return {name: Math.floor(Math.random() * payload) + 1 }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

//============= ACTION CREATORS ===============
//which returns the action (JS obj)
actions.changeName = payload => {
  return {
    type: 'CHANGE',
    payload: payload
  }
}

//action creators
actions.resetName = payload => {
  return {
    type: 'RESET',
    payload
  }
}

export default reducer;
export {actions};