import React from 'react';
import './MenuItem.css';

function MenuItem({ item, onAddToOrder, onDecrease }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm menu-item-card">
        <img
          src={item.image || "https://source.unsplash.com/300x200/?food"}
          className="card-img-top"
          alt={item.name}
          style={{ height: "200px", objectFit: "cover" }}
          onError={(e) => {
            // Set fallback image if the main image fails to load
            e.target.src = "https://source.unsplash.com/300x200/?food";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">৳{item.price.toFixed(2)}</span>
            <div className="quantity-controls">
              <button
                onClick={() => onDecrease(item)}
                className="btn btn-sm btn-danger mx-1"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <button
                onClick={() => onAddToOrder(item)}
                className="btn btn-sm btn-success"
                aria-label="Add to order"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;