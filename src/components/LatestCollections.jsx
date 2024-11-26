
import React from "react";
import { useState } from "react";
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai"; 
import bag1 from '../assets/bag1.png';
import shoe from '../assets/shoe1.png';
import dress1 from '../assets/dress1.png';
import { useCart } from "../CartContext.jsx"
const LatestCollections = () => {
   const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "French Kiss Bag",
      brand: "ALDO",
      price: "$500",
      image: bag1,
      rating: "2k+ rating",
      stock: "In Stock",
      category: "Women",
    },
    {
      id: 2,
      name: "Burberry shine",
      brand: "FENDI",
      price: "$150",
      image: shoe,
      rating: "1k+ rating",
      stock: "In Stock",
      category: "Kids",
    },
    {
      id: 3,
      name: "Alvero Gown",
      brand: "DIVINE",
      price: "$300",
      image: dress1,
      rating: "5k+ rating",
      stock: "In Stock",
      category: "Women",
    },
  ];
  

    // State to store favorite status
    const [favorites, setFavorites] = useState([]);
  
    // Toggle the favorite status of a product
    const toggleFavorite = (productId) => {
      setFavorites((prevFavorites) => {
        // Check if the product is already in the favorites list
        if (prevFavorites.includes(productId)) {
          // If it is, remove it
          return prevFavorites.filter(id => id !== productId);
        } else {
          // Otherwise, add it to the favorites list
          return [...prevFavorites, productId];
        }
      });
    };
  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Latest Collections</h2>
      <div className="flex items-center space-x-2">
          <button className="p-2 bg-vibrantOrange text-orange-600 rounded-full hover:bg-orange-300">
            &lt;
          </button>
          <button className="p-2 bg-vibrantOrange text-orange-600 rounded-full hover:bg-orange-300">
            &gt;
          </button>
        </div></div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative">
            <button className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"   onClick={() => toggleFavorite(product.id)}
            >
        {/* <AiOutlineHeart className={`h-5 w-5 ${favorites.includes(product.id) ? "text-red-500" : "text-gray-500"}`} /> */}
         {favorites.includes(product.id) ? (
              <AiFillHeart className="h-5 w-5 text-red-500" />
            ) : (
              <AiOutlineHeart className="h-5 w-5 text-gray-500" />
            )}
</button>

              {/* Stock Badge */}
              <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded-full">
                {product.stock}
              </span>

              {/* Image */}
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain rounded-lg"
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
              <button   onClick={() => addToCart(product)}
            className=" add-to-cart-btn bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-600 transition">
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
