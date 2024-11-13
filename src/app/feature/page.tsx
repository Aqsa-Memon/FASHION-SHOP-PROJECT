import React from 'react'

import { FaShoppingBag, FaTruck, FaMoneyCheckAlt, FaTags } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Why Choose Us?</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-12">
          Experience the best in fashion with exclusive benefits designed to make your shopping easy and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6">
          
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaShoppingBag className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Quality Products</h3>
            <p className="text-gray-600 mt-2">Explore premium quality items crafted with style and durability in mind.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaTruck className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Fast Shipping</h3>
            <p className="text-gray-600 mt-2">Enjoy quick and reliable delivery to your doorstep.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaMoneyCheckAlt className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Easy Returns</h3>
            <p className="text-gray-600 mt-2">Not satisfied? We offer easy and hassle-free returns.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <FaTags className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800">Exclusive Discounts</h3>
            <p className="text-gray-600 mt-2">Get amazing deals and discounts on top brands.</p>
          </div>

        </div>
      </div>
    </section>
  );
};


export default Features