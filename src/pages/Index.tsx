import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-teal-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">Your App</Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-teal-200">Home</Link>
            <Link to="/about" className="text-white hover:text-teal-200">About</Link>
            <Link to="/contact" className="text-white hover:text-teal-200">Contact</Link>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl text-gray-600">Start building your amazing project here!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;