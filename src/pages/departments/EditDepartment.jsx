import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import DepartmentForm from "../../components/departments/DepartmentForm";
import {
  getDepartment,
  updateDepartment,
} from "../../api/departmentApi";
import toast from "react-hot-toast";

export default function EditDepartment() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [department, setDepartment] = useState(null);

  useEffect(() => {

    loadDepartment();

  }, []);

  const loadDepartment = async () => {

    try {

      const res = await getDepartment(id);

      setDepartment(res.data);

    } catch {

      toast.error("Unable to load department");

    }

  };

  const submit = async (data) => {

    try {

      await updateDepartment(id, data);

      toast.success("Department Updated");

      navigate("/departments");

    } catch {

      toast.error("Update Failed");

    }

  };

  if (!department)
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Edit Department

      </h1>

      <DepartmentForm

        defaultValues={department}

        onSubmit={submit}

      />

    </DashboardLayout>

  );

}