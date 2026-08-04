import { useForm } from "react-hook-form";

export default function CAPAForm({
  defaultValues = {},
  defects = [],
  users = [],
  onSubmit,
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

          <label className="block font-semibold mb-2">
            Defect
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("defect", {
              required: "Defect is required",
            })}
          >

            <option value="">
              Select Defect
            </option>

            {defects.map((item) => (

              <option
                key={item._id}
                value={item._id}
              >
                {item.defectCode}
              </option>

            ))}

          </select>

          <p className="text-red-500 text-sm">
            {errors.defect?.message}
          </p>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Assigned To
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("assignedTo")}
          >

            <option value="">
              Select User
            </option>

            {users.map((user) => (

              <option
                key={user._id}
                value={user._id}
              >
                {user.firstName} {user.lastName}
              </option>

            ))}

          </select>

        </div>

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Corrective Action
        </label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3"
          {...register("correctiveAction", {
            required: "Corrective Action is required",
          })}
        />

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Preventive Action
        </label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3"
          {...register("preventiveAction")}
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block font-semibold mb-2">
            Due Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            {...register("dueDate")}
          />

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Status
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("status")}
          >

            <option>Open</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Verified</option>

          </select>

        </div>

      </div>

      <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Save CAPA
      </button>

    </form>

  );

}