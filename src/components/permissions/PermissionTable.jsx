import { useEffect, useState } from "react";
import { getPermissions } from "../../api/permissionApi";

export default function PermissionTable() {

  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    loadPermissions();
  }, []);

  const loadPermissions = async () => {

    try {

      const res = await getPermissions();

      setPermissions(res.data || []);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">Permission</th>

            <th>Module</th>

            <th>Description</th>

          </tr>

        </thead>

        <tbody>

          {permissions.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                className="text-center py-8"
              >
                No Permissions Found
              </td>

            </tr>

          ) : (

            permissions.map((permission) => (

              <tr
                key={permission._id}
                className="border-b"
              >

                <td className="p-4 font-semibold">
                  {permission.name}
                </td>

                <td>
                  {permission.module}
                </td>

                <td>
                  {permission.description}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}