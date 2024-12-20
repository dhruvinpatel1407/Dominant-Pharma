import React from "react";

const NewsAndUpdates = () => {
  return (
    <div className="flex w-full bg-gray-100 ">
      {/* Static News and Updates */}
      

      {/* Scrolling News Text */}
      <div className="w-3/5 p-4 overflow-hidden">
        <div className="flex animate-marquee">
          <p className="text-gray-600 text-lg whitespace-nowrap">
            {/* Running News */}
            <span className="mr-10">New products are now available! Stay tuned for updates.</span>
            <span className="mr-10"> Our new website is launching soon. Check it out in the coming days!</span>
            <span className="mr-10"> Exciting events coming up next month, don't miss out!</span>
            <span className="mr-10"> Company expansion plans underway. More news coming soon!</span>
          </p>
        </div>
      </div>

      <div className="w-2/5 p-4 bg-sky-500">
        <h2 className="text-2xl font-bold text-white" style={{fontFamily:"antonioregular"}}>NEWS & UPDATES</h2>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsAndUpdates;
