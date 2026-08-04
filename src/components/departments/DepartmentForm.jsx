import { useForm } from "react-hook-form";

export default function DepartmentForm({
  defaultValues = {},
  onSubmit,
}) {

  const {
    register,
    handleSubmit,
    formState:{errors}
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
            Department Name
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("name",{
              required:"Department name required"
            })}
          />

          <p className="text-red-500 text-sm">
            {errors.name?.message}
          </p>

        </div>

        <div>

          <label className="font-semibold block mb-2">
            Department Code
          </label>

          <input
            className="w-full border rounded-lg p-3"
            {...register("code",{
              required:"Department code required"
            })}
          />

        </div>

      </div>

      <div>

        <label className="font-semibold block mb-2">
          Description
        </label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3"
          {...register("description")}
        />

      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save Department
      </button>

    </form>

  );

}