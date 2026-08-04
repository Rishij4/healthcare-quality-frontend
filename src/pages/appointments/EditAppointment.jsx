import DashboardLayout from "../../layouts/DashboardLayout";
import AppointmentForm from "../../components/appointments/AppointmentForm";

import {
  getAppointment,
  updateAppointment,
} from "../../api/appointmentApi";

import { getPatients } from "../../api/patientApi";
import { getStaff } from "../../api/staffApi";
import { getDepartments } from "../../api/departmentApi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

export default function EditAppointment() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [appointment, setAppointment] = useState();

  const [patients, setPatients] = useState([]);
  const [clinicians, setClinicians] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const a = await getAppointment(id);
    setAppointment(a.data);

    const p = await getPatients();
    setPatients(p.data);

    const s = await getStaff();
    setClinicians(s.data);

    const d = await getDepartments();
    setDepartments(d.data);

  };

  const submit = async (data) => {

    await updateAppointment(id, data);

    toast.success("Appointment Updated");

    navigate("/appointments");

  };

  if (!appointment)
    return null;

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Edit Appointment
      </h1>

      <AppointmentForm
        defaultValues={appointment}
        patients={patients}
        clinicians={clinicians}
        departments={departments}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}