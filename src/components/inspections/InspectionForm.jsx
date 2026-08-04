import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createInspection } from "../../api/inspectionApi";
import { getPatients } from "../../api/patientApi";
import { getDepartments } from "../../api/departmentApi";

export default function InspectionForm() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [departments, setDepartments] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadPatients();
    loadDepartments();
  }, []);

  const loadPatients = async () => {
  try {
    const res = await getPatients();

    console.log("Patients:", res);

    setPatients(res.data || []);

  } catch (err) {
    console.log(err);
  }
};

  const loadDepartments = async () => {
  try {
    const res = await getDepartments();

    console.log("Departments:", res);

    setDepartments(res.data || []);

  } catch (err) {
    console.log(err);
  }
};

  const onSubmit = async (data) => {
    try {
      await createInspection(data);

      toast.success("Inspection Created Successfully");

      navigate("/inspections");
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
          "Unable to create inspection"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">

        {/* Inspection ID */}

        <div>
          <label className="block font-semibold mb-2">
            Inspection ID
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("inspectionId", {
              required: "Inspection ID is required",
            })}
          />

          <p className="text-red-500 text-sm">
            {errors.inspectionId?.message}
          </p>
        </div>

        {/* Patient */}

        <div>
          <label className="block font-semibold mb-2">
            Patient
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("patient", {
              required: "Patient is required",
            })}
          >
            <option value="">
              Select Patient
            </option>

            {patients.map((patient) => (
              <option
                key={patient._id}
                value={patient._id}
              >
                {patient.patientId} - {patient.firstName}{" "}
                {patient.lastName}
              </option>
            ))}
          </select>

          <p className="text-red-500 text-sm">
            {errors.patient?.message}
          </p>
        </div>

        {/* Department */}

        <div>
          <label className="block font-semibold mb-2">
            Department
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("department", {
              required: "Department is required",
            })}
          >
            <option value="">
              Select Department
            </option>

            {departments.map((department) => (
              <option
                key={department._id}
                value={department._id}
              >
                {department.name}
              </option>
            ))}
          </select>

          <p className="text-red-500 text-sm">
            {errors.department?.message}
          </p>
        </div>

        {/* Inspection Type */}

        <div>
          <label className="block font-semibold mb-2">
            Inspection Type
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("inspectionType", {
              required: "Inspection Type is required",
            })}
          >
            <option value="">
              Select Type
            </option>

            <option value="Patient Safety">
              Patient Safety
            </option>

            <option value="Clinical Audit">
              Clinical Audit
            </option>

            <option value="Infection Control">
              Infection Control
            </option>

            <option value="Equipment">
              Equipment
            </option>

            <option value="Medication">
              Medication
            </option>
          </select>

          <p className="text-red-500 text-sm">
            {errors.inspectionType?.message}
          </p>
        </div>

        {/* Priority */}

        <div>
          <label className="block font-semibold mb-2">
            Priority
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("priority")}
          >
            <option value="Low">Low</option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

            <option value="Critical">
              Critical
            </option>
          </select>
        </div>

      </div>

      {/* Findings */}

      <div>
        <label className="block font-semibold mb-2">
          Findings
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-lg p-3"
          {...register("findings")}
        />
      </div>

      {/* Recommendation */}

      <div>
        <label className="block font-semibold mb-2">
          Recommendation
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-lg p-3"
          {...register("recommendation")}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Create Inspection
      </button>
    </form>
  );
}