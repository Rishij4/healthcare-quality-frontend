import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

export default function Reports() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Generate and download inspection reports.
          </p>

          <div className="mt-8 bg-white rounded-xl shadow p-8">

            <h2 className="text-xl font-semibold mb-6">
              Report Center
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <button className="bg-blue-600 text-white rounded-lg p-5 hover:bg-blue-700">
                Inspection Report
              </button>

              <button className="bg-green-600 text-white rounded-lg p-5 hover:bg-green-700">
                Defect Report
              </button>

              <button className="bg-purple-600 text-white rounded-lg p-5 hover:bg-purple-700">
                CAPA Report
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}