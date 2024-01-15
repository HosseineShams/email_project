import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Welcome to the Email Campaign Manager! This tool is designed to streamline 
        your email marketing process, making it easy and efficient to manage 
        campaigns, send emails, and track your success. Our platform offers a 
        range of features including user registration, file uploads, and dynamic 
        email templates.
      </p>
      <div className="mt-6">
        <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;
