import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import StaffForm from "../../components/staff/StaffForm";
import { getStaffById, updateStaff } from "../../api/staffApi";
import { getDepartments } from "../../api/departmentApi";
import toast from "react-hot-toast";

export default function EditStaff() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [staff, setStaff] = useState();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const s = await getStaffById(id);

    setStaff(s.data);

    const d = await getDepartments();

    setDepartments(d.data);

  };

  const submit = async (data) => {

    await updateStaff(id, data);

    toast.success("Updated");

    navigate("/staff");

  };

  if (!staff)
    return null;

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Edit Staff

      </h1>

      <StaffForm
        defaultValues={staff}
        departments={departments}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}