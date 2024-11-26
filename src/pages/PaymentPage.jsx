
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <form className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Address 1"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Address 2"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <select
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    defaultValue="" placeholder="Select State"
                  >
                    <option value="" disabled>
                      Select State
                    </option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>New York</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <div className="flex space-x-4 mb-4">
                {['card', 'wallet', 'bank'].map((method) => (
                  <button
                    key={method}
                    className={`flex-1 border rounded-lg p-4 text-center font-medium ${
                      paymentMethod === method
                        ? 'border-yellow-400 bg-yellow-100 text-yellow-600'
                        : 'border-gray-300 bg-white text-gray-600'
                    }`}
                    onClick={() => setPaymentMethod(method)}
                  >
                    {method === 'card' && 'Card'}
                    {method === 'wallet' && 'Wallet'}
                    {method === 'bank' && 'Bank Transfer'}
                  </button>
                ))}
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Card number"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    >
                      <option value="" disabled selected>
                        MM
                      </option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                    <select
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    >
                      <option value="" disabled selected>
                        YYYY
                      </option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                    <select
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    >
                      <option value="" disabled selected>
                        CVV
                      </option>
                      <option>1</option>
                      <option>2</option>
                     
                    </select>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="product"
                className="w-12 h-12 rounded-lg"
              />
              <div className="ml-4">
                <h3 className="text-gray-700">Burberry Shine</h3>
                <p className="text-sm text-gray-500">FENDI</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$150</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$5</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-700">
              <span>Total</span>
              <span>$165</span>
            </div>
            <button className="w-full bg-yellow-400 text-white rounded-lg py-2 hover:bg-yellow-500 transition">
              Place Order
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaymentPage;
