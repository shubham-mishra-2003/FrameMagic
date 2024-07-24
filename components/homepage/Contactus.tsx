"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`bg-${resolvedTheme === 'dark' ? 'gray-800' : 'gray-100'} py-12`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-semibold text-center mb-6 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>Contact Us</h2>
          <div className="flex flex-col items-center">
            {/* Skeleton Loader for Form */}
            <div className="w-full md:w-3/5 lg:w-2/5 p-4">
              <div className={`h-10 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded mb-4 animate-pulse`}></div>
              <div className={`h-10 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded mb-4 animate-pulse`}></div>
              <div className={`h-10 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded mb-4 animate-pulse`}></div>
              <div className={`h-10 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded mb-4 animate-pulse`}></div>
              <div className={`h-10 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded animate-pulse`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className={`min-h-screen overflow-hidden bg-${resolvedTheme === 'dark' ? 'gray-800' : 'gray-100'} py-12`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-semibold text-center mb-6 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>Contact Us</h2>
        <div className="flex justify-center">
          <form
            action="/api/contact" // Replace with your API endpoint
            method="POST"
            className="w-full md:w-3/5 lg:w-2/5 p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${resolvedTheme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${resolvedTheme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${resolvedTheme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Phone (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${resolvedTheme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition ${resolvedTheme === 'dark' ? 'hover:bg-blue-700' : 'hover:bg-blue-400'}`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
