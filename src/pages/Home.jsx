import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const products = [
    { _id: '1', name: 'Laptop', price: 999, image: 'https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-17015283614248ry9g.png' },
    { _id: '2', name: 'Smartphone', price: 499, image: 'https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689751quyff.png' },
    { _id: '3', name: 'Headphones', price: 149, image: 'https://purepng.com/public/uploads/large/purepng.com-2cd43b-1f2f8a8fe0444c828f27d6241c173477-mv2musicheadphoneearphoneslisteningearssounds-231519334370fe7mk.png' },
    { _id: '4', name: 'Smartwatch', price: 199, image: 'https://purepng.com/public/uploads/large/three-iwatch-xjm.png' },
    { _id: '5', name: 'Camera', price: 799, image: 'https://purepng.com/public/uploads/large/nikon-camera-hfr.png' },
    { _id: '6', name: 'Tablet', price: 299, image: 'https://purepng.com/public/uploads/large/purepng.com-experia-tablettablettablet-computertouchscreen-displayrechargeable-batterelectronicsandroidexperia-tablet-1701528393538vxdkk.png' },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div  className="home-page">

      {/* Header Section with Carousel */}
      <header className="mb-5">
        <div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://purelogics.com/wp-content/uploads/2023/08/AI-In-E-Commerce-How-AI-Powers-Personalized-Shopping_.jpg" className="d-block w-100" alt="Welcome" />
              <div className="carousel-caption d-none d-md-block">
                <h1 id="navcol2">Welcome to MyApp</h1>
                <p>Discover amazing products and features tailored for you.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://smartdev.com/wp-content/uploads/2023/10/what-retailers-need-to-know-about-ecommerce-header.png" className="d-block w-100" alt="Products" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Explore Products</h1>
                <p>Browse and shop from a wide range of high-quality items.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#headerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#headerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar container mb-4">
        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>

      {/* Product Grid */}
      <div className="container">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="col-md-4 col-sm-6 mb-4">
                <div className="card shadow h-100">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <button
                      className="btn btn-success"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h4>No products found</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;




















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const { addToCart } = useCart(); // 🟢 Import addToCart from CartContext

//   // Dummy Products (can be replaced with API call later)
//   const products = [
//     { _id: '1', name: 'Laptop', price: 1000, image: 'https://via.placeholder.com/150' },
//     { _id: '2', name: 'Smartphone', price: 500, image: 'https://via.placeholder.com/150' },
//     { _id: '3', name: 'Headphones', price: 150, image: 'https://via.placeholder.com/150' },
//     { _id: '4', name: 'Watch', price: 200, image: 'https://via.placeholder.com/150' },
//     { _id: '5', name: 'Camera', price: 800, image: 'https://via.placeholder.com/150' },
//     { _id: '6', name: 'Tablet', price: 300, image: 'https://via.placeholder.com/150' },
//   ];

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery) {
//       console.log('Searching for:', searchQuery);
//     }
//   };

//   return (
//     <div className="hero-section" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
//       <div className="container py-5">
//         <div className="text-center mb-5">
//           <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
//           <p className="lead">
//             Discover our powerful features and explore everything we have to offer.
//           </p>

//           {/* SEARCH INPUT */}
//           <form onSubmit={handleSearch} className="mb-4">
//             <input 
//               type="text" 
//               className="form-control mb-2" 
//               placeholder="Search for products, users, or features..." 
//               value={searchQuery} 
//               onChange={(e) => setSearchQuery(e.target.value)} 
//             />
//             <button type="submit" className="btn btn-primary btn-lg">
//               Search
//             </button>
//           </form>

//           <div className="d-flex justify-content-center">
//             <Link to="/login" className="btn btn-primary btn-lg me-3">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-outline-primary btn-lg">
//               Register
//             </Link>
//           </div>
//         </div>

//         {/* PRODUCT LIST */}
//         <div className="row">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <div key={product._id} className="col-md-4 mb-4">
//                 <div className="card h-100">
//                   <img 
//                     src={product.image} 
//                     className="card-img-top" 
//                     alt={product.name} 
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{product.name}</h5>
//                     <p className="card-text">Price: ${product.price}</p>
//                     <button 
//                       className="btn btn-success"
//                       onClick={() => addToCart(product)} // 🟢 Add to cart button
//                     >
//                       Add to Cart 🛒
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center">
//               <h4>No products found</h4>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
