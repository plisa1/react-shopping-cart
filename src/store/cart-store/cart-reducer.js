export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      // This is an option to do as well
      // Option 1
      //   const tempArray = [...state.cartArray];
      //   tempArray.push(action.cartItem);
      return {
        ...state,
        // Option 1
        // cartArray: tempArray,
        // New array with the current cartArray elements + new item
        // Option 2
        cartArray: [...state.cartArray, action.cartItem],
      };
    }
    default:
      return state;
  }
};
