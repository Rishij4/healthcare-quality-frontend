import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getPatient } from "../../api/patientApi";
import toast from "react-hot-toast";

export default function PatientDetails() {
  const { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    loadPatient();
  }, []);

  const loadPatient = async () => {
    try {
      const res = await getPatient(id);

      setPatient(res.data);

    } catch (err) {
      console.log(err);

      toast.error("Unable to load patient");
    }
  };

  if (!patient) {

    return (
      <DashboardLayout>

        <p>Loading...</p>

      </DashboardLayout>
    );

  }

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Patient Details
      </h1>

      <div className="bg-white shadow rounded-xl p-8 grid md:grid-cols-2 gap-6">

        <div>

          <strong>Patient ID</strong>

          <p>{patient.patientId}</p>

        </div>

        <div>

          <strong>Name</strong>

          <p>
            {patient.firstName} {patient.lastName}
          </p>

        </div>

        <div>

          <strong>Gender</strong>

          <p>{patient.gender}</p>

        </div>

        <div>

          <strong>Age</strong>

          <p>{patient.age}</p>

        </div>

        <div>

          <strong>Phone</strong>

          <p>{patient.phone}</p>

        </div>

        <div>

          <strong>Email</strong>

          <p>{patient.email}</p>

        </div>

        <div>

          <strong>Blood Group</strong>

          <p>{patient.bloodGroup}</p>

        </div>

        <div>

          <strong>Status</strong>

          <p>{patient.status}</p>

        </div>

        <div className="md:col-span-2">

          <strong>Address</strong>

          <p>{patient.address}</p>

        </div>

        <div className="md:col-span-2">

          <strong>Medical History</strong>

          <p>{patient.medicalHistory}</p>

        </div>

      </div>

    </DashboardLayout>
  );
}