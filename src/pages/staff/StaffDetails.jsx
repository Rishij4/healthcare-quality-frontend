import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getStaffById } from "../../api/staffApi";

export default function StaffDetails() {

  const { id } = useParams();

  const [staff, setStaff] = useState();

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const res = await getStaffById(id);

    setStaff(res.data);

  };

  if (!staff)
    return null;

  return (

    <DashboardLayout>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">

          Staff Details

        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <strong>Employee ID</strong>
            <p>{staff.employeeId}</p>
          </div>

          <div>
            <strong>Name</strong>
            <p>{staff.firstName} {staff.lastName}</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>{staff.email}</p>
          </div>

          <div>
            <strong>Phone</strong>
            <p>{staff.phone}</p>
          </div>

          <div>
            <strong>Department</strong>
            <p>{staff.department?.name}</p>
          </div>

          <div>
            <strong>Designation</strong>
            <p>{staff.designation}</p>
          </div>

          <div>
            <strong>Qualification</strong>
            <p>{staff.qualification}</p>
          </div>

          <div>
            <strong>Specialization</strong>
            <p>{staff.specialization}</p>
          </div>

          <div>
            <strong>Joining Date</strong>
            <p>
              {staff.joiningDate
                ? new Date(staff.joiningDate).toLocaleDateString()
                : "-"}
            </p>
          </div>

          <div>
            <strong>Shift</strong>
            <p>{staff.shift}</p>
          </div>

          <div>
            <strong>Salary</strong>
            <p>₹ {staff.salary}</p>
          </div>

          <div>
            <strong>Status</strong>
            <p>{staff.status}</p>
          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}