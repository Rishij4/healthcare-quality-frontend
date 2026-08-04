import { Link } from "react-router-dom";

export default function InspectionTable({ inspections = [] }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-4">Inspection ID</th>
            <th>Patient</th>
            <th>Department</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {inspections.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                className="text-center py-8 text-gray-500"
              >
                No inspections found
              </td>

            </tr>

          ) : (

            inspections.map((inspection) => (

              <tr
                key={inspection._id}
                className="border-b"
              >

                <td className="p-4">
                  {inspection.inspectionId}
                </td>

                <td>
                  {inspection.patient?.firstName}{" "}
                  {inspection.patient?.lastName}
                </td>

                <td>
                  {inspection.department?.name}
                </td>

                <td>
                  {inspection.inspectionType}
                </td>

                <td>
                  {inspection.status}
                </td>

                <td>
                  {new Date(
                    inspection.inspectionDate
                  ).toLocaleDateString()}
                </td>

                <td>

                  <Link
                    to={`/inspections/${inspection._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}