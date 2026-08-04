import DashboardLayout from "../../layouts/DashboardLayout";
import DefectTable from "../../components/defects/DefectTable";
import useDefects from "../../hooks/useDefects";
import { deleteDefect } from "../../api/defectApi";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function DefectList() {

  const {
    defects,
    loading,
    loadDefects,
  } = useDefects();

  const remove = async (id) => {

    if (!window.confirm("Delete this defect?"))
      return;

    try {

      await deleteDefect(id);

      toast.success("Defect Deleted");

      loadDefects();

    } catch {

      toast.error("Unable to delete");

    }

  };

  if (loading) {

    return (

      <DashboardLayout>

        <h2 className="text-xl font-bold">
          Loading...
        </h2>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">

          Defect Management

        </h1>

        <Link
          to="/defects/add"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
        >

          + Add Defect

        </Link>

      </div>

      <DefectTable
        defects={defects}
        onDelete={remove}
      />

    </DashboardLayout>

  );

}