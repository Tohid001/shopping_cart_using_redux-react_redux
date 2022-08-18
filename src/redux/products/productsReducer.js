const initialState = [
  {
    id: 1,
    title: "Asus Vivobook X515MA",
    price: 35500,
    stock: 20,
  },
  {
    id: 2,
    title: "Dell E1916HV 18.5 Inch",
    price: 9300,
    stock: 35,
  },
  {
    id: 3,
    title: "Canon Eos 4000D 18MP",
    price: 36500,
    stock: 72,
  },
];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default productsReducer;
