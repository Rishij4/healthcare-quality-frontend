import { FaArrowUp } from "react-icons/fa";

export default function StatCard({
  title,
  value,
  color,
  icon,
}) {
  const colors = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    red: "from-red-500 to-red-700",
    yellow: "from-yellow-400 to-orange-500",
  };

  return (
    <div
      className={`bg-gradient-to-r ${colors[color]} rounded-2xl shadow-lg text-white p-6 hover:scale-105 transition duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-90">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div className="text-5xl opacity-80">
          {icon}
        </div>

      </div>

      <div className="flex items-center gap-2 mt-6 text-sm">

        <FaArrowUp size={16} />

        <span>Updated today</span>

      </div>

    </div>
  );
}