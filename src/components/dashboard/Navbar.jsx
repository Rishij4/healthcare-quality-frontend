import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md h-20 px-8 flex justify-between items-center">

      <div>

        <h1 className="text-2xl font-bold text-gray-800">
          Healthcare Quality Inspection System
        </h1>

        <p className="text-gray-500 text-sm">
          AI Powered Quality Monitoring
        </p>

      </div>

      <div className="flex items-center gap-6">

        <FaBell
          size={22}
          className="cursor-pointer"
        />

        <img
          src="https://i.pravatar.cc/50"
          alt=""
          className="w-12 h-12 rounded-full border-2 border-blue-600"
        />

      </div>

    </header>
  );
}