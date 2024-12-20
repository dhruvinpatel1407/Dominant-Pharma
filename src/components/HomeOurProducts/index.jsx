import React from 'react';

const HomeOurProduct = () => {
  return (
    <div className="p-8 bg-black">
   

    {/* Main Flex Container */}
    <div className="flex flex-col sm:flex-row sm:justify-between mt-6 ">
      {/* Left Section (Text) */}
      <div className="sm:w-3/5 w-full text-center sm:text-left mb-6 sm:mb-0 pe-8 lg:pt-8">
        <h5 className="text-5xl text-sky-500 font-bold" style={{fontFamily:"antonioregular"}}>OUR PRODUCTS</h5>
        <p className="text-white text-lg mt-2">
        Nam eros nunc, congue quis enim et, blandit lobortis turpis. Sed dapibus risus risus, vitae dapibus quam tempus nec. Mauris vel diam lobortis, ornare nunc sit amet, molestie odio. Morbi pellentesque pharetra massa, quis consectetur tellus interdum nec. </p>
      </div>

      {/* Middle Image Section */}
      <div className="sm:w-1/5 w-full flex flex-col justify-center mb-6 sm:mb-0 me-4 ">
       <div className='border border-4 border-white rounded-md mx-28 sm:mx-0'>
        <img
          src="../../../public/img1.jpg"  // Replace with your image path
          alt="Image 1"
          className="w-full h-full object-cover"
        /></div>
        <h4 className='text-white text-center text-xl'>API Products</h4>
      </div>

      {/* Right Image Section */}
      <div className="sm:w-1/5 w-full flex flex-col justify-center ">
      <div className='border border-4 border-white rounded-md mx-28 sm:mx-0'>
        <img
          src="../../../public/img2.jpg"  // Replace with your image path
          alt="Image 2"
          className="w-full h-full object-cover"
        /> </div>
        <h4 className='text-white text-center text-xl'>API Products</h4>
      </div>
    </div>
  </div>
  );
};

export default HomeOurProduct;
