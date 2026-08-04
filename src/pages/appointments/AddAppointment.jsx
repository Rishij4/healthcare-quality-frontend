import DashboardLayout from "../../layouts/DashboardLayout";
import AppointmentForm from "../../components/appointments/AppointmentForm";

import { createAppointment } from "../../api/appointmentApi";
import { getPatients } from "../../api/patientApi";
import { getStaff } from "../../api/staffApi";
import { getDepartments } from "../../api/departmentApi";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function AddAppointment() {

  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [clinicians, setClinicians] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const p = await getPatients();
    setPatients(p.data);

    const s = await getStaff();
    setClinicians(s.data);

    const d = await getDepartments();
    setDepartments(d.data);

  };

  const submit = async (data) => {

    try {

      await createAppointment(data);

      toast.success("Appointment Created");

      navigate("/appointments");

    } catch {

      toast.error("Unable to create appointment");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Add Appointment
      </h1>

      <AppointmentForm
        patients={patients}
        clinicians={clinicians}
        departments={departments}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}