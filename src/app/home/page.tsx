import React from 'react';
import Navbar from '@/components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow hero bg-gray-100 py-20 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 dark:text-gray-200">Find Your Dream Job</h1>
          <p className="text-xl mb-8 dark:text-gray-400">Browse through thousands of job listings to find the perfect fit for you.</p>
          <input
            type="text"
            placeholder="Search for jobs"
            className="p-2 rounded border border-gray-300 w-1/2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <button className="bg-blue-600 text-white p-2 rounded ml-2 dark:bg-blue-500">Search</button>
        </div>
      </div>
      <div className="flex-grow jobs-listing py-10 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">Latest Job Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="job-card bg-white p-4 rounded shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold dark:text-gray-200">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Tech Company</p>
              <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
            </div>
            <div className="job-card bg-white p-4 rounded shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold dark:text-gray-200">Product Manager</h3>
              <p className="text-gray-600 dark:text-gray-400">Product Co.</p>
              <p className="text-gray-600 dark:text-gray-400">New York, NY</p>
            </div>
            <div className="job-card bg-white p-4 rounded shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-bold dark:text-gray-200">UX Designer</h3>
              <p className="text-gray-600 dark:text-gray-400">Design Studio</p>
              <p className="text-gray-600 dark:text-gray-400">Remote</p>
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

export default Home;
