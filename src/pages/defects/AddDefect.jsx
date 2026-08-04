import DashboardLayout from "../../layouts/DashboardLayout";
import DefectForm from "../../components/defects/DefectForm";

import { createDefect } from "../../api/defectApi";
import { getInspections } from "../../api/inspectionApi";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function AddDefect() {

  const navigate = useNavigate();

  const [inspections, setInspections] = useState([]);

  useEffect(() => {

    loadInspections();

  }, []);

  const loadInspections = async () => {

    const res = await getInspections();

    setInspections(res.data);

  };

  const submit = async (data) => {

    try {

      await createDefect(data);

      toast.success("Defect Created");

      navigate("/defects");

    } catch {

      toast.error("Unable to create defect");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Add Defect

      </h1>

      <DefectForm
        inspections={inspections}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}