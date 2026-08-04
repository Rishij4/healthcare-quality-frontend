import { Link } from "react-router-dom";

export default function AppointmentTable({
  appointments = [],
  onDelete,
}) {

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">Patient</th>

            <th>Doctor</th>

            <th>Department</th>

            <th>Date</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {appointments.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center py-8"
              >

                No Appointments Found

              </td>

            </tr>

          ) : (

            appointments.map((appointment) => (

              <tr
                key={appointment._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {appointment.patient?.firstName}{" "}
                  {appointment.patient?.lastName}
                </td>

                <td>
                  {appointment.doctor?.firstName}{" "}
                  {appointment.doctor?.lastName}
                </td>

                <td>
                  {appointment.department?.name}
                </td>

                <td>
                  {new Date(
                    appointment.appointmentDate
                  ).toLocaleDateString()}
                </td>

                <td>
                  {appointment.status}
                </td>

                <td className="space-x-3">

                  <Link
                    to={`/appointments/${appointment._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>

                  <Link
                    to={`/appointments/edit/${appointment._id}`}
                    className="text-green-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onDelete(appointment._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}