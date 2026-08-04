import DashboardLayout from "../../layouts/DashboardLayout";
import PermissionTable from "../../components/permissions/PermissionTable";

export default function PermissionList() {

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Permission Management
        </h1>

      </div>

      <PermissionTable />

    </DashboardLayout>

  );

}