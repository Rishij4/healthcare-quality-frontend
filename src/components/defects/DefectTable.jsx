import { Link } from "react-router-dom";

export default function DefectTable({
  defects = [],
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-red-600 text-white">

          <tr>
            <th className="p-4">Code</th>
            <th>Category</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Inspection</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {defects.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >
                No Defects Found
              </td>

            </tr>

          ) : (

            defects.map((defect) => (

              <tr
                key={defect._id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {defect.defectCode}
                </td>

                <td>
                  {defect.category}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      defect.severity === "Critical"
                        ? "bg-red-600"
                        : defect.severity === "High"
                        ? "bg-orange-500"
                        : defect.severity === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {defect.severity}
                  </span>

                </td>

                <td>
                  {defect.status}
                </td>

                <td>
                  {defect.inspection?.inspectionId}
                </td>

                <td className="space-x-3">

  <Link
    to={`/defects/${defect._id}`}
    className="text-blue-600 hover:underline"
  >
    View
  </Link>

  <Link
    to={`/defects/edit/${defect._id}`}
    className="text-green-600 hover:underline"
  >
    Edit
  </Link>

  <button
    onClick={() => onDelete(defect._id)}
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