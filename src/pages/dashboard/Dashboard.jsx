import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import InspectionTrend from "../../components/dashboard/InspectionTrend";
import useDashboard from "../../hooks/useDashboard";
import { useSelector } from "react-redux";
import {
  FaUserInjured,
  FaClipboardCheck,
  FaBug,
  FaTasks,
  FaPlus,
  FaFileMedical,
  FaChartLine,
} from "react-icons/fa";

export default function Dashboard() {
  useDashboard();

  const { stats } = useSelector((state) => state.dashboard);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to the Healthcare Quality Inspection System
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">
          + New Inspection
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Patients"
          value={stats.totalPatients || 0}
          color="blue"
          icon={<FaUserInjured />}
        />

        <StatCard
          title="Inspections"
          value={stats.totalInspections || 0}
          color="green"
          icon={<FaClipboardCheck />}
        />

        <StatCard
          title="Defects"
          value={stats.totalDefects || 0}
          color="red"
          icon={<FaBug />}
        />

        <StatCard
          title="Pending CAPA"
          value={stats.totalCAPA || 0}
          color="yellow"
          icon={<FaTasks />}
        />

      </div>

      {/* Charts */}

      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-semibold">
            Inspection Trend
          </h2>

          <FaChartLine className="text-blue-600 text-xl" />

        </div>

        <InspectionTrend />

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Quick Actions */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-blue-600 text-white rounded-lg p-4 hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <FaPlus />
              Add Patient
            </button>

            <button className="bg-green-600 text-white rounded-lg p-4 hover:bg-green-700 transition flex items-center justify-center gap-2">
              <FaClipboardCheck />
              Inspection
            </button>

            <button className="bg-red-600 text-white rounded-lg p-4 hover:bg-red-700 transition flex items-center justify-center gap-2">
              <FaBug />
              Report Defect
            </button>

            <button className="bg-purple-600 text-white rounded-lg p-4 hover:bg-purple-700 transition flex items-center justify-center gap-2">
              <FaFileMedical />
              Generate Report
            </button>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">
                Inspection Completed
              </p>
              <p className="text-gray-500 text-sm">
                Clinical Audit completed successfully.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium">
                Defect Identified
              </p>
              <p className="text-gray-500 text-sm">
                High severity documentation issue detected.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">
                CAPA Closed
              </p>
              <p className="text-gray-500 text-sm">
                Corrective action has been completed.
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}