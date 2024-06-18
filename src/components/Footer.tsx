import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;