import React from "react";

function CartItem({ cart, updateQuantity, removeItem }) {

  // Calculate total cost for each item
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>

            <p>Total: ${calculateTotalCost(item)}</p>
          </div>
        ))
      )}

      <h2>Total Amount: ${calculateTotalAmount()}</h2>
    </div>
  );
}

export default CartItem;
