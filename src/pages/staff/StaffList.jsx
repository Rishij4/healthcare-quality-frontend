import DashboardLayout from "../../layouts/DashboardLayout";
import StaffTable from "../../components/staff/StaffTable";
import useStaff from "../../hooks/useStaff";
import { deleteStaff } from "../../api/staffApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function StaffList() {

  const {
    staff,
    loading,
    loadStaff,
  } = useStaff();

  const remove = async (id) => {

    if (!window.confirm("Delete this staff member?"))
      return;

    try {

      await deleteStaff(id);

      toast.success("Staff Deleted");

      loadStaff();

    } catch {

      toast.error("Unable to Delete");

    }

  };

  if (loading) {

    return (

      <DashboardLayout>

        <h2 className="text-xl font-bold">
          Loading...
        </h2>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">

          Staff Management

        </h1>

        <Link
          to="/staff/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >

          + Add Staff

        </Link>

      </div>

      <StaffTable
        staff={staff}
        onDelete={remove}
      />

    </DashboardLayout>

  );

}