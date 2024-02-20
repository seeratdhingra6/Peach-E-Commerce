export const UPDATE_CART = "UPDATE_CART";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const updateCart = (id, quantity) => {
  return {
    type: UPDATE_CART,
    payload: {
      id,
      quantity,
    },
  };
};
export const addToken = (token) => {
  return {
    type: ADD_TOKEN,
    payload: token,
  };
};
export const addProfile = (firstName, lastName, email, id) => {
  return {
    type: ADD_PROFILE,
    payload: {
      firstName,
      lastName,
      email,
      id,
    },
  };
};
export const removeProfile = () => {
  return {
    type: REMOVE_PROFILE,
  };
};
