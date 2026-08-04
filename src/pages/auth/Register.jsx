import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";

export default function Register() {
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
      await axios.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex">

      <div className="w-1/2 bg-blue-700 flex items-center justify-center text-white">
        <div>
          <h1 className="text-5xl font-bold">
            Healthcare Quality
          </h1>

          <p className="mt-3 text-xl">
            Create your account
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-[450px]"
        >

          <h2 className="text-3xl font-bold mb-6">
            Register
          </h2>

          <input
            className="border p-2 w-full mb-3"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full mb-3"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />

          <select
            className="border p-2 w-full mb-5"
            name="role"
            onChange={handleChange}
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Quality Engineer</option>
            <option>Doctor</option>
            <option>Nurse</option>
          </select>

          <button
            className="bg-blue-700 text-white w-full py-2 rounded"
          >
            Register
          </button>

          <p className="text-center mt-5">
            Already have an account?

            <Link
              to="/login"
              className="text-blue-700 ml-2"
            >
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}
