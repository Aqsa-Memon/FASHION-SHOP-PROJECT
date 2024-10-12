//Banner
import React from 'react';

function Banner() {
  return (
    <div className="bg-green-100 text-center p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-3xl font-bold text-gray-800">Flash Sale Get 30% off on all items.</h2>
      <p className="text-sm md:text-lg mt-2">Use code: <span className="font-semibold">FLASH30</span> at checkout</p>
    </div>
  );
}

export default Banner;
