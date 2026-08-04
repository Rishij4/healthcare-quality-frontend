import DashboardLayout from "../../layouts/DashboardLayout";
import DefectForm from "../../components/defects/DefectForm";

import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  getDefect,
  updateDefect,
} from "../../api/defectApi";

import {
  getInspections,
} from "../../api/inspectionApi";

import toast from "react-hot-toast";

export default function EditDefect() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [defect, setDefect] = useState();

  const [inspections, setInspections] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const d = await getDefect(id);

    setDefect(d.data);

    const i = await getInspections();

    setInspections(i.data);

  };

  const submit = async (data) => {

    await updateDefect(id, data);

    toast.success("Updated");

    navigate("/defects");

  };

  if (!defect)
    return null;

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Edit Defect

      </h1>

      <DefectForm
        defaultValues={defect}
        inspections={inspections}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}