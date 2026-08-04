import DashboardLayout from "../../layouts/DashboardLayout";
import RoleTable from "../../components/roles/RoleTable";

export default function RoleList() {
  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Role Management
        </h1>

      </div>

      <RoleTable />

    </DashboardLayout>
  );
}