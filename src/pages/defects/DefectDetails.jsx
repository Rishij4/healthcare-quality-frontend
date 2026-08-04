import DashboardLayout from "../../layouts/DashboardLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getDefect,
} from "../../api/defectApi";

export default function DefectDetails() {

  const { id } = useParams();

  const [defect, setDefect] = useState();

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const res = await getDefect(id);

    setDefect(res.data);

  };

  if (!defect)
    return null;

  return (

    <DashboardLayout>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">

          Defect Details

        </h1>

        <div className="space-y-5">

          <div>

            <strong>Code</strong>

            <p>{defect.defectCode}</p>

          </div>

          <div>

            <strong>Category</strong>

            <p>{defect.category}</p>

          </div>

          <div>

            <strong>Severity</strong>

            <p>{defect.severity}</p>

          </div>

          <div>

            <strong>Status</strong>

            <p>{defect.status}</p>

          </div>

          <div>

            <strong>Description</strong>

            <p>{defect.description}</p>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}