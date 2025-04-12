import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Popular Dishes</h2>
        <p className="text-center mb-5">Explore our most loved dishes that have been satisfying our customers for years</p>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-5">
                  <h3 className="text-center mb-4">Daily Special</h3>
                  <div className="text-center">
                    <img 
                      src="\grilled-salmon-recipe.jpg" 
                      alt="Daily Special" 
                      className="img-fluid rounded mb-4" 
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  <h4 className="text-center">Grilled Salmon with Lemon Butter Sauce</h4>
                  <p className="text-center text-muted mb-4">Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and our signature lemon butter sauce.</p>
                  <div className="text-center">
                    <span className="badge bg-danger p-2 mb-4">Today's Special: $16.99</span>
                  </div>
                  <div className="text-center">
                    <button onClick={() => navigate('/order')} className="btn btn-primary">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;