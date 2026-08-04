import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

export default function Profile() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold">
            My Profile
          </h1>

          <div className="bg-white rounded-xl shadow mt-8 p-8">

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="font-semibold">
                  Name
                </label>

                <input
                  className="border rounded-lg p-3 w-full mt-2"
                  value="Inspector"
                  readOnly
                />

              </div>

              <div>

                <label className="font-semibold">
                  Email
                </label>

                <input
                  className="border rounded-lg p-3 w-full mt-2"
                  value="inspector@hqis.com"
                  readOnly
                />

              </div>

            </div>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Update Profile
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}