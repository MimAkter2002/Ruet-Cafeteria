import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Welcome to Ruet Cafeteria</h1>
              <p className="lead mb-4">
              Delicious meals served with passion, bringing the best flavors to your table.
              RUET Cafeteria started in 2010 with a simple mission: to provide students and faculty with delicious, nutritious meals at affordable prices.
               What began as a small campus café has grown into a beloved institution serving the entire RUET community.
              </p>
              <div className="d-flex justify-content-center gap-3">
              <Link to="/menu" className="btn btn-primary btn-lg">View Menu</Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">Reserve a Table</Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <img 
                src="/RUET_Cafeteria_(1).jpg" 
                alt="Hero Image" 
                className="img-fluid rounded shadow" 
              />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;