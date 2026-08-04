import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  getPatients,
  deletePatient,
} from "../../api/patientApi";

import {
  setPatients,
} from "../../redux/slices/patientSlice";

export default function PatientTable() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { patients } = useSelector(
    (state) => state.patients
  );

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const res = await getPatients();

      dispatch(setPatients(res.data));
    } catch (err) {
      console.error(err);
      toast.error("Unable to load patients");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      await deletePatient(id);

      toast.success("Patient Deleted Successfully");

      loadPatients();
    } catch (err) {
      console.error(err);

      toast.error("Delete Failed");
    }
  };

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      {/* Search */}

      <div className="p-5 border-b">

        <input
          type="text"
          placeholder="🔍 Search Patient..."
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Patient ID
              </th>

              <th className="text-left">
                Name
              </th>

              <th className="text-left">
                Gender
              </th>

              <th className="text-left">
                Age
              </th>

              <th className="text-left">
                Phone
              </th>

              <th className="text-left">
                Blood Group
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredPatients.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500 text-lg"
                >

                  No Patients Found

                </td>

              </tr>

            ) : (

              filteredPatients.map((patient) => (

                <tr
                  key={patient._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-4">

                    {patient.patientId}

                  </td>

                  <td>

                    {patient.firstName} {patient.lastName}

                  </td>

                  <td>

                    {patient.gender}

                  </td>

                  <td>

                    {patient.age}

                  </td>

                  <td>

                    {patient.phone}

                  </td>

                  <td>

                    {patient.bloodGroup || "-"}

                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        patient.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {patient.status}
                    </span>

                  </td>

                  <td className="text-center">

  <Link
    to={`/patients/view/${patient._id}`}
    className="text-green-600 hover:text-green-800 font-medium mr-4"
  >
    View
  </Link>

  <Link
    to={`/patients/edit/${patient._id}`}
    className="text-blue-600 hover:text-blue-800 font-medium mr-4"
  >
    Edit
  </Link>

  <button
    onClick={() => handleDelete(patient._id)}
    className="text-red-600 hover:text-red-800 font-medium"
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

    </div>
  );
}