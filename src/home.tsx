import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[700px]">

        <h1 className="text-4xl font-bold text-center">
          Justine Sumalinog
        </h1>

        <p className="text-center text-gray-500 mt-2">
          BSIT Student | React Developer
        </p>

        <div className="text-center mt-5">
          <Link to="/About">
            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
              About Me
            </button>
          </Link>
        </div>

        <div className="mt-8 border rounded p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p className="text-gray-600 mt-2">
            Shopping Website
          </p>
          <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
            Open
          </button>
        </div>

        <div className="mt-5 border rounded p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p className="text-gray-600 mt-2">
            Portfolio Website
          </p>
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>

        <div className="mt-5 border rounded p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">Project 3</h2>
          <p className="text-gray-600 mt-2">
            Contact Page
          </p>
          <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded">
            Email
          </button>
        </div>

      </div>
    </div>
  );
}