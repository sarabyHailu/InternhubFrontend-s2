
// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../CartContext";
// const Navbar = () => {
//   const { cartItems } = useCart();

//   // Calculate the total quantity of items in the cart
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
//       {/* Left Section: Logo and Menu */}
//       <div className="flex items-center gap-20">
//         {/* Logo */}
//         <div className="text-2xl font-bold cursor-pointer">
//           <span className="text-black font-extrabold ">ገ</span>
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
//           {/* Register/Sign In Dropdown */}
//           <li className="relative group">
//             <span className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5.121 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.121 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5.121 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.121 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
//                 />
//               </svg>
//               Register/Sign In
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </span>
//             {/* Dropdown Menu */}
//             <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-36">
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Register</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Sign In</li>
//             </ul>
//           </li>
//           <li className="cursor-pointer hover:text-purple-500">Home</li>
//           <li className="cursor-pointer hover:text-purple-500">Men</li>
//           <li className="cursor-pointer hover:text-purple-500">Women</li>
//           <li className="cursor-pointer hover:text-purple-500">Kids</li>
//           <li className="cursor-pointer hover:text-purple-500">Accessories</li>
//           <li className="relative group">
//             <span className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
//               More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </span>
//             {/* Dropdown Menu */}
//             <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-36">
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Perfumes</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Jewlleries</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Gym Wears</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Vintage Wears</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Sport Wears</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Pyjamas</li>
//               <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Slippers</li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       {/* Right Section: Search and Icons */}
//       <div className="flex items-center gap-6">
//         {/* Search Bar */}
//         <div className="relative flex items-center">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border border-gray-300 rounded-full pl-4 pr-12 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />
//           <button className="absolute right-2 text-purple-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Dropdown for Language/Currency */}
//         <div className="relative group cursor-pointer">
//           <span className="flex items-center gap-1 text-gray-700 hover:text-purple-500">
//             <img
//               src="https://flagcdn.com/gb.svg"
//               alt="EN"
//               className="w-5 h-5 rounded-full"
//             />
//             EN/Currency
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </span>
//           {/* Dropdown */}
//           <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-36">
//             <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">USD</li>
//             <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">EUR</li>
//           </ul>
//         </div>

//         {/* Cart Icon */}
//         <div className="relative cursor-pointer">
//           <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-12 0h10M9 21a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//           </span>
//           {/* Notification Counter */}
//           <Link to="/cart">  <span  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//           {totalQuantity}
//           </span></Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-black font-extrabold">ገ</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex items-center gap-6 text-gray-700 font-medium`}
        >
          <Link to='/'><li className="cursor-pointer hover:text-purple-500">Home</li></Link>
          <Link to='#'><li className="cursor-pointer hover:text-purple-500">Men</li></Link>
          <Link to='#'><li className="cursor-pointer hover:text-purple-500">Women</li></Link>
          <Link to='#'><li className="cursor-pointer hover:text-purple-500">Kids</li></Link>
          <Link to='#'><li className="cursor-pointer hover:text-purple-500">Accessories</li></Link>
          
          {/* More Dropdown */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-36">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Perfumes</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Jewelleries</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Gym Wears</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Vintage Wears</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Sport Wears</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Pyjamas</li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Slippers</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Section: Search and Icons */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-12 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="absolute right-2 text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown for Language/Currency */}
        <div className="relative group cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 hover:text-purple-500">
            <img
              src="https://flagcdn.com/gb.svg"
              alt="EN"
              className="w-5 h-5 rounded-full"
            />
            EN/Currency
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-36">
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">USD</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">EUR</li>
          </ul>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <span className="flex items-center justify-center bg-purple-500 text-white rounded-full w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-12 0h10M9 21a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          {/* Notification Counter */}
          <Link to="/cart">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
