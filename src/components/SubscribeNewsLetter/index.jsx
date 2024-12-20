import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribing with email: ${email}`);
      // Add subscription logic here
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="flex justify-center items-center h-60 bg-sky-500">
      <div className="bg-sky-500 p-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">SUBSCRIBE NEWSLETTER</h2>
        <div className="flex flex-col sm:flex-row items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded-lg mb-3 sm:mb-0 sm:mr-3 w-full sm:w-2/3"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 text-white p-3 rounded-lg w-full sm:w-1/3 border bordder-1 hover:bg-blue-600"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
