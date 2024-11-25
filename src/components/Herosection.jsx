// const Herosection = () => {
//     return (
//       <section className="bg-purple-700 text-white text-center p-6 sm:p-8">
//         <h1 className="text-3xl sm:text-4xl font-bold">Gebeya SHOP</h1>
//         <p className="mt-2 sm:mt-4 text-sm sm:text-base">
//           Explore the latest trends and collections.
//         </p>
//         <button className="bg-yellow-500 text-purple-700 px-6 py-2 mt-4 rounded w-full sm:w-auto">
//           Explore Now
//         </button>
//       </section>
//     );
//   };
  
//   export default Herosection;
import React from "react";
import elip1 from '../assets/elip1.png'
import elip2 from '../assets/elip2.png'
import elip3 from '../assets/elip3.png'
const HeroSection = () => {
  return (
    <div className="bg-purple-600 text-white py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Logo */}
          <h1 className="text-6xl font-bold">Gebeya</h1>
          {/* Circle Image Below Logo */}
          <div className="mt-4">
            <img
              src={elip1}
              alt="Circle"
              className="rounded-full w-40 h-40 object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          {/* Circle Image Beside the Logo */}
          <div>
            <img
              src={elip2}
              alt="Circle Beside"
              className="rounded-full w-60 h-60 object-cover border-4 border-white"
            />
          </div>
          {/* Explore Now Button */}
          <button className="mt-8 bg-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition">
            Explore Now
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
          {/* Paragraph */}
          <p className="text-lg mb-6">
            Discover a world of convenience with our user-friendly platform,
            curated collections, and exceptional customer service.
          </p>
          {/* "SHOP" Logo */}
          <h1 className="text-6xl font-bold">SHOP</h1>
          {/* Circle Image Below "SHOP" */}
          <div className="mt-4">
            <img
              src={elip3}
              alt="Circle Below Shop"
              className="rounded-full w-40 h-40 object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
