import DashboardLayout from "../../layouts/DashboardLayout";
import PatientTable from "../../components/patients/PatientTable";
import { Link } from "react-router-dom";

export default function Patients() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Patient Management
        </h1>

        <Link
          to="/patients/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Patient
        </Link>

      </div>

      <PatientTable />

    </DashboardLayout>
  );
}