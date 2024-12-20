import React from "react";
import Slider from "react-slick";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
const Testimonials = () => {
  const settings = {
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Change slide every 3 seconds
    dots: true, // Show dots below carousel
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  const testimonials = [
    {
      name: "John Doe",
      post: "Software Engineer",
      comment: "This is an amazing service! Highly recommend to everyone.",
    },
    {
      name: "Jane Smith",
      post: "Graphic Designer",
      comment: "A game-changer! It really made a difference for me.",
    },
    {
      name: "Bob Johnson",
      post: "Product Manager",
      comment: "Fantastic! The best experience I've had in years.",
    },
    {
      name: "Sara Lee",
      post: "Marketing Specialist",
      comment: "Absolutely wonderful! I would use this again for sure.",
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What People Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative">
              {/* <div className="absolute -top-8 left-0 right-0 flex justify-center">
                
                
                
              </div> */}
              <p className="text-blue-500 text-2xl italic text-center mt-6">
              <span className="text-6xl text-sky-500"><ImQuotesLeft /></span>
                {testimonial.comment}
                <span className="text-right text-6xl text-sky-500"><ImQuotesRight /></span>
              </p>
             
              <div className="mt-6 text-center">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.post}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
