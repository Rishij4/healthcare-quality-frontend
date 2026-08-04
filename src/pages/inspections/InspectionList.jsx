import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import InspectionTable from "../../components/inspections/InspectionTable";

import { getInspections } from "../../api/inspectionApi";

export default function InspectionList() {

  const [inspections, setInspections] = useState([]);

  useEffect(() => {

    loadInspections();

  }, []);

  const loadInspections = async () => {

    try {

      const res = await getInspections();

      setInspections(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">

          Inspection Management

        </h1>

        <Link
          to="/inspections/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + New Inspection
        </Link>

      </div>

      <InspectionTable inspections={inspections} />

    </DashboardLayout>

  );

}