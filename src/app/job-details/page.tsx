// pages/jobs/[id].tsx
"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import React from 'react';

const JobDetails: React.FC = () => {
  const router = useRouter();
  // const { id } = router.query;

  // Mock data for demonstration
  const job = {
    title: 'Software Engineer',
    company: 'Tech Company',
    location: 'San Francisco, CA',
    description: 'We are looking for a Software Engineer with 3+ years of experience...',
    requirements: [
      '3+ years of experience in software development',
      'Proficiency in JavaScript, React, and Node.js',
      'Experience with RESTful APIs and databases',
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Write clean and efficient code',
    ],
  };

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow container mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6">
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-200">{job.title}</h1>
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold mr-2 dark:text-gray-400">{job.company}</h2>
          <p className="text-lg dark:text-gray-400">| {job.location}</p>
        </div>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Job Description</h2>
        <p className="mb-6 dark:text-gray-400">{job.description}</p>
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Requirements</h2>
        <ul className="list-disc list-inside mb-6 pl-4 dark:text-gray-400">
          {job.requirements.map((req, index) => (
            <li key={index} className="mb-2">{req}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Responsibilities</h2>
        <ul className="list-disc list-inside mb-6 pl-4 dark:text-gray-400">
          {job.responsibilities.map((resp, index) => (
            <li key={index} className="mb-2">{resp}</li>
          ))}
        </ul>
        <button
          onClick={() => router.push('/')}
          className="mt-6 mr-5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Back to Jobs
        </button>
        <button
        //   onClick={() => router.push('/')}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Apply
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default JobDetails;
