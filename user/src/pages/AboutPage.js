import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero section */}
      <div className="bg-dark text-white py-5" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://source.unsplash.com/random/1600x900/?restaurant-kitchen")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container text-center py-4">
          <h1 className="display-4">About RUET Cafeteria</h1>
          <p className="lead">Our story, our passion, our commitment to quality</p>
        </div>
      </div>

      {/* Our Story section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="https://source.unsplash.com/random/600x400/?chef" alt="Our Chef" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">Our Story</h2>
            <p>RUET Cafeteria started in 2010 with a simple mission: to provide students and faculty with delicious, nutritious meals at affordable prices. What began as a small campus café has grown into a beloved institution serving the entire RUET community.</p>
            <p>Our founder, Chef Rahman, brought his extensive culinary experience from working in top restaurants across Bangladesh to create a menu that blends traditional Bengali flavors with international cuisine.</p>
            <p>Today, we're proud to serve over 1,000 meals daily, made with locally-sourced ingredients and prepared with care by our dedicated team.</p>
          </div>
        </div>
      </div>

      {/* Our Values section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-heart-fill text-danger" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h4 className="card-title">Passion</h4>
                  <p className="card-text">We put our heart into every dish we serve, treating food preparation as an art form that brings people together.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-award-fill text-primary" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h4 className="card-title">Quality</h4>
                  <p className="card-text">We source the freshest ingredients and maintain the highest standards in food preparation and service.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="bi bi-people-fill text-success" style={{ fontSize: '2rem' }}></i>
                  </div>
                  <h4 className="card-title">Community</h4>
                  <p className="card-text">We're more than just a cafeteria; we're a gathering place where the RUET community comes together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://source.unsplash.com/random/300x300/?chef" className="card-img-top" alt="Chef Rahman" />
              <div className="card-body text-center">
                <h5 className="card-title">Chef Rahman</h5>
                <p className="card-text text-muted">Founder & Head Chef</p>
                <p className="card-text">With over 20 years of culinary experience, Chef Rahman brings his passion for traditional Bengali cuisine to every dish.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://source.unsplash.com/random/300x300/?woman-chef" className="card-img-top" alt="Chef Fatima" />
              <div className="card-body text-center">
                <h5 className="card-title">Chef Fatima</h5>
                <p className="card-text text-muted">Executive Chef</p>
                <p className="card-text">Chef Fatima specializes in international cuisine and leads our menu development with innovative flavor combinations.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://source.unsplash.com/random/300x300/?manager" className="card-img-top" alt="Aminul Islam" />
              <div className="card-body text-center">
                <h5 className="card-title">Aminul Islam</h5>
                <p className="card-text text-muted">Cafeteria Manager</p>
                <p className="card-text">Aminul ensures our operations run smoothly and that every customer enjoys an exceptional dining experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;