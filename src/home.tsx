import { Link } from "react-router-dom";
import { Message } from "./Message";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-[900px] bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-orange-400 flex items-center justify-center text-3xl font-bold text-white">
            JC
          </div>

          <h1 className="text-4xl font-bold mt-4"> Jone Cerciaca
          </h1>

          <p className="text-gray-500 mt-2"> React Developer • BSIT Student
          </p>

          <Link to="/About">
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              About Me
            </button>
          </Link>
        </div>

       
        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="bg-red-50 rounded-xl p-5 shadow">
            <Message card="Shopee"
description="Shopping Website"
                  text="Open"
              color="bg-red-500"
            />
          </div>

          <div className="bg-orange-50 rounded-xl p-5 shadow">
            <Message card="Portfolio" description="My React Projects" text="View"color="bg-orange-500"
            />
          </div>

          <div className="bg-blue-50 rounded-xl p-5 shadow">
            <Message card="Contact" description="Get in touch" text="Email" color="bg-blue-500"
            />
          </div>

        </div>

      </div>
    </div>
  );
}