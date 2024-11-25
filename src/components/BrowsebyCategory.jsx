import React from 'react';

const CategoryBrowser = () => {
  const categories = [
    {
      name: 'Casual wear',
      description: 'Over 20 categories in stock',
      image: '/path-to-casual-wear-image.png', // Replace with actual image path
    },
    {
      name: 'Vintage',
      description: 'Over 31 categories in stock',
      image: '/path-to-vintage-image.png', // Replace with actual image path
    },
    {
      name: 'Beauty products',
      description: 'Over 24 categories in stock',
      image: '/path-to-beauty-products-image.png', // Replace with actual image path
    },
    {
      name: 'Gym wears',
      description: 'Over 62 categories in stock',
      image: '/path-to-gym-wear-image.png', // Replace with actual image path
    },
  ];

  return (
    <div style={{ maxWidth: '1352px' }}className="p-6  relative w-full  mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Browse by category</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-orange-200 text-orange-600 rounded-full hover:bg-orange-300">
            &lt;
          </button>
          <button className="p-2 bg-orange-200 text-orange-600 rounded-full hover:bg-orange-300">
            &gt;
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-grey-100">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-200 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBrowser;
