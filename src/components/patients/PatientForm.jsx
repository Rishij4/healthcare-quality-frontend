import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  createPatient,
  updatePatient,
  getPatient,
} from "../../api/patientApi";

export default function PatientForm() {

    const navigate = useNavigate();
const { id } = useParams();

    const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    status: "Active",
  },
});
useEffect(() => {

  if (!id) return;

  const loadPatient = async () => {

    try {

      const res = await getPatient(id);

      reset(res.data);

    } catch {

      toast.error("Unable to load patient");

    }

  };

  loadPatient();

}, [id, reset]);

    const onSubmit = async (data) => {

  try {

    data.age = Number(data.age);

    if (id) {

      await updatePatient(id, data);

      toast.success("Patient Updated Successfully");

    } else {

      await createPatient(data);

      toast.success("Patient Added Successfully");

    }

    navigate("/patients");

  } catch (err) {

    toast.error(

      err.response?.data?.message ||

      "Operation Failed"

    );

  }

};

    return (

        <form

            onSubmit={handleSubmit(onSubmit)}

            className="bg-white shadow rounded-xl p-8 space-y-6"

        >

            <div className="grid md:grid-cols-2 gap-6">

                <div>

                    <label className="font-medium">
                        Patient ID
                    </label>

                    <input

                        className="w-full border rounded p-3"

                        {...register("patientId", {

                            required: "Patient ID Required"

                        })}

                    />

                    <p className="text-red-500 text-sm">

                        {errors.patientId?.message}

                    </p>

                </div>

                <div>

                    <label className="font-medium">

                        First Name

                    </label>

                    <input

                        className="w-full border rounded p-3"

                        {...register("firstName", {

                            required: "First Name Required"

                        })}

                    />

                    <p className="text-red-500 text-sm">

                        {errors.firstName?.message}

                    </p>

                </div>

                <div>

                    <label className="font-medium">

                        Last Name

                    </label>

                    <input

                        className="w-full border rounded p-3"

                        {...register("lastName", {

                            required: "Last Name Required"

                        })}

                    />

                    <p className="text-red-500 text-sm">

                        {errors.lastName?.message}

                    </p>

                </div>

                <div>

                    <label className="font-medium">

                        Gender

                    </label>

                    <select

                        className="w-full border rounded p-3"

                        {...register("gender")}

                    >

                        <option>Male</option>

                        <option>Female</option>

                        <option>Other</option>

                    </select>

                </div>

                <div>

                    <label className="font-medium">

                        Age

                    </label>

                    <input

                        type="number"

                        className="w-full border rounded p-3"

                        {...register("age", {

                            required: "Age Required"

                        })}

                    />

                </div>

                <div>

                    <label className="font-medium">

                        Date Of Birth

                    </label>

                    <input

                        type="date"

                        className="w-full border rounded p-3"

                        {...register("dateOfBirth")}

                    />

                </div>

                <div>

                    <label className="font-medium">

                        Blood Group

                    </label>

                    <select

                        className="w-full border rounded p-3"

                        {...register("bloodGroup")}

                    >

                        <option value="">Select</option>

                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>

                    </select>

                </div>

                <div>

                    <label className="font-medium">

                        Phone

                    </label>

                    <input

                        className="w-full border rounded p-3"

                        {...register("phone", {

                            required: "Phone Required"

                        })}

                    />

                </div>

                <div>

                    <label className="font-medium">

                        Email

                    </label>

                    <input

                        type="email"

                        className="w-full border rounded p-3"

                        {...register("email")}

                    />

                </div>

                <div>

                    <label className="font-medium">

                        Status

                    </label>

                    <select

                        className="w-full border rounded p-3"

                        {...register("status")}

                    >

                        <option>Active</option>

                        <option>Inactive</option>

                    </select>

                </div>

            </div>

            <div>

                <label className="font-medium">

                    Address

                </label>

                <textarea

                    rows="3"

                    className="w-full border rounded p-3"

                    {...register("address")}

                />

            </div>

            <div>

                <label className="font-medium">

                    Emergency Contact Name

                </label>

                <input

                    className="w-full border rounded p-3"

                    {...register("emergencyContactName")}

                />

            </div>

            <div>

                <label className="font-medium">

                    Emergency Contact Phone

                </label>

                <input

                    className="w-full border rounded p-3"

                    {...register("emergencyContactPhone")}

                />

            </div>

            <div>

                <label className="font-medium">

                    Medical History

                </label>

                <textarea

                    rows="3"

                    className="w-full border rounded p-3"

                    {...register("medicalHistory")}

                />

            </div>

            <div>

                <label className="font-medium">

                    Allergies

                </label>

                <textarea

                    rows="3"

                    className="w-full border rounded p-3"

                    {...register("allergies")}

                />

            </div>

            <div>

                <label className="font-medium">

                    Current Medications

                </label>

                <textarea

                    rows="3"

                    className="w-full border rounded p-3"

                    {...register("currentMedications")}

                />

            </div>

            <button

                type="submit"

                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"

            >

                {id ? "Update Patient" : "Save Patient"}

            </button>

        </form>

    );

}