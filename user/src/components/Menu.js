


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  // === Breakfast ===
  { id: 1, name: "Paratha", description: "2 pieces of Paratha", price: 20, category: "Breakfast", image: "/istockphoto-618764348-612x612.jpg" },
  { id: 2, name: "Paratha with Egg", description: "Half boiled egg and 2 Paratha", price: 25, category: "Breakfast", image: "paratha and egg.webp" },
  { id: 3, name: "Paratha with Vegetable", description: "2 Paratha and vegetables", price: 20, category: "Breakfast", image: "istockphoto-1263763610-612x612.jpg" },
  { id: 4, name: "Khichuri (Plain)", description: "With egg and salad", price: 30, category: "Breakfast", image: "Khichuri,_a_bangali_dish.jpg" },
  { id: 5, name: "Khichuri with Egg", description: "With salad", price: 40, category: "Breakfast", image: "Egg-Khichuri.webp" },
  { id: 6, name: "Khichuri with Chicken", description: "With salad", price: 60, category: "Breakfast", image: "Bengali-Murgi-Khichuri-Recipe.jpg" },
  { id: 7, name: "Semai", description: "Sweet dessert item", price: 10, category: "Breakfast", image: "https://source.unsplash.com/300x200/?semai" },
  { id: 8, name: "Suji", description: "Sweet semolina", price: 10, category: "Breakfast", image: "https://source.unsplash.com/300x200/?suji" },
  { id: 9, name: "Singara", description: "5 pieces", price: 20, category: "Breakfast", image: "https://source.unsplash.com/300x200/?singara" },
  { id: 10, name: "Alur Chop", description: "5 pieces", price: 20, category: "Breakfast", image: "https://source.unsplash.com/300x200/?potato-fry" },

  // === Lunch ===
  { id: 11, name: "White Rice (small)", description: "Half plate rice", price: 10, category: "Lunch", image: "https://source.unsplash.com/300x200/?rice" },
  { id: 12, name: "White Rice (full)", description: "Full plate rice", price: 20, category: "Lunch", image: "https://source.unsplash.com/300x200/?boiled-rice" },
  { id: 13, name: "Mashed Potato", description: "With onion, chili, mustard oil", price: 10, category: "Lunch", image: "https://source.unsplash.com/300x200/?mashed-potato" },
  { id: 14, name: "Vegetable", description: "Cooked seasonal vegetable", price: 10, category: "Lunch", image: "https://source.unsplash.com/300x200/?vegetables" },
  { id: 15, name: "Dal (Lentils)", description: "1 cup lentil soup", price: 10, category: "Lunch", image: "https://source.unsplash.com/300x200/?lentils" },
  { id: 16, name: "Egg Curry", description: "1 piece", price: 20, category: "Lunch", image: "https://source.unsplash.com/300x200/?egg-curry" },
  { id: 17, name: "Chicken Curry", description: "1 piece", price: 40, category: "Lunch", image: "https://source.unsplash.com/300x200/?chicken-curry" },

  // === Fast Food ===
  { id: 18, name: "Burger (Chicken)", description: "5 inch chicken burger", price: 40, category: "Fast Food", image: "https://source.unsplash.com/300x200/?burger" },
  { id: 19, name: "Burger (Beef)", description: "5 inch beef burger", price: 50, category: "Fast Food", image: "https://source.unsplash.com/300x200/?beef-burger" },
  { id: 20, name: "Shawarma Roll", description: "1 roll with chicken & sauce", price: 50, category: "Fast Food", image: "https://source.unsplash.com/300x200/?shawarma" },
  { id: 21, name: "Chicken Roll", description: "1 roll with fried chicken", price: 30, category: "Fast Food", image: "https://source.unsplash.com/300x200/?chicken-roll" },

  // === Snacks ===
  { id: 22, name: "Milk Tea", description: "1 cup", price: 7, category: "Snacks", image: "https://source.unsplash.com/300x200/?milk-tea" },
  { id: 23, name: "Black Tea", description: "1 cup", price: 5, category: "Snacks", image: "https://source.unsplash.com/300x200/?black-tea" },
  { id: 24, name: "Milk", description: "Hot milk", price: 15, category: "Snacks", image: "https://source.unsplash.com/300x200/?milk" },

  // === Drinks ===
  { id: 25, name: "Bottled Water", description: "Mineral water", price: 20, category: "Drinks", image: "https://source.unsplash.com/300x200/?water-bottle" },
  { id: 26, name: "Soft Drinks", description: "Cold drinks", price: 25, category: "Drinks", image: "https://source.unsplash.com/300x200/?soft-drinks" },
];


function Menu() {
  const navigate = useNavigate();
  const [orderItem, setOrderItems] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddToOrder = (item) => {
    // Get existing order from localStorage or create new
    const existingOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
    
    // Check if item already exists in order
    const existingItemIndex = existingOrder.findIndex(orderItem => orderItem.id === item.id);
    
    if (existingItemIndex > -1) {
      // Increase quantity if item exists
      existingOrder[existingItemIndex].quantity += 1;
    } else {
      // Add new item with quantity 1
      existingOrder.push({...item, quantity: 1});
    }
    
    // Save updated order to localStorage
    localStorage.setItem('currentOrder', JSON.stringify(existingOrder));
    setOrderItems(existingOrder)
    // Navigate to order page
    //navigate('/Order');

  };

  const filteredItems = filter === "All" ? menuItems : menuItems.filter(item => item.category === filter);


  // Group items by category
  const groupedMenu = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];



    return (
      <div className="container mt-4">
        <h1 className="mb-4 text-center">RUET Cafeteria Menu</h1>
        
        <div className="mb-4 text-center">
          <label className="me-2">Filter by Category:</label>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
  
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h2>{category}</h2>
            <div className="row">
              {items.map(item => (
                <div key={item.id} className="col-md-4 mb-3">
                  <div className="card h-100 shadow-sm">
                    <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>৳{item.price.toFixed(2)}</span>
                        <button 
                          className="btn btn-success"
                          onClick={() => handleAddToOrder(item)}
                        >
                          Add to Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
export default Menu;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MenuItem from './MenuItem';
// import { getMenuItems } from '../services/api'; // Import from your services/api

// function Menu() {
//   const navigate = useNavigate();
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filter, setFilter] = useState("All");

//   // Fetch menu items from backend using services/api
//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const response = await getMenuItems(); // Using your services/api function
//         setMenuItems(response);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching menu items:', err);
//         setError('Failed to load menu items. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   const handleAddToOrder = (item) => {
//     const existingOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
//     const existingItemIndex = existingOrder.findIndex(orderItem => orderItem._id === item._id);

//     if (existingItemIndex > -1) {
//       existingOrder[existingItemIndex].quantity += 1;
//     } else {
//       existingOrder.push({ ...item, quantity: 1 });
//     }

//     localStorage.setItem('currentOrder', JSON.stringify(existingOrder));
//     // Navigate to order page after adding
//     navigate('/Order');
//   };

//   const handleDecrease = (item) => {
//     const existingOrder = JSON.parse(localStorage.getItem('currentOrder') || '[]');
//     const existingItemIndex = existingOrder.findIndex(orderItem => orderItem._id === item._id);

//     if (existingItemIndex > -1 && existingOrder[existingItemIndex].quantity > 1) {
//       existingOrder[existingItemIndex].quantity -= 1;
//       localStorage.setItem('currentOrder', JSON.stringify(existingOrder));
//     }
//   };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="container mt-5 text-center">
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p>Loading menu items...</p>
//       </div>
//     );
//   }

//   // Show error state
//   if (error) {
//     return (
//       <div className="container mt-5 text-center">
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   const filteredItems = filter === "All" 
//     ? menuItems 
//     : menuItems.filter(item => item.category === filter);

//   // Group items by category
//   const groupedMenu = filteredItems.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   const categories = ["All", ...new Set(menuItems.map(item => item.category))];

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4 text-center">RUET Cafeteria Menu</h1>

//       <div className="mb-4 text-center">
//         <label className="me-2">Filter by Category:</label>
//         <select 
//           onChange={(e) => setFilter(e.target.value)} 
//           value={filter}
//           className="form-select form-select-sm d-inline-block w-auto"
//         >
//           {categories.map(cat => (
//             <option key={cat} value={cat}>{cat}</option>
//           ))}
//         </select>
//       </div>

//       {Object.keys(groupedMenu).length > 0 ? (
//         Object.entries(groupedMenu).map(([category, items]) => (
//           <div key={category} className="mb-4">
//             <h2>{category}</h2>
//             <div className="row">
//               {items.map(item => (
//                 <MenuItem 
//                   key={item._id} 
//                   item={item} 
//                   onAddToOrder={handleAddToOrder} 
//                   onDecrease={handleDecrease} 
//                 />
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="alert alert-info text-center">
//           No menu items available for the selected category.
//         </div>
//       )}
//     </div>
//   );
// }

// export default Menu;






























// import React from 'react';
// import MenuItem from './MenuItem';

// function Menu({ onAddToOrder, renderMenuItem }) {
//   const menuItems = [
//     {
//       id: 1,
//       name: "Beef Burger",
//       description: "Juicy beef patty with fresh vegetables and special sauce",
//       price: 8.99,
//       category: "Burgers",
//       image: "https://source.unsplash.com/random/300x200/?burger"
//     },
//     {
//       id: 2,
//       name: "Chicken Biryani",
//       description: "Aromatic rice dish with tender chicken pieces and spices",
//       price: 12.99,
//       category: "Main Course",
//       image: "https://source.unsplash.com/random/300x200/?biryani"
//     },
//     {
//       id: 3,
//       name: "Vegetable Pasta",
//       description: "Creamy pasta with fresh seasonal vegetables",
//       price: 9.99,
//       category: "Pasta",
//       image: "https://source.unsplash.com/random/300x200/?pasta"
//     },
//     {
//       id: 4,
//       name: "Grilled Fish",
//       description: "Fresh fish grilled to perfection with herbs and lemon",
//       price: 14.99,
//       category: "Seafood",
//       image: "https://source.unsplash.com/random/300x200/?grilled-fish"
//     },
//     {
//       id: 5,
//       name: "Vegetable Soup",
//       description: "Hearty soup with seasonal vegetables and herbs",
//       price: 5.99,
//       category: "Soups",
//       image: "https://source.unsplash.com/random/300x200/?soup"
//     },
//     {
//       id: 6,
//       name: "Chocolate Cake",
//       description: "Rich and moist chocolate cake with ganache",
//       price: 6.99,
//       category: "Desserts",
//       image: "https://source.unsplash.com/random/300x200/?chocolate-cake"
//     }
//   ];

//   // Group menu items by category
//   const groupedMenu = menuItems.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="menu">
//       {Object.entries(groupedMenu).map(([category, items]) => (
//         <div key={category} className="menu-category">
//           <h3>{category}</h3>
//           <div className="row">
//             {items.map(item => (
//               renderMenuItem ? 
//                 renderMenuItem(item) : 
//                 <div key={item.id} className="col-md-6 mb-3">
//                   <MenuItem 
//                     item={item} 
//                     onAddToOrder={() => onAddToOrder && onAddToOrder(item)} 
//                   />
//                 </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Menu;