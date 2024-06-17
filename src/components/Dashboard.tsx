import React from 'react';
import Link from 'next/link';
import login from '../app/login/page';

const Dashboard: React.FC = () => {
  // const handleLogout = () => {
    // Handle logout logic here
  //   console.log('Logout clicked');
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4 dark:text-gray-200">Welcome to Your Dashboard</h2>
        <p className="text-lg mb-4 dark:text-gray-400">
          You are logged in successfully. Here you can manage your profile and settings.
        </p>
        <div className="mt-6">
          {/* Add your dashboard content here */}
          <p className="text-sm mb-2">Dashboard Content Goes Here</p>
          <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
        {/* <button
          onClick={handleLogout} // Event handler attached directly to onClick
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700"
          >
          Logout
          </button> */}
          
        <Link href={"/login"} className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700">Logout</Link>
      </div>
    </div>
  );
};

export default Dashboard;
