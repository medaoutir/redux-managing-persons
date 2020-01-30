import types from "../constants/types";

const initialState = {
  persons: [
    {
      id: Math.random(),
      name: "Max",
      age: Math.floor(Math.random() * 40)
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PERSON.type:
      return {
        ...state,
        persons: action.payload
      };
    case types.DELETE_PERSON.type:
      return {
        ...state,
        persons: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
