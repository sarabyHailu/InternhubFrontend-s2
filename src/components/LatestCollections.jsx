// const LatestCollections = () => {
//     const products = [
//       { id: 1, name: "French Tote Bag", price: "$60", image: "/path/to/image" },
//       { id: 2, name: "Burberry Pillow", price: "$80", image: "/path/to/image" },
//       { id: 3, name: "Alana Gown", price: "$100", image: "/path/to/image" },
//     ];
  
//     return (
//       <section className="p-4 sm:p-8">
//         <h2 className="text-xl sm:text-2xl font-bold mb-4">Latest Collections</h2>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border rounded-lg p-4 shadow hover:shadow-lg"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover mb-2"
//               />
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-700">{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default LatestCollections;
// import React from "react";
// import bag1 from '../assets/bag1.png'
// import shoe1 from '../assets/shoe1.png'
// import dress1 from '../assets/dress1.png'
// const LatestCollections = () => {
//   const products = [
//     {
//       id: 1,
//       name: "French Kiss Bag",
//       brand: "ALDO",
//       price: "$500",
//       image: {bag1},
//       rating: "2k+ rating",
//       stock: "In Stock",
//       category: "Women",
//     },
//     {
//       id: 2,
//       name: "Burberry shine",
//       brand: "FENDI",
//       price: "$150",
//       image: {shoe1},
//       rating: "1k+ rating",
//       stock: "In Stock",
//       category: "Kids",
//     },
//     {
//       id: 3,
//       name: "Alvero Gown",
//       brand: "DIVINE",
//       price: "$300",
//       image: {dress1},
//       rating: "5k+ rating",
//       stock: "In Stock",
//       category: "Women",
//     },
//   ];

//   return (
//     <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
//       {/* Title */}
//       <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Collections</h2>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-sm hover:shadow-md transition p-4"
//           >
//             {/* Wishlist Icon */}
//             <div className="flex justify-between items-center">
//               <div className="text-xs font-medium text-gray-500 bg-gray-100 py-1 px-2 rounded-full">
//                 {product.category}
//               </div>
//               <button className="text-gray-400 hover:text-gray-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5.121 17.804A4 4 0 106.343 4.53l.354-.353a4 4 0 015.657 0l.354.353a4 4 0 005.657 0l.354.353a4 4 0 00-5.657 5.657l-.354.354a4 4 0 00-5.657 5.657l-.354.354a4 4 0 01-5.657 0l-.354-.354a4 4 0 010-5.657l.354-.354a4 4 0 015.657-5.657"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-lg mt-4"
//             />

//             {/* Stock */}
//             <div className="text-xs font-medium text-gray-500 bg-green-100 py-1 px-2 rounded-full w-fit mt-4">
//               {product.stock}
//             </div>

//             {/* Product Details */}
//             <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
//             <p className="text-sm text-gray-500">{product.brand}</p>

//             {/* Rating */}
//             <div className="flex items-center mt-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-yellow-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927C9.436 1.753 10.564 1.753 10.951 2.927l1.286 3.946a1 1 0 00.95.69h4.167c.912 0 1.294 1.175.623 1.755l-3.385 2.705a1 1 0 00-.364 1.118l1.286 3.946c.387 1.174-.994 2.148-1.901 1.477l-3.385-2.705a1 1 0 00-1.176 0l-3.385 2.705c-.907.671-2.288-.303-1.901-1.477l1.286-3.946a1 1 0 00-.364-1.118L2.23 8.318c-.671-.58-.29-1.755.623-1.755h4.167a1 1 0 00.95-.69L9.049 2.927z" />
//               </svg>
//               <span className="text-sm text-gray-500 ml-2">{product.rating}</span>
//             </div>

//             {/* Price and Add to Cart */}
//             <div className="flex justify-between items-center mt-6">
//               <p className="text-lg font-bold">{product.price}</p>
//               <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-600 transition">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-end mt-8 space-x-4">
//         <button className="bg-gray-100 text-gray-500 hover:bg-gray-200 transition rounded-full w-10 h-10 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button className="bg-yellow-500 text-white hover:bg-yellow-600 transition rounded-full w-10 h-10 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LatestCollections;
import React from "react";
import { AiOutlineHeart } from "react-icons/ai"; 
import bag1 from '../assets/bag1.png'
const LatestCollections = () => {
  const products = [
    {
      id: 1,
      name: "French Kiss Bag",
      brand: "ALDO",
      price: "$500",
      image: "https://via.placeholder.com/150",
      rating: "2k+ rating",
      stock: "In Stock",
      category: "Women",
    },
    {
      id: 2,
      name: "Burberry shine",
      brand: "FENDI",
      price: "$150",
      image: "https://via.placeholder.com/150",
      rating: "1k+ rating",
      stock: "In Stock",
      category: "Kids",
    },
    {
      id: 3,
      name: "Alvero Gown",
      brand: "DIVINE",
      price: "$300",
      image: bag1,
      rating: "5k+ rating",
      stock: "In Stock",
      category: "Women",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Collections</h2>

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

export default LatestCollections;
