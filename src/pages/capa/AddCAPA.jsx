import DashboardLayout from "../../layouts/DashboardLayout";
import CAPAForm from "../../components/capa/CAPAForm";

import { createCAPA } from "../../api/capaApi";
import { getDefects } from "../../api/defectApi";
import { getStaff } from "../../api/staffApi";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function AddCAPA() {

  const navigate = useNavigate();

  const [defects, setDefects] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const defectRes = await getDefects();
    setDefects(defectRes.data);

    const userRes = await getStaff();
    setUsers(userRes.data);

  };

  const submit = async (data) => {

    try {

      await createCAPA(data);

      toast.success("CAPA Created");

      navigate("/capa");

    } catch {

      toast.error("Unable to create CAPA");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Add CAPA
      </h1>

      <CAPAForm
        defects={defects}
        users={users}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}