import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>RUET Cafeteria</h5>
            <p className="mb-0">Serving delicious meals since 2010</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Hours</h5>
            <p className="mb-0">Monday - Friday: 8am - 10pm<br />
            Saturday - Sunday: 9am - 11pm</p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p className="mb-0">
              123 University Road<br />
              Rajshahi, Bangladesh<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} RUET Cafeteria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;