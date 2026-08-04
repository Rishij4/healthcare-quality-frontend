import { useEffect, useState } from "react";
import { getRoles } from "../../api/roleApi";

export default function RoleTable() {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {

    try {

      const res = await getRoles();

      setRoles(res.data || []);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">Role</th>

            <th>Description</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {roles.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                className="text-center py-8"
              >
                No Roles Found
              </td>

            </tr>

          ) : (

            roles.map((role) => (

              <tr
                key={role._id}
                className="border-b"
              >

                <td className="p-4 font-semibold">
                  {role.name}
                </td>

                <td>{role.description}</td>

                <td>
                  {role.isActive ? "Active" : "Inactive"}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );
}