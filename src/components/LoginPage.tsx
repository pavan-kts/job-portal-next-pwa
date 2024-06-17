import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email : ' + formData.email);
    console.log('Password : ' + formData.password);
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:text-gray-200 flex flex-col items-center justify-center p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-200">Login</h2>
        <div className="mb-4 w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={formData.email}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={formData.password}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </div>
        <button
          type="submit"
          className="py-2 my-2 bg-blue-500 text-white px-5 font-semibold rounded-lg hover:bg-blue-700 w-full max-w-sm"
        >
          Login
        </button>
        <Link
          href="/register"
          className="inline-block my-2 text-center rounded-lg hover:text-blue-600 dark:hover:text-blue-400"
        >
          Dont have an account? Register here
        </Link>
        <Link
          href="/"
          className="inline-block my-2 text-center rounded-lg hover:text-blue-600 dark:hover:text-blue-400"
        >
          Go to Home Page
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
