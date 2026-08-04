import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getDepartment } from "../../api/departmentApi";
import toast from "react-hot-toast";

export default function DepartmentDetails() {

  const { id } = useParams();

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

  if (!department)
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );

  return (

    <DashboardLayout>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">

          Department Details

        </h1>

        <div className="space-y-6">

          <div>

            <strong>Department Name</strong>

            <p>{department.name}</p>

          </div>

          <div>

            <strong>Department Code</strong>

            <p>{department.code}</p>

          </div>

          <div>

            <strong>Description</strong>

            <p>{department.description || "-"}</p>

          </div>

          <div>

            <strong>Created At</strong>

            <p>
              {new Date(
                department.createdAt
              ).toLocaleDateString()}
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}