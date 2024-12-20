import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* First Line: Logo */}
      <div className="flex  justify-center items-center px-4">
        <img src="/2.jpg" alt="Logo" className="h-12" />
      </div>

      {/* Second Line: Four Flexboxes */}
      <div className="flex md:flex-row flex-col justify-between items-center px-4 m-6 ">
        <div className="flex flex-col items-center md:p-0 p-4">
          <div>
            <span className="font-bold text-sky-500">ADDRESS :</span>{" "}
            <p>
              H/O : FF/22, Saujanya Complex, <br />
              Opp SBI Bank, Kamlanagar, <br />
              Ajwaroad, Vadodara 390019, <br />
              Gujarat-INDIA.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:p-0 p-4">
          <div className=" my-4 font-bold text-sky-500">Social Media</div>
          <div className="flex flex-row space-x-6">
            <a href="">
              <FaFacebookF className="text-white h-6 w-6" />
            </a>
            <a href="">
              <FaTwitter className="text-white h-6 w-6" />
            </a>
            <a href="">
              <FaLinkedinIn className="text-white h-6 w-6" />
            </a>
            <a href="">
              <FaYoutube className="text-white h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center text-white md:p-0 p-4 pb-0">
          <ol>
            <li className="font-bold text-sky-500">Useful Links</li>
            <li>Home</li>
            <li>Website terms</li>
            <li>Cookies Policy</li>
          </ol>
        </div>
        <div className="flex flex-col items-center">
          <ol>
            <li>Privacy Policy</li>
            <li>Payment Terms</li>
          </ol>
        </div>
      </div>

      {/* Solid Line */}
      <div className="border-t border-white my-6" />

      {/* Third Line: Copyright Details */}
      <div className="text-center text-sm px-4">
        <p>
          &copy; {new Date().getFullYear()} Dominant Pharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
