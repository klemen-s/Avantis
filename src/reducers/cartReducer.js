export function cartReducer(cart, action) {
  switch (action.type) {
    case "added": {
      let duplicatedItem = false;

      const newCart = cart.map((cartItem) => {
        if (
          cartItem.name === action.product.name &&
          cartItem.size === action.product.size
        ) {
          duplicatedItem = true;
          return { ...cartItem, quantity: cartItem.quantity++ };
        } else {
          return cartItem;
        }
      });

      if (duplicatedItem) {
        return newCart;
      }

      return [...cart, { ...action.product }];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
