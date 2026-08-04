import DashboardLayout from "../../layouts/DashboardLayout";
import DepartmentForm from "../../components/departments/DepartmentForm";

export default function AddDepartment() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Add Department
      </h1>

      <DepartmentForm />
    </DashboardLayout>
  );
}