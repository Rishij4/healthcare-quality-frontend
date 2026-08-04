import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

export default function Notifications() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <div className="bg-white shadow rounded-xl mt-8">

            <div className="p-5 border-b">

              AI Analysis Completed

            </div>

            <div className="p-5 border-b">

              Inspection Assigned

            </div>

            <div className="p-5">

              No More Notifications

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}