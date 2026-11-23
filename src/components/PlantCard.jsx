

import React, { useState } from "react";

function PlantCard({ plant }) {
  // Tracks whether this plant is marked as sold out
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
     {inStock ? (
  <button className="primary" onClick={() => setInStock(false)}>
    In Stock
  </button>
) : (
  <button onClick={() => setInStock(true)}>Sold Out</button>
)}
    </li>
  );
}

export default PlantCard;