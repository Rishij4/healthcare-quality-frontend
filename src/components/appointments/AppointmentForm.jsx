import { useForm } from "react-hook-form";

export default function AppointmentForm({
  defaultValues = {},
  patients = [],
  clinicians = [],
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

          <label className="block font-semibold mb-2">
            Appointment Number
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("appointmentNumber", {
              required: "Appointment Number is required",
            })}
          />

          <p className="text-red-500 text-sm">
            {errors.appointmentNumber?.message}
          </p>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Patient
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("patient", {
              required: true,
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
                {patient.patientId} - {patient.firstName} {patient.lastName}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Clinician
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("clinician")}
          >

            <option value="">
              Select Clinician
            </option>

            {clinicians.map((staff) => (

              <option
                key={staff._id}
                value={staff._id}
              >
                {staff.firstName} {staff.lastName}
              </option>

            ))}

          </select>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Department
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("department")}
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

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Appointment Date
          </label>

          <input
            type="datetime-local"
            className="w-full border rounded-lg p-3"
            {...register("appointmentDate")}
          />

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Appointment Type
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("appointmentType")}
          >

            <option>Consultation</option>
            <option>Follow Up</option>
            <option>Emergency</option>
            <option>Referral</option>

          </select>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Priority
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("priority")}
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>

          </select>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Status
          </label>

          <select
            className="w-full border rounded-lg p-3"
            {...register("status")}
          >

            <option>Scheduled</option>
            <option>Checked In</option>
            <option>Consulting</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>No Show</option>

          </select>

        </div>

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Notes
        </label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3"
          {...register("notes")}
        />

      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Appointment
      </button>

    </form>

  );

}