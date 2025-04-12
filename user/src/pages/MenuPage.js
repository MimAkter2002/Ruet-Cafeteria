import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="menu-page">
      {/* Banner Section */}
      <div
        className="bg-dark text-white py-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(201, 85, 85, 0.6), rgba(56, 47, 47, 0.6)), url("https://source.unsplash.com/random/1600x900/?food")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center py-4">
          <h1 className="display-4 fw-bold">Our Menu</h1>
          <p className="lead">Delicious options for every taste</p>
        </div>
      </div>

      {/* Menu Content Section */}
        <div className="container my-5">
        <div className="text-end mb-4">
          <button
            onClick={() => navigate('/order')}
            className="btn btn-danger px-4 py-2"
            style={{ fontSize: '1.2rem', borderRadius: '5px' }}
          >
            Go to Order Page
          </button>
        </div>

        {/* Menu Items */}
        <Menu />
      </div>
    </div>
  );
}

export default MenuPage;



 
// import React from 'react';
// import Menu from '../components/MenuItem';

// function MenuPage() {
//   return (
//     <div className="menu-page">
//       <div className="bg-dark text-white py-5" style={{
//         backgroundImage: 'linear-gradient(rgba(201, 85, 85, 0.6), rgba(56, 47, 47, 0.6)), url("https://source.unsplash.com/random/1600x900/?food")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}>
//         <div className="container text-center py-4">
//           <h1 className="display-4">Our Menu</h1>
//           <p className="lead">Delicious options for every taste</p>
//         </div>
//       </div>
//       <button onClick={() => navigate('/order')} className="menu-button" style={{ marginBottom: '20px' }}>
//         Go to Order Page
//        </button>
//       <Menu />
//     </div>
//   );
// }

// export default MenuPage;