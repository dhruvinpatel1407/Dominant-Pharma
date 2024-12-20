import React from "react";

const WhatWeDo = () => {
  return (
    <div className="p-6 border border-2 border-gray-200">
      {/* Header */}
      <h4 className=" lg:text-5xl text-3xl text-sky-500 font-bold text-center" style={{ fontFamily: "antonioregular" }}>
        WHAT WE DO
      </h4>

      {/* Flex container for the 4 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* Box 1 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md">
        <div className="w-32 h-32 overflow-hidden">
          <img
            src="/icon1.jpg"  // Adjust the image path
            alt="Box 4"
            className="w-full h-auto object-cover mb-4"
          /> </div>
          <h5 className="text-xl font-semibold text-center" style={{fontFamily:"antonioregular"}}>Amazing People</h5>
          <p className="text-gray-600 text-center">Nam eros nunc, congue quis enim et, blandit lobortis turpis. Sed dapibus risus risus, vitae</p>
       </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md">
        <div className="w-32 h-32 overflow-hidden">
          <img
            src="/icon2.jpg"  // Adjust the image path
            alt="Box 4"
            className="w-full h-auto object-cover mb-4"
          /> </div>
          <h5 className="text-xl font-semibold text-center" style={{fontFamily:"antonioregular"}}>Experienced</h5>
          <p className="text-gray-600 text-center">Nam eros nunc, congue quis enim et, blandit lobortis turpis. Sed dapibus risus risus, vitae</p>
       </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md">
        <div className="w-32 h-32 overflow-hidden">
          <img
            src="/icon3.jpg"  // Adjust the image path
            alt="Box 4"
            className="w-full h-auto object-cover mb-4"
          /> </div>
          <h5 className="text-xl font-semibold text-center" style={{fontFamily:"antonioregular"}}>Solid Foundation</h5>
          <p className="text-gray-600 text-center">Nam eros nunc, congue quis enim et, blandit lobortis turpis. Sed dapibus risus risus, vitae</p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md">
        <div className="w-32 h-32 overflow-hidden">
          <img
            src="/icon1.jpg"  // Adjust the image path
            alt="Box 4"
            className="w-full h-auto object-cover mb-4"
          /> </div>
          <h5 className="text-xl font-semibold text-center" style={{fontFamily:"antonioregular"}}>Different Approach</h5>
          <p className="text-gray-600 text-center">Nam eros nunc, congue quis enim et, blandit lobortis turpis. Sed dapibus risus risus, vitae</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo ;
