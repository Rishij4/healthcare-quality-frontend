import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import StaffForm from "../../components/staff/StaffForm";
import { createStaff } from "../../api/staffApi";
import { getDepartments } from "../../api/departmentApi";
import toast from "react-hot-toast";

export default function AddStaff() {

  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    loadDepartments();

  }, []);

  const loadDepartments = async () => {

    const res = await getDepartments();

    setDepartments(res.data);

  };

  const submit = async (data) => {

    try {

      await createStaff(data);

      toast.success("Staff Created");

      navigate("/staff");

    } catch {

      toast.error("Unable to Create Staff");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Add Staff

      </h1>

      <StaffForm
        departments={departments}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}