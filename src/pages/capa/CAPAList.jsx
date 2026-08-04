import DashboardLayout from "../../layouts/DashboardLayout";
import CAPATable from "../../components/capa/CAPATable";

import useCAPA from "../../hooks/useCAPA";
import { verifyCAPA } from "../../api/capaApi";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function CAPAList() {

  const {
    capas,
    loading,
    loadCAPAs,
  } = useCAPA();

  const verify = async (id) => {

    try {

      await verifyCAPA(id);

      toast.success("CAPA Verified");

      loadCAPAs();

    } catch {

      toast.error("Unable to Verify");

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
          CAPA Management
        </h1>

        <Link
          to="/capa/add"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          + Add CAPA
        </Link>

      </div>

      <CAPATable
        capas={capas}
        onVerify={verify}
      />

    </DashboardLayout>

  );

}