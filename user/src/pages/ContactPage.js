import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      type: 'general'
    });
  };

  return (
    <div className="contact-page">
      {/* Hero section */}
      <div className="bg-dark text-white py-5" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://source.unsplash.com/random/1600x900/?restaurant-interior")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center py-4">
          <h1 className="display-4">Contact Us</h1>
          <p className="lead">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="mb-4">Get In Touch</h2>
            <p>Have questions about our menu, catering services, or want to provide feedback? We're here to help!</p>
            
            <div className="d-flex align-items-start mb-3">
              <div className="bg-primary text-white rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h5 className="mb-1">Address</h5>
                <p className="mb-0">123 University Road, Rajshahi Engineering & Technology University, Rajshahi, Bangladesh</p>
              </div>
            </div>
            
            <div className="d-flex align-items-start mb-3">
              <div className="bg-primary text-white rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p className="mb-0">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="d-flex align-items-start mb-3">
              <div className="bg-primary text-white rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h5 className="mb-1">Email</h5>
                <p className="mb-0">info@ruetcafeteria.com</p>
              </div>
            </div>
            
            <div className="d-flex align-items-start mb-3">
              <div className="bg-primary text-white rounded-circle p-2 me-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-clock-fill"></i>
              </div>
              <div>
                <h5 className="mb-1">Hours</h5>
                <p className="mb-0">Monday - Friday: 8am - 10pm<br />Saturday - Sunday: 9am - 11pm</p>
              </div>
            </div>
            
            <h4 className="mt-4 mb-3">Follow Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none">
                <div className="bg-dark text-white rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-facebook"></i>
                </div>
              </a>
              <a href="#" className="text-decoration-none">
                <div className="bg-dark text-white rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-instagram"></i>
                </div>
              </a>
              <a href="#" className="text-decoration-none">
                <div className="bg-dark text-white rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-twitter"></i>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">Message Type</label>
                      <select 
                        className="form-select" 
                        id="type" 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="container-fluid px-0 mt-5">
        <div className="row g-0">
          <div className="col-12">
            <div className="ratio ratio-21x9" style={{ maxHeight: '400px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.344191714723!2d88.63496781542632!3d24.36374148429602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f310!2sRajshahi%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1679000215518!5m2!1sen!2sbd" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="RUET Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;