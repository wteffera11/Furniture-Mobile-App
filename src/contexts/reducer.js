import {
  ADD_TO_CART,
  GET_PRODUCT_BY_ID,
  REMOVE_PRODUCT_FROM_CART,
} from "./actions_type";

const cartReducer = (state, action) => {
  console.log("State: ", state);
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.products[`item-${action.payload.id}`]) {
        return {
          size: (state.size += 1),
          products: {
            ...state.products,
            [`item-${action.payload.id}`]: { ...action.payload, quantity: 1 },
          },
        };
      } else {
        let productsCopy = { ...state.products };
        productsCopy[`item-${action.payload.id}`].quantity += 1;
        return { size: (state.size += 1), products: productsCopy };
      }
    case GET_PRODUCT_BY_ID:
      if (state.products[`item-${action.productId}`]) {
        return state.products[`item-${action.productId}`];
      }
    case REMOVE_PRODUCT_FROM_CART:
      if (!state.products[`item-${action.productId}`]) {
        return {
          size: state.size,
          products: {
            ...state.products,
          },
        };
      } else {
        let updatedCart = { ...state.products };

        const updatedItem = {
          ...updatedCart[`item-${action.productId}`],
        };
        updatedCart[`item-${action.productId}`].quantity -= 1;
        return { size: (state.size -= 1), products: updatedCart };
      }
  }
};

export default cartReducer;
