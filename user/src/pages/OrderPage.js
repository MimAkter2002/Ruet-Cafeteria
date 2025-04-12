import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    studentId: '',
    hall: '',
    contact: ''
  });
  const navigate = useNavigate();
  
  // Load order items from localStorage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('currentOrder') || '[]');
    setOrderItems(savedItems);
  }, []);

  // Calculate total price
  const totalPrice = orderItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0).toFixed(2);
  // Increase quantity
  const handleIncreaseQuantity = (item) => {
    const updatedItems = orderItems.map(orderItem => 
      orderItem.id === item.id 
        ? { ...orderItem, quantity: orderItem.quantity + 1 } 
        : orderItem
    );
    setOrderItems(updatedItems);
    localStorage.setItem('currentOrder', JSON.stringify(updatedItems));
  };
  // Handle quantity decrease logic
  const handleDecreaseQuantity = (itemId) => {
    const updatedItems = orderItems.map(item => {
      if (item.id === itemId) {
        // If quantity is 1, remove the item, otherwise decrease the quantity
        if (item.quantity === 1) {
          return null;
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }).filter(item => item !== null); // Remove null items (i.e., removed items)
    
    setOrderItems(updatedItems);
    localStorage.setItem('currentOrder', JSON.stringify(updatedItems));
  };

  // Handle customer info input
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Confirm order
  const handleConfirmOrder = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!customerInfo.name || !customerInfo.studentId || 
        !customerInfo.hall || !customerInfo.contact) {
      alert('Please fill in all customer information');
      return;
    }

    if (orderItems.length === 0) {
      alert('Your order is empty');
      return;
    }

    // Prepare order details
    const orderDetails = {
      customer: customerInfo,
      items: orderItems,
      totalPrice: totalPrice,
      timestamp: new Date().toISOString()
    };

    // TODO: Implement order submission logic
    console.log('Order Submitted:', orderDetails);

    // Clear order and local storage
    setOrderItems([]);
    localStorage.removeItem('currentOrder');
    
    // Reset customer info
    setCustomerInfo({
      name: '',
      studentId: '',
      hall: '',
      contact: ''
    });

    alert('Order submitted successfully!');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="mb-4">Your Order</h2>
          
          {/* Order Items List */}
          <div className="card mb-4">
            <ul className="list-group list-group-flush">
              {orderItems.map(item => (
                <li 
                  key={item.id} 
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.name} - ₹{(item.price * item.quantity).toFixed(2)}
                    <span className="badge bg-secondary ms-2">{item.quantity}</span>
                  </div>
                  <div>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button 
                      className="btn btn-success btn-sm"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
              {orderItems.length > 0 && (
                <li className="list-group-item fw-bold text-end">
                  Total: ₹{totalPrice}
                </li>
              )}
            </ul>
          </div>

          {/* Customer Information Form */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customer Information</h5>
              <form onSubmit={handleConfirmOrder}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="studentId" className="form-label">Student ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    value={customerInfo.studentId}
                    onChange={handleCustomerInfoChange}
                    placeholder="Enter your student ID"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="hall" className="form-label">Hall of Residence</label>
                  <input
                    type="text"
                    className="form-control"
                    id="hall"
                    name="hall"
                    value={customerInfo.hall}
                    onChange={handleCustomerInfoChange}
                    placeholder="Enter your hall name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value={customerInfo.contact}
                    onChange={handleCustomerInfoChange}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-success w-100"
                  disabled={orderItems.length === 0}
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
