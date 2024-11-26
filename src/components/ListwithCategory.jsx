import React, { useState } from "react";
import shoe1 from '../assets/heel.png';
import bag from '../assets/bag2.png'
import jacket from '../assets/jacket.png';
import lingerie from '../assets/lingerie.png';
import belt from '../assets/belt.png';
import top from '../assets/top.png';
import glass from '../assets/glass.png'
import hat from '../assets/hat.png';
import cosmo from '../assets/cosmo.png';
import wig from '../assets/wigs 1.png'
import dress2 from '../assets/dress2.png'
import slipper from '../assets/slipper.png'
const categories = [
  "Men",
  "Women",
  "Kids",
  "Perfumes",
  "Sport",
  "Jewelry",
];

const collections = [
  { id: 1, name: "Shoes", image: shoe1, category: "Women" },
  { id: 2, name: "Bags", image: bag, category: "Women" },
  { id: 3, name: "Jackets", image: jacket, category: "Women" },
  { id: 4, name: "Lingerie", image: lingerie, category: "Women" },
  { id: 5, name: "Belts", image: belt, category: "Women" },
  { id: 6, name: "Street wear", image: top, category: "Women" },
  { id: 7, name: "Sunglasses", image: glass, category: "Women" },
  { id: 8, name: "Sun wear", image: dress2, category: "Women" },
  { id: 9, name: "Hats", image: hat, category: "Women" },
  { id: 10, name: "Slippers", image: slipper, category: "Women" },
  { id: 11, name: "Wigs", image: wig, category: "Women" },
  { id: 12, name: "Cosmetics", image: cosmo, category: "Women" },
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
