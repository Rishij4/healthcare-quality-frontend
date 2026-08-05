import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "Admin",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

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
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        className="w-full border p-3 rounded"
        placeholder="First Name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        className="w-full border p-3 rounded"
        placeholder="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        className="w-full border p-3 rounded"
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className="w-full border p-3 rounded"
        placeholder="Phone Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        className="w-full border p-3 rounded"
        name="role"
        value={form.role}
        onChange={handleChange}
      >
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Inspector">Inspector</option>
        <option value="Quality Engineer">Quality Engineer</option>
        <option value="Auditor">Auditor</option>
        <option value="Receptionist">Receptionist</option>
        <option value="Clinician">Clinician</option>
        <option value="Support Staff">Support Staff</option>
      </select>

      <input
        className="w-full border p-3 rounded"
        placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white p-3 rounded font-semibold"
      >
        Register
      </button>

      <p className="text-center text-sm">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-700 font-semibold ml-1"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
