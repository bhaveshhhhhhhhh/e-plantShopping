import React from "react";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
  }
];

function ProductList({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={plant.image} alt={plant.name} width="150" />
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>
          <button onClick={() => addToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
