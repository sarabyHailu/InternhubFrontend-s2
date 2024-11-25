// import React, { useState } from 'react';

// const ProductComponent = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   const tabs = [
//     { id: 'overview', label: 'Overview' },
//     { id: 'description', label: 'Description' },
//     { id: 'warranty', label: 'Warranty' },
//     { id: 'reviews', label: 'Reviews' },
//   ];

//   const products = [
//     { id: 1, name: 'Butin Blue', price: 120, rating: 4.2, image: 'https://via.placeholder.com/100' },
//     { id: 2, name: 'Pink Cherry', price: 180, rating: 4.5, image: 'https://via.placeholder.com/100' },
//   ];

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Tabs */}
//       <div className="flex justify-center space-x-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.id ? 'bg-yellow-400 text-white' : 'bg-white text-black border border-gray-300'
//             }`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="mt-6 bg-white p-4 rounded shadow">
//         {activeTab === 'overview' && (
//           <ul className="space-y-2 text-gray-600">
//             <li>Available in a wide range of colors, patterns, and themes to appeal to kids.</li>
//             <li>Rubber outsoles with good traction to prevent slips and falls.</li>
//             <li>Built-in arch support to help maintain healthy foot development.</li>
//             <li>Soft insoles and adequate padding to support growing feet.</li>
//           </ul>
//         )}
//         {activeTab === 'description' && <p>Description content goes here.</p>}
//         {activeTab === 'warranty' && <p>Warranty details go here.</p>}
//         {activeTab === 'reviews' && <p>Reviews content goes here.</p>}
//       </div>

//       {/* Similar Items */}
//       <h3 className="mt-8 text-lg font-semibold text-gray-700">Similar items you may like</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded shadow flex items-center space-x-4">
//             <img src={product.image} alt={product.name} className="w-16 h-16 rounded" />
//             <div className="flex-1">
//               <h4 className="text-gray-700 font-semibold">{product.name}</h4>
//               <p className="text-yellow-400 text-sm">⭐ {product.rating} rating</p>
//               <p className="text-gray-700 font-bold">${product.price}</p>
//             </div>
//             <button className="bg-yellow-400 text-white px-4 py-2 rounded">Add to cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;
import React, { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai"; 
const ProductComponent = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'description', label: 'Description' },
    { id: 'warranty', label: 'Warranty' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const products = [
    {
      id: 1,
      name: 'Butin Blue',
      price: 120,
      rating: 4.2,
      image: 'https://via.placeholder.com/100', // Replace with actual image
    },
    {
      id: 2,
      name: 'Pink Cherry',
      price: 180,
      rating: 4.5,
      image: 'https://via.placeholder.com/100', // Replace with actual image
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeTab === tab.id
                ? 'bg-vibrantOrange text-white'
                : 'bg-white text-gray-600 border border-gray-300'
            } hover:bg-vibrantOrange hover:text-white`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        {activeTab === 'overview' && (
          <ul className="space-y-2 text-gray-600">
            <li>Available in a wide range of colors, patterns, and themes to appeal to kids.</li>
            <li>Rubber outsoles with good traction to prevent slips and falls.</li>
            <li>Built-in arch support to help maintain healthy foot development.</li>
            <li>Soft insoles and adequate padding to support growing feet.</li>
          </ul>
        )}
        {activeTab === 'description' && <p>Description content goes here.</p>}
        {activeTab === 'warranty' && <p>Warranty details go here.</p>}
        {activeTab === 'reviews' && <p>Reviews content goes here.</p>}
      </div>

      {/* Similar Items */}
      <h3 className="mt-8 text-lg font-semibold text-gray-700">Similar items you may like</h3>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-gray-700 font-semibold">{product.name}</h4>
              <p className="text-vibrantOrange text-sm mt-1">⭐ {product.rating} rating</p>
              <p className="text-gray-700 font-bold text-lg mt-1">${product.price}</p>
            </div>
            <button className="bg-vibrantOrange text-white px-6 py-2 rounded-full font-medium hover:bg-vibrantOrange transition">
              Add to cart
            </button>
          </div>
        ))}
      </div> */}
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative">
            <button className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
  <AiOutlineHeart className="h-5 w-5 text-gray-500" />
</button>

              {/* Stock Badge */}
              <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded-full">
                {product.stock}
              </span>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 flex-grow">
              {/* Category and Rating */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{product.category}</span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.436 1.753 10.564 1.753 10.951 2.927l1.286 3.946a1 1 0 00.95.69h4.167c.912 0 1.294 1.175.623 1.755l-3.385 2.705a1 1 0 00-.364 1.118l1.286 3.946c.387 1.174-.994 2.148-1.901 1.477l-3.385-2.705a1 1 0 00-1.176 0l-3.385 2.705c-.907.671-2.288-.303-1.901-1.477l1.286-3.946a1 1 0 00-.364-1.118L2.23 8.318c-.671-.58-.29-1.755.623-1.755h4.167a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>

              {/* Name and Brand */}
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
            </div>

            {/* Price and Add to Cart */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-bold">{product.price}</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-600 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
