import React from "react";
import shoe from '../assets/shoe1.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
const ProductPage = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span>Home &gt; Kids &gt; Shoes &gt; Sneakers</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Images */}
        <div className="col-span-1">
          <div className="flex flex-col items-center">
            <img
              src={shoe}
              alt="Product Main"
              className="w-full max-w-xs rounded-lg"
            />
            <div className="flex mt-4 gap-2">
              <img
                src={s1}
                alt="Thumbnail 1"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src={s2}
                alt="Thumbnail 2"
                className="w-16 h-16 rounded-lg border"
              />
              <img
                src={s3}
                alt="Thumbnail 3"
                className="w-16 h-16 rounded-lg border"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-2xl font-bold">Burberry shine</h1>
          <p className="text-sm text-gray-500">Brand: FENDI</p>
          <div className="flex items-center gap-4 my-4">
            <span className="text-xl font-bold">$150</span>
            <span className="line-through text-gray-400">$300</span>
            <span className="text-green-500 font-bold">-50%</span>
          </div>
          <p className="text-gray-500">50 units left</p>
          <p className="text-sm text-gray-500">
            + Shipping fee may vary on location
          </p>
          <p className="text-yellow-500 text-sm">★ 1k+ rating</p>

          <div className="my-6">
            <div className="flex items-center gap-4 mb-4">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center border rounded">
                <button className="px-2 py-1 text-gray-700">-</button>
                <input
                  type="text"
                  value="1"
                  readOnly
                  className="w-10 text-center border-x"
                />
                <button className="px-2 py-1 text-gray-700">+</button>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="font-medium">Size:</label>
              <div className="flex gap-2">
                {["20", "25", "32", "37"].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="font-medium">Color:</label>
              <div className="flex gap-2">
                {["pink", "red", "blue", "black"].map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color}-500 border`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Save for later
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Buy now
            </button>
          </div>
        </div>

        {/* Delivery & Returns */}
        <div className="col-span-3 lg:col-span-1">
          <h2 className="font-bold text-lg mb-4">Delivery & Returns</h2>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <select className="w-full border rounded px-3 py-2 mb-4">
              <option>Select location</option>
            </select>
            <select className="w-full border rounded px-3 py-2">
              <option>Select sub-location</option>
            </select>
          </div>
          <div className="mt-6">
            <h3 className="font-medium text-sm mb-2">Delivery</h3>
            <p className="text-sm text-gray-500">
              Estimated delivery time is 1-12 business days
            </p>
            <p className="text-sm text-gray-500">
              For Same-Day-Delivery: Place your order before 12pm
            </p>
            <p className="text-sm text-gray-500">
              Next-Day-Delivery: Orders placed after 12pm will be delivered the
              next day.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="font-medium text-sm mb-2">Return Policy</h3>
            <p className="text-sm text-gray-500">
              Guaranteed 7-day return policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
