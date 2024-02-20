import { ADD_TOKEN, ADD_PROFILE, REMOVE_PROFILE } from "../actions";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  id: "",
};
const authReducer = (state = initialState, action) => {
  console.log("DEBUG action", action);
  switch (action.type) {
    case ADD_TOKEN:
      return { ...state, token: action.payload };
    case ADD_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PROFILE:
      return initialState;

    default:
      return state;
  }
};
export default authReducer;
