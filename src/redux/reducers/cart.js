import { UPDATE_CART } from "../actions";
const initialState = {};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART: {
      const newId = action.payload.id;
      const newQuantity = action.payload.quantity;
      return { ...state, [newId]: newQuantity };
    }
    default:
      return state;
  }
};
export default cartReducer;
