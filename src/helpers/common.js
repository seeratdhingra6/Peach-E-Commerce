// common helper functions which will use through the application

// this function takes a number and returns array of number upto the specific number
// Eg: input -> 5 output -> [0,1,2,3,4]
const getArrayByNumber = (number) => {
  const numbers = [];
  for (let i = 0; i < number; i++) {
    numbers.push(i);
  }
  return numbers;
};

const updateCart = (productId, quantity, cart, setCart) => {
  const newQuantity = cart[productId] ? cart[productId] + quantity : quantity;
  setCart({ ...cart, [productId]: newQuantity });
};

export { getArrayByNumber, updateCart };
