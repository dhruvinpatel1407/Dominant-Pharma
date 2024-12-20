// ../../../public/ourvision.jpg
// ../../../public/missionimg.jpg
import React from 'react';
import { Parallax } from 'react-parallax';

const WhoWeAre = () => {
  return (
    <div className="w-full">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex w-full">
        {/* Left Side: Parallax Image with Text Overlay */}
        <div className="w-1/2">
          <Parallax 
            blur={0} 
            bgImage="/ourvision.jpg" // Replace with your image path
            bgImageAlt="Left Side Image"
            strength={200}
            className="w-full h-full"
          >
            <div className="flex flex-col py-40 justify-center items-center w-full h-full bg-white bg-opacity-10 h-full ">
              <h2 className="text-5xl font-bold text-white border-b-4 border-sky-500 pb-4" style={{fontFamily:"antonioregular"}}>OUR VISION</h2>
              <p className="text-lg text-white m-6 mx-12 text-center">
              To provide this standard of “health” for every individual is our main vision & mission. For that we are a vibrant, transparent, ethical and a spirited organization with a progressive outlook.
              </p>
            </div>
          </Parallax>
        </div>

        {/* Right Side: Divided into Two Parts */}
        <div className="w-1/2 p-6 pe-2 ">
          {/* Top Section: Heading and Text */}
          <div className="mb-8">
            <h3 className="text-4xl font-semibold text-sky-500" style={{fontFamily:"antonioregular"}}>WHO WE ARE</h3>
            <p className="text-md text-gray-600 mt-2">
            Dominant pharma Pvt ltd. is established since 2010. Our company has group of dedicated, committed and experienced professionals. Our guiding principle is to provide quality, affordability, availability with best care. Our company is pacing towards the ladder of success with our efficient services, cost effective & world-class medicines.
            </p>
          </div>

          {/* Bottom Section: Left Text and Right Image */}
          <div className="flex border border-2 border-gray-200 p-4">
            <div className="w-1/2 pr-4">
            <h4 className='text-3xl font-bold' style={{fontFamily:"antonioregular"}}>OUR MISSION</h4>
              <p className="text-md text-gray-600">
              With our dedicated approach we have made available a range of value added and innovative products which are beneficial for the ill person. It is for this reason that our products have found heartiest acceptance by all the practicing doctors.


              </p>
            </div>
            <div className="w-1/2">
              <img
                src="/missionimg.jpg" // Replace with your image path
                alt="Right Side Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Medium Screen Layout */}
      <div className="lg:hidden w-full">
        {/* Top: Parallax Image with Text Overlay */}
        <div className="relative w-full">
          <Parallax 
            blur={0} 
            bgImage="/ourvision.jpg" // Replace with your image path
            bgImageAlt="Top Image"
            strength={200}
            className="w-full h-96 object-cover"
          >
            <div className="absolute inset-0 bg-white bg-opacity-10 flex flex-col justify-center items-center text-center py-48">
              <h2 className="text-3xl font-bold text-white border-b-4 border-sky-500 pb-2" style={{fontFamily:"antonioregular"}}>OUR VISION</h2>
              <p className="text-lg text-white mt-2">
              To provide this standard of “health” for every individual is our main vision & mission. For that we are a vibrant, transparent, ethical and a spirited organization with a progressive outlook.
             
              </p>
            </div>
          </Parallax>
        </div>

        {/* Bottom: Text with Header */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-sky-500" style={{fontFamily:"antonioregular"}}>WHO WE ARE</h3>
          <p className="text-lg text-gray-600 mt-2">
          Dominant pharma Pvt ltd. is established since 2010. Our company has group of dedicated, committed and experienced professionals. Our guiding principle is to provide quality, affordability, availability with best care. Our company is pacing towards the ladder of success with our efficient services, cost effective & world-class medicines.
          </p>
        </div>

        {/* Bottom: Left Text and Right Image */}
        <div className="flex flex-col sm:flex-row p-6 border border-2 border-gray-200">
          <div className="sm:w-1/2 w-full sm:pr-4 ">
          <h4 className='text-3xl font-bold' style={{fontFamily:"antonioregular"}}>OUR MISSION</h4>
            <p className="text-xl text-gray-600 ">
            
            With our dedicated approach we have made available a range of value added and innovative products which are beneficial for the ill person. It is for this reason that our products have found heartiest acceptance by all the practicing doctors.
            </p>
          </div>
          <div className="sm:w-1/2 w-full sm:pt-0 pt-4 ">
            <img
              src="/missionimg.jpg" // Replace with your image path
              alt="Right Side Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

