import { createContext } from "react";

const CartContext = createContext({
  cartArray: [],
  addItem: () => {},
});

export default CartContext;
