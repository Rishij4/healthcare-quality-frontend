import { Link } from "react-router-dom";

export default function CAPATable({
  capas = [],
  onVerify,
}) {

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-600 text-white">

          <tr>

            <th className="p-4">
              CAPA
            </th>

            <th>
              Defect
            </th>

            <th>
              Owner
            </th>

            <th>
              Due Date
            </th>

            <th>
              Status
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {capas.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="text-center py-8"
              >

                No CAPA Records

              </td>

            </tr>

          ) : (

            capas.map((item) => (

              <tr
                key={item._id}
                className="border-b"
              >

                <td className="p-4">
                  {item.capaNumber}
                </td>

                <td>
                  {item.defect?.defectCode}
                </td>

                <td>
                  {item.owner?.firstName}
                </td>

                <td>
                  {new Date(
                    item.targetDate
                  ).toLocaleDateString()}
                </td>

                <td>
                  {item.status}
                </td>

                <td className="space-x-3">

                  <Link
                    to={`/capa/${item._id}`}
                    className="text-blue-600"
                  >
                    View
                  </Link>

                  <Link
                    to={`/capa/edit/${item._id}`}
                    className="text-green-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onVerify(item._id)}
                    className="text-purple-600"
                  >
                    Verify
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