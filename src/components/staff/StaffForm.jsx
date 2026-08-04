import { useForm } from "react-hook-form";

export default function StaffForm({
  defaultValues = {},
  departments = [],
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
          <label className="font-semibold block mb-2">
            Employee ID
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("employeeId", {
              required: "Required",
            })}
          />

          <p className="text-red-500 text-sm">
            {errors.employeeId?.message}
          </p>

        </div>

        <div>

          <label className="font-semibold block mb-2">
            First Name
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("firstName")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Last Name
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("lastName")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Email
          </label>

          <input
            type="email"
            className="w-full border rounded-lg p-3"
            {...register("email")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Phone
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("phone")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Department
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("department")}
          >

            <option value="">
              Select Department
            </option>

            {departments.map((dept) => (

              <option
                key={dept._id}
                value={dept._id}
              >
                {dept.name}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Designation
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("designation")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Qualification
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("qualification")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Specialization
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("specialization")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Joining Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            {...register("joiningDate")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Shift
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("shift")}
          >

            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>

          </select>

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Salary
          </label>

          <input
            type="number"
            className="w-full border rounded-lg p-3"
            {...register("salary")}
          />

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Status
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("status")}
          >

            <option>Active</option>
            <option>Inactive</option>
            <option>On Leave</option>

          </select>

        </div>

      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Staff
      </button>

    </form>

  );

}