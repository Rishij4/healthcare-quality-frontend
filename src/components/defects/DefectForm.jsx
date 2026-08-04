import { useForm } from "react-hook-form";

export default function DefectForm({
  defaultValues = {},
  onSubmit,
  inspections = [],
}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block mb-2 font-semibold">
            Defect Code
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("defectCode", {
              required: "Required",
            })}
          />

          <p className="text-red-500 text-sm">
            {errors.defectCode?.message}
          </p>

        </div>

        <div>

          <label className="block mb-2 font-semibold">
            Inspection
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("inspection")}
          >

            <option value="">
              Select Inspection
            </option>

            {inspections.map((item) => (

              <option
                key={item._id}
                value={item._id}
              >
                {item.inspectionId}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("category")}
          >

            <option>Documentation Quality</option>
            <option>Process Compliance</option>
            <option>Data Integrity/Reporting</option>
            <option>Patient Safety</option>
            <option>Clinical Audit</option>
            <option>Medication</option>
            <option>Equipment</option>
            <option>Infection Control</option>
            <option>Waiting Time</option>
            <option>Missed Follow-up</option>
            <option>Incomplete Record</option>
            <option>Scheduling Error</option>
            <option>Service Incident</option>
            <option>Other</option>

          </select>

        </div>

        <div>

          <label className="block mb-2 font-semibold">
            Severity
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("severity")}
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>

          </select>

        </div>

      </div>

      <div>

        <label className="block mb-2 font-semibold">
          Description
        </label>

        <textarea
          rows={5}
          className="w-full border rounded-lg p-3"
          {...register("description")}
        />

      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Defect
      </button>

    </form>
  );
}