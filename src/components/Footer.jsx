// const Footer = () => {
//     return (
//       <footer className="bg-purple-700 text-white text-center p-4">
//         <p className="text-sm">© 2024 Gebeya Shop. All rights reserved.</p>
//       </footer>
//     );
//   };
  
//   export default Footer;
// import React from 'react';

// function Navbar() {
//   return (
//     <div className="bg-purple-800 text-white py-4 px-8">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           {/* Your Logo or Image Here */}
//           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//             <p className="text-purple-800 text-2xl font-bold">Y</p>
//           </div>
//         </div>

//         <nav className="hidden md:flex space-x-8">
//           <ul className="flex space-x-4">
//             <li><a href="#">About</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Discover</a></li>
//           </ul>
//         </nav>

//         <div className="flex space-x-4">
//           <a href="#" className="text-2xl"><i className="fa-brands fa-instagram"></i></a>
//           <a href="#" className="text-2xl"><i className="fa-brands fa-whatsapp"></i></a>
//           <a href="#" className="text-2xl"><i className="fa-brands fa-twitter"></i></a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// import React from 'react';
// import { FaInstagram, FaWhatsapp, FaTimes } from 'react-icons/fa';
// import group from '../assets/group.png'

// const Footer = () => {
//   return (
//     <footer className="bg-purple-600 text-white py-8">
//       <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start">
//         {/* Logo and Social Media Section */}
//         <div className="flex flex-col items-center mb-6 md:mb-0">
//           {/* Logo */}
//           <div className="text-4xl font-bold mb-4"><img src={group}></img></div>
//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-200">
//               <FaInstagram size={20} />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaWhatsapp size={20} />
//             </a>
//             <a href="#" className="hover:text-gray-200">
//               <FaTimes size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto space-y-6 md:space-y-0 md:space-x-12">
//           <div>
//             <h3 className="font-semibold mb-2">About</h3>
//             <ul className="space-y-1 text-sm">
//               <li><a href="#" className="hover:underline">About Us</a></li>
//               <li><a href="#" className="hover:underline">News & Blog</a></li>
//               <li><a href="#" className="hover:underline">Location</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Products</h3>
//             <ul className="space-y-1 text-sm">
//               <li><a href="#" className="hover:underline">Pricing</a></li>
//               <li><a href="#" className="hover:underline">Store</a></li>
//               <li><a href="#" className="hover:underline">Features</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Discover</h3>
//             <ul className="space-y-1 text-sm">
//               <li><a href="#" className="hover:underline">Contact Us</a></li>
//               <li><a href="#" className="hover:underline">Customers</a></li>
//               <li><a href="#" className="hover:underline">Affiliates</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React, { useState } from 'react';
// import group from '../assets/group.png'
// const Footer = () => {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   return (
//     <footer className="bg-purple-600 text-white">
//       {/* Mobile Layout */}
//       <div className="lg:hidden px-6 py-4">
//         {['About', 'Products', 'Discover'].map((section, index) => (
//           <div key={index}>
//             <button
//               className="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-white/20"
//               onClick={() => toggleSection(section)}
//             >
//               {section}
//               <span>{openSection === section ? '▲' : '▼'}</span>
//             </button>
//             {openSection === section && (
//               <ul className="mt-2 space-y-2 pl-4 text-sm">
//                 {section === 'About' && (
//                   <>
//                     <li>About Us</li>
//                     <li>News & Blog</li>
//                     <li>Location</li>
//                   </>
//                 )}
//                 {section === 'Products' && (
//                   <>
//                     <li>Pricing</li>
//                     <li>Store</li>
//                     <li>Features</li>
//                   </>
//                 )}
//                 {section === 'Discover' && (
//                   <>
//                     <li>Contact Us</li>
//                     <li>Customers</li>
//                     <li>Affiliates</li>
//                   </>
//                 )}
//               </ul>
//             )}
//           </div>
//         ))}
//         <div className="my-4  h-50 w-50 border-t border-white/20">
//         <img src={group} alt="" />
//         </div>
//         <div className="flex justify-center space-x-4 text-2xl">
//           <i className="fab fa-instagram"></i>
//           <i className="fab fa-whatsapp"></i>
//           <i className="fas fa-times"></i>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden lg:flex justify-between items-start px-12 py-8">
//         <div className="flex flex-col items-center">
//           <div className="text-5xl font-bold mb-4">
//             <img src={group}/>
//           </div>
//           <div className="flex space-x-4 text-xl">
//             <i className="fab fa-instagram"></i>
//             <i className="fab fa-whatsapp"></i>
//             <i className="fas fa-times"></i>
//           </div>
//         </div>
//         <div className="flex space-x-12">
//           <div>
//             <h4 className="font-semibold text-lg mb-2">About</h4>
//             <ul className="space-y-2 text-sm">
//               <li>About Us</li>
//               <li>News & Blog</li>
//               <li>Location</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-lg mb-2">Products</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Pricing</li>
//               <li>Store</li>
//               <li>Features</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-lg mb-2">Discover</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Contact Us</li>
//               <li>Customers</li>
//               <li>Affiliates</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from 'react';
import group from '../assets/group.png'
const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-purple-600 text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden px-6 py-4">
        {['About', 'Products', 'Discover'].map((section, index) => (
          <div key={index}>
            <button
              className="w-full flex justify-between items-center text-lg font-semibold py-2 border-b border-white/20"
              onClick={() => toggleSection(section)}
            >
              {section}
              <span>{openSection === section ? '▲' : '▼'}</span>
            </button>
            {openSection === section && (
              <ul className="mt-2 space-y-2 pl-4 text-sm">
                {section === 'About' && (
                  <>
                    <li>About Us</li>
                    <li>News & Blog</li>
                    <li>Location</li>
                  </>
                )}
                {section === 'Products' && (
                  <>
                    <li>Pricing</li>
                    <li>Store</li>
                    <li>Features</li>
                  </>
                )}
                {section === 'Discover' && (
                  <>
                    <li>Contact Us</li>
                    <li>Customers</li>
                    <li>Affiliates</li>
                  </>
                )}
              </ul>
            )}
          </div>
        ))}
        {/* Line Bar Above Logo */}
        <div className="my-4 border-t border-white/20"></div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold mb-4">
           <img  className="w-10 h-10" src={group}/>
          </div>
          <div className="flex justify-center space-x-4 text-2xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between items-start px-12 py-8">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold mb-4">
            <img src={group}/>
          </div>
          <div className="flex space-x-4 text-xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="flex space-x-12">
          <div>
            <h4 className="font-semibold text-lg mb-2">About</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>News & Blog</li>
              <li>Location</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>Pricing</li>
              <li>Store</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Customers</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
