import DashboardLayout from "../../layouts/DashboardLayout";
import CAPAForm from "../../components/capa/CAPAForm";

import {
  getCAPA,
  updateCAPA,
} from "../../api/capaApi";

import { getDefects } from "../../api/defectApi";
import { getStaff } from "../../api/staffApi";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

export default function EditCAPA() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [capa, setCAPA] = useState();

  const [defects, setDefects] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const capaRes = await getCAPA(id);

    setCAPA(capaRes.data);

    const defectRes = await getDefects();

    setDefects(defectRes.data);

    const userRes = await getStaff();

    setUsers(userRes.data);

  };

  const submit = async (data) => {

    await updateCAPA(id, data);

    toast.success("CAPA Updated");

    navigate("/capa");

  };

  if (!capa)
    return null;

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">

        Edit CAPA

      </h1>

      <CAPAForm
        defaultValues={capa}
        defects={defects}
        users={users}
        onSubmit={submit}
      />

    </DashboardLayout>

  );

}