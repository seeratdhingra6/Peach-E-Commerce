const getArrayByNumber = (rating) => {
  const ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(i);
  }
  return ratings;
};
const updateCart = (productId, quantity, cart, setCart) => {
  const newQuantity = cart[productId] ? cart[productId] + quantity : quantity;
  setCart({ ...cart, [productId]: newQuantity });
};

export { getArrayByNumber, updateCart };
