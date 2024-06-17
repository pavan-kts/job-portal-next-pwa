import React from "react";
import Navbar from "@/components/Navbar";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow bg-gray-100 py-10 dark:bg-gray-800">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-center dark:text-gray-200">
            Contact Us
          </h1>
          <p className="text-lg mb-4 text-center dark:text-gray-400">
            Feel free to reach out to us with any questions or concerns.
          </p>
          <div className="flex flex-col md:flex-row bg-white p-6 rounded shadow-md dark:bg-gray-800">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">
                Company Details
              </h2>
              <p className="dark:text-gray-400">
                <strong>Address:</strong>
              </p>
              <p className="mb-4 dark:text-gray-400">
                123 Job Street, Employment City, JOB 12345
              </p>
              <div className="flex">
                <div>
                  <p className="dark:text-gray-400">
                    <strong>Phone:</strong>
                  </p>
                  <p className="mb-4 dark:text-gray-400">+91 9876543210</p>
                </div>
                <div className="ml-16">
                  <p className="dark:text-gray-400">
                    <strong>Email:</strong>
                  </p>
                  <p className="mb-4 dark:text-gray-400">
                    contact@jobportal.com
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.272383472671!2d73.78110577432076!3d18.561754767916657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf589780c4c3%3A0x217fe83432efd790!2s74%20DOWN%20TOWN%20By%20AURA%20Realtors!5e0!3m2!1sen!2sin!4v1718604924487!5m2!1sen!2sin"
                width="550"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded dark:bg-blue-500"
                >
                  Send Message
                </button>
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
