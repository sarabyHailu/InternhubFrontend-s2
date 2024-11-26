import Navbar from '../components/Navbar';
import HeroSection from "../components/Herosection";
import LatestCollections from "../components/LatestCollections";
import CategoryCollections from "../components/ListwithCategory";
import SummerCollection from '../components/SummerCollection';
import CategoryBrowser from "../components/BrowsebyCategory";
import Footer from "../components/Footer";
import { useState } from 'react';
import { CartProvider,useCart } from '../CartContext';
const Home = () => 
  {
  const { addToCart, cartItems } = useCart();
    
    //     const [cart, setCart] = useState([]);
      
    //     const addToCart = (product) => {
    //       setCart((prevCart) => [...prevCart, product]);
    //     };
    return (
            <div>
                <CartProvider>
                <Navbar cartCount={cartItems.length} />
                <HeroSection />
                
                <LatestCollections addToCart={addToCart} />
               
                
                <CategoryCollections/>
                <SummerCollection/>
                <CategoryBrowser/>

                <Footer />
                </CartProvider>
                </div>)}
      export default Home;