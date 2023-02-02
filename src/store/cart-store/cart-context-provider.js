import React from "react";

import { useReducer } from "react";
import CartContext from "./cart-context";
import { CartReducer, ADD_ITEM_TO_CART } from "./cart-reducer";

const CartContextProvider = (props) => {
  const initialCartState = {
    cartArray: [],
    addItem: (item) => dispatch({ type: ADD_ITEM_TO_CART, cartItem: item }),
  };

  const [state, dispatch] = useReducer(CartReducer, initialCartState);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
