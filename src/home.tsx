import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-orange-100 flex justify-center items-center">

      <div className="w-[1000px] bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold mt-6">
             Mark Degamogit remote -v
            </h1>

            <p className="text-gray-500 mt-3">
              React Developer • BSIT Student
            </p>

            <Link to="/About">
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold">
                About Me
              </button>
            </Link>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">

          <div className="bg-red-100 rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold">
              Shopee
            </h2>

            <p className="text-gray-500 mt-3">
              Shopping Website
            </p>

            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
              Open
            </button>

          </div>

          <div className="bg-orange-100 rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold">
              Portfolio
            </h2>

            <p className="text-gray-500 mt-3">
              My React Projects
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">
              View
            </button>

          </div>

          <div className="bg-blue-100 rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold">
              Contact
            </h2>

            <p className="text-gray-500 mt-3">
              Get in Touch
            </p>

            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
              Email
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}