import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ProductComponent from "../components/ProductDescription";
import Footer from "../components/Footer";
const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
    <div className="bg-gray-100  py-8 px-4">
     
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="#" className="hover:underline">Home</a> &gt;{" "}
        <a href="#" className="hover:underline">Kids</a> &gt;{" "}
        <a href="#" className="hover:underline">Shoes</a> &gt;{" "}
        <span className="text-gray-800 font-medium">Sneakers</span>
      </nav>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div>
              <img
                src="https://via.placeholder.com/400"
                alt="Product"
                className="rounded-lg"
              />
              <div className="flex space-x-2 mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Thumbnail"
                  className="w-12 h-12 border rounded-lg"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Thumbnail"
                  className="w-12 h-12 border rounded-lg"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Thumbnail"
                  className="w-12 h-12 border rounded-lg"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Thumbnail"
                  className="w-12 h-12 border rounded-lg"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-2xl font-semibold mb-2">Burberry Shine</h1>
              <p className="text-gray-600 mb-4">Brand: <span className="font-medium">FENDI</span></p>

              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-800">$150</span>
                <span className="text-gray-500 line-through ml-4">$300</span>
                <span className="text-green-600 font-medium ml-4">-50%</span>
              </div>

              <p className="text-sm text-gray-500 mb-2">50 units left</p>
              <p className="text-sm text-gray-500 mb-4">
                + Shipping fee may vary on location
              </p>
              <p className="text-sm text-yellow-500 font-medium mb-6">
                ⭐ 1k+ rating
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <p className="text-gray-800 font-medium mr-4">Quantity:</p>
                <button
                  onClick={decrementQuantity}
                  className="w-8 h-8 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                >
                  -
                </button>
                <span className="mx-4">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-8 h-8 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <p className="text-gray-800 font-medium mb-2">Size:</p>
                <div className="flex space-x-4">
                  <button className="border rounded-lg px-4 py-2">20</button>
                  <button className="border rounded-lg px-4 py-2">25</button>
                  <button className="border rounded-lg px-4 py-2">32</button>
                  <button className="border rounded-lg px-4 py-2">37</button>
                </div>
                <p className="text-sm text-blue-500 mt-2 cursor-pointer">
                  See all size guides
                </p>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <p className="text-gray-800 font-medium mb-2">Color:</p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full border"></div>
                  <div className="w-8 h-8 bg-black rounded-full border"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg">
                  Add to cart
                </button>
                <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg">
                  Buy now
                </button>
              </div>

              <p className="text-sm text-green-500 mt-4">
                Pickup & Pay on collection available
              </p>
            </div>
          </div>
        </div>

        {/* Delivery & Returns Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Delivery & Returns</h2>

          {/* Location Selector */}
          <div className="mb-6">
            <p className="text-gray-800 font-medium mb-2">Location</p>
            <select className="w-full border p-2 rounded-lg mb-4">
              <option>Location</option>
            </select>
            <select className="w-full border p-2 rounded-lg">
              <option>Sub-location</option>
            </select>
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Delivery</h3>
            <p className="text-sm text-gray-600">
              Estimated delivery time is 1-12 business days
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>For Same-Day Delivery:</strong> Please place your order
              before 12pm
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Next-Day Delivery:</strong> Orders placed after 12pm will
              be delivered the next day.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Note: Availability may vary by location.
            </p>
          </div>

          {/* Return Policy */}
          <div>
            <h3 className="font-semibold mb-2">Return policy</h3>
            <p className="text-sm text-gray-600">
              Guaranteed 7-day return policy.
            </p>
            <p className="text-sm text-blue-500 mt-2 cursor-pointer">
              Visit our Contact page for return options.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ProductComponent/>
    <Footer/>
    </div>
  );
};

export default CartPage;
