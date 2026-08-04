import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold">
            Analytics Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-6 mt-8">

            <div className="bg-white shadow rounded-xl p-6">
              <h2>Total Inspections</h2>
              <p className="text-3xl font-bold mt-3">0</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h2>Total Defects</h2>
              <p className="text-3xl font-bold mt-3">0</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h2>Critical Risk</h2>
              <p className="text-3xl font-bold mt-3">0</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6">
              <h2>Completed</h2>
              <p className="text-3xl font-bold mt-3">0</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}