"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const UserProfile: React.FC = () => {
  const router = useRouter();

  // Mock user data for demonstration
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&ga=GA1.1.188971478.1716538304&semt=sph',
    bio: 'Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
    location: 'San Francisco, CA',
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mr-6" />
            <div>
              <h1 className="text-3xl font-bold dark:text-gray-200">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{user.location}</p>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold dark:text-gray-200">Bio</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{user.bio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold dark:text-gray-200">Skills</h2>
            <ul className="mt-2 flex flex-wrap">
              {user.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2 dark:bg-blue-600"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => router.push('/')}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;
