"use client";
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-green-500 dark:bg-gray-900 dark:text-green-300">
      <div className="block">Logged in successfully...Welcome to dashboard</div>
      <a
        href="/login"
        className="inline-block my-2 text-center rounded-lg text-white px-4 py-1 shadow-sm shadow-black bg-red-500 hover:bg-red-800 dark:shadow-white"
      >
        Logout
      </a>
    </div>
  );
};

export default Dashboard;
