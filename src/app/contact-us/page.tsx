import React from 'react';
import Navbar from '@/components/Navbar';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow bg-gray-100 py-10 dark:bg-gray-800">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-center dark:text-gray-200">Contact Us</h1>
          <p className="text-lg mb-4 text-center dark:text-gray-400">Feel free to reach out to us with any questions or concerns.</p>
          <div className="flex flex-col md:flex-row bg-white p-6 rounded shadow-md dark:bg-gray-800">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Company Details</h2>
              <p className="dark:text-gray-400"><strong>Address:</strong></p>
              <p className="mb-4 dark:text-gray-400">123 Job Street, Employment City, JOB 12345</p>
              <p className="dark:text-gray-400"><strong>Phone:</strong></p>
              <p className="mb-4 dark:text-gray-400">+1 (123) 456-7890</p>
              <p className="dark:text-gray-400"><strong>Email:</strong></p>
              <p className="mb-4 dark:text-gray-400">contact@jobportal.com</p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="name">Name</label>
                  <input type="text" id="name" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="email">Email</label>
                  <input type="email" id="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="message">Message</label>
                  <textarea id="message" rows={4} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded dark:bg-blue-500">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 text-center text-white dark:bg-gray-900 dark:text-gray-200">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;
