import React from 'react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow bg-gray-100 py-10 dark:bg-gray-800">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-center dark:text-gray-200">About Us</h1>
          <p className="text-lg mb-4 text-center dark:text-gray-400">
            We are dedicated to helping you find the best job opportunities available.
          </p>

          {/* First Section */}
          <div className="bg-white p-6 rounded shadow-md mb-8 dark:bg-gray-700 flex flex-col md:flex-row items-center">
            <img
              src="/our-mission.jpg" // Replace with actual image source
              alt="Our Mission"
              className="w-full md:w-1/2 rounded mb-4 md:mb-0 md:mr-4"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Our Mission</h2>
              <p className="mb-4 dark:text-gray-400">
                Our mission is to connect job seekers with their dream jobs and employers with the best talent. We strive to provide an efficient and user-friendly platform for job searching and hiring.
                <br /><br />
                We are dedicated to connecting job seekers with their dream roles and helping employers find top talent. Our platform offers intuitive tools for efficient job searching and hiring.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="bg-gray-100 p-6 rounded shadow-md mb-8 dark:bg-gray-800 flex flex-col md:flex-row-reverse items-center">
            <img
              src="/our-team.jpg" // Replace with actual image source
              alt="Our Team"
              className="w-full md:w-1/2 rounded mb-4 md:mb-0 md:ml-4"
            />
            <div className="md:mr-6 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Our Team</h2>
              <p className="mb-4 dark:text-gray-400">
                Our team is composed of experienced professionals passionate about helping people achieve their career goals. We work tirelessly to improve our services and provide the best possible experience for our users.
                <br /><br />
                Our team comprises dedicated professionals with diverse expertise, driven by a shared passion for empowering individuals in their career journeys.
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="bg-white p-6 rounded shadow-md dark:bg-gray-700 flex flex-col md:flex-row items-center">
            <img
              src="/our-values.jpg" // Replace with actual image source
              alt="Our Values"
              className="w-full md:w-1/2 rounded mb-4 md:mb-0 md:mr-4"
            />
            <div className="md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Our Values</h2>
              <ul className="list-disc list-inside dark:text-gray-400">
                <li>Integrity</li>
                <li>Commitment</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
              </ul>
              <br />
              <p className="mb-4 dark:text-gray-400">
                Our values revolve around integrity, empathy, innovation, and collaboration. We are committed to excellence in service, fostering a supportive environment, and continuously evolving to meet the dynamic needs of our users and stakeholders.
              </p>
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

export default About;
