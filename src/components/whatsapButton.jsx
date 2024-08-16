// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = (customerName, customerMobile, carModel, carNumber, hireDate, hireTime) => {
  const phoneNumber = '94774398403'; // Your phone number in international format without the plus sign
  const message = `Hello, I would like to hire your \n 
  I am ${customerName} and my contact number is ${customerMobile}.
  I want ${carModel} that has number plate as ${carNumber} .
  and it will be needed for me on ${hireDate} at ${hireTime}  
  `;

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log('Generated URL:', url); // Debug: Check the generated URL in the console

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-8 text-3xl font-mono font-extrabold italic"
    >
      Confirm the Details
    </button>
  );
};

export default WhatsAppButton;
