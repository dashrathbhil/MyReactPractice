import React, { useReducer } from "react";


const initialProducts = [
  { id: 1, name: "shirt", price: 1000, quantity: 0, addedToCart: false },
  { id: 2, name: "t-shirt", price: 700, quantity: 0, addedToCart: false },
 
];


function productReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state.map(product =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "decrement":
      return state.map(product => {
        if (product.id === action.id) {
          const newQuantity = product.quantity - 1;
          if (newQuantity <= 0) {
            return { ...product, quantity: 0, addedToCart: false };
          } else {
            return { ...product, quantity: newQuantity };
          }
        }
        return product;
      });

    case "addToCart":
      return state.map(product =>
        product.id === action.id
          ? { ...product, addedToCart: true }
          : product
      );

    case "removeFromCart":
      return state.map(product =>
        product.id === action.id
          ? { ...product, addedToCart: false, quantity: 0 }
          : product
      );

    default:
      return state;
  }
}

function ShoppingCart() {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const cartItems = products.filter(
    product => product.addedToCart && product.quantity > 0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h2>Shopping Cart with useReducer</h2>
      <h4>Products:</h4>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card p-3">
              <h5>{product.name}</h5>
              <p>Price: ₹{product.price}</p>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch({ type: "decrement", id: product.id })}
                >
                  -
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => dispatch({ type: "increment", id: product.id })}
                >
                  +
                </button>
                <button
                  className="btn btn-primary btn-sm mx-2"
                  onClick={() => dispatch({ type: "addToCart", id: product.id })}
                  disabled={product.quantity === 0}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <h4>Cart:</h4>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} 
              <h5 className="mt-3">Total: ₹{totalPrice}</h5>
              <div>
              <button
                  className="btn btn-danger btn-sm mx-2"
                  onClick={() => dispatch({ type: "decrement", id: item.id })}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="btn btn-success btn-sm mx-2"
                  onClick={() => dispatch({ type: "increment", id: item.id })}
                >
                  +
                </button>
                
              
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch({ type: "removeFromCart", id: item.id })}
                >
                  Remove
                </button>
              </div>
             
            </li>
          ))}
        </ul>
      )}

      
      
    </div>
  );
}

export default ShoppingCart;
