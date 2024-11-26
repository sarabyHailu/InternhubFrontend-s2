import React from 'react'
import ProductPage from '../components/Productc';
import Navbar from '../components/Navbar';
import ProductComponent from '../components/ProductDescription';
import Footer from '../components/Footer';
export default function CheckoutPage() {
  return (
    <div>
            <Navbar/>
            <ProductPage/>
            <ProductComponent/>
            <Footer/>

    </div>
  )
}
