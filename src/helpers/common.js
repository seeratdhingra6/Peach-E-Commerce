const getArrayByNumber = (rating) => {
  const ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(i);
  }
  return ratings;
};

export { getArrayByNumber };
