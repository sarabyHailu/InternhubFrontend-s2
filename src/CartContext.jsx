// // CartContext.js
// import React, { createContext, useState, useContext } from "react";

// // Create Context
// const CartContext = createContext();

// // Custom Hook to use Cart Context
// export const useCart = () => useContext(CartContext);

// // CartProvider component to manage cart state
// export const CartProvider = ({ children }) => {
//   // Cart state holds an array of cart items
//   const [cart, setCart] = useState([]);

//   // Function to add item to the cart
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       // Check if product is already in the cart
//       const isProductInCart = prevCart.some((item) => item.id === product.id);
//       if (isProductInCart) {
//         // If product is already in cart, increase quantity
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // Otherwise, add new product to cart
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Function to remove item from cart
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const isProductInCart = prevCart.some((item) => item.id === product.id);
//       const updatedCart = isProductInCart
//         ? prevCart.map((item) =>
//             item.id === product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...prevCart, { ...product, quantity: 1 }];

//       // Logging the added product and updated cart state
//       console.log("Product added:", product);
//       console.log("Updated cart state:", updatedCart);

//       return updatedCart;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // You can add functions to modify cartItems as needed
//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]); // Cart items state

//   // Add item to the cart
//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       // Check if the item already exists in the cart
//       const existingItem = prevItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         // If it exists, increment the quantity
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       // If it doesn't exist, add it with quantity 1
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   // Remove item from the cart
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Update item quantity
//   const updateQuantity = (id, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook
// export const useCart = () => useContext(CartContext);
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart items state

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Remove from localStorage when cart is empty
    }
  }, [cartItems]);

  // Add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If it exists, increment the quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // If it doesn't exist, add it with quantity 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);
