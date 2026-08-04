import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../services/authService";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...registerData } = data;

      await registerUser(registerData);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* First Name */}
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="w-full border p-3 rounded"
          {...register("firstName", {
            required: "First Name is required",
          })}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border p-3 rounded"
          {...register("lastName", {
            required: "Last Name is required",
          })}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.lastName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
          {...register("phone", {
            required: "Phone Number is required",
          })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Role */}
      <div>
        <select
          className="w-full border p-3 rounded"
          {...register("role", {
            required: "Role is required",
          })}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Inspector">Inspector</option>
          <option value="Quality Engineer">Quality Engineer</option>
          <option value="Auditor">Auditor</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Clinician">Clinician</option>
          <option value="Support Staff">Support Staff</option>
        </select>

        {errors.role && (
          <p className="text-red-500 text-sm mt-1">
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") ||
              "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded font-semibold"
      >
        Register
      </button>
    </form>
  );
}