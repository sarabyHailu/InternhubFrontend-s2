import React, { useState } from "react";

const categories = [
  "Men",
  "Women",
  "Kids",
  "Perfumes",
  "Sport",
  "Jewelry",
];

const collections = [
  { id: 1, name: "Shoes", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 2, name: "Bags", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 3, name: "Jackets", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 4, name: "Lingerie", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 5, name: "Belts", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 6, name: "Street wear", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 7, name: "Sunglasses", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 8, name: "Sun wear", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 9, name: "Hats", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 10, name: "Slippers", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 11, name: "Wigs", image: "https://via.placeholder.com/150", category: "Women" },
  { id: 12, name: "Cosmetics", image: "https://via.placeholder.com/150", category: "Women" },
];

const CategoryCollections = () => {
  const [activeCategory, setActiveCategory] = useState("Women");

  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              activeCategory === category
                ? "bg-yellow-500 text-white"
                : "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {collections
          .filter((item) => item.category === activeCategory)
          .map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">See all collections</p>
            </div>
          ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-medium hover:bg-purple-600 transition">
          See more &raquo;
        </button>
      </div>
    </div>
  );
};

export default CategoryCollections;
