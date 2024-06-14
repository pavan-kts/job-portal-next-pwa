import LoginPage from "@/components/LoginPage";
import Image from "next/image";
import Home from "./home/page";

export default function App() {
  return (
    <main>
      {/* <h1>Welcome</h1> */}
      <Home/>
      {/* <a
        href="/login"
        className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Go to Login Page
      </a> */}
    </main>
  );
}
