import DashboardLayout from "../../layouts/DashboardLayout";
import AppointmentTable from "../../components/appointments/AppointmentTable";

import useAppointments from "../../hooks/useAppointments";
import { deleteAppointment } from "../../api/appointmentApi";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function AppointmentList() {

  const {
    appointments,
    loading,
    loadAppointments,
  } = useAppointments();

  const remove = async (id) => {

    if (!window.confirm("Delete Appointment?"))
      return;

    try {

      await deleteAppointment(id);

      toast.success("Appointment Deleted");

      loadAppointments();

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
          Appointment Management
        </h1>

        <Link
          to="/appointments/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Appointment
        </Link>

      </div>

      <AppointmentTable
        appointments={appointments}
        onDelete={remove}
      />

    </DashboardLayout>

  );

}