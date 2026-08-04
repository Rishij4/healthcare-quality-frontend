import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAppointment } from "../../api/appointmentApi";

export default function AppointmentDetails() {

  const { id } = useParams();

  const [appointment, setAppointment] = useState();

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const res = await getAppointment(id);

    setAppointment(res.data);

  };

  if (!appointment)
    return null;

  return (

    <DashboardLayout>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Appointment Details
        </h1>

        <div className="space-y-5">

          <div>

            <strong>Appointment Number</strong>

            <p>{appointment.appointmentNumber}</p>

          </div>

          <div>

            <strong>Patient</strong>

            <p>
              {appointment.patient?.firstName} {appointment.patient?.lastName}
            </p>

          </div>

          <div>

            <strong>Clinician</strong>

            <p>
              {appointment.clinician?.firstName} {appointment.clinician?.lastName}
            </p>

          </div>

          <div>

            <strong>Department</strong>

            <p>{appointment.department?.name}</p>

          </div>

          <div>

            <strong>Date</strong>

            <p>{new Date(appointment.appointmentDate).toLocaleString()}</p>

          </div>

          <div>

            <strong>Status</strong>

            <p>{appointment.status}</p>

          </div>

          <div>

            <strong>Priority</strong>

            <p>{appointment.priority}</p>

          </div>

          <div>

            <strong>Notes</strong>

            <p>{appointment.notes}</p>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}