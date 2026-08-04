import DashboardLayout from "../../layouts/DashboardLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getCAPA,
} from "../../api/capaApi";

export default function CAPADetails() {

  const { id } = useParams();

  const [capa, setCAPA] = useState();

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const res = await getCAPA(id);

    setCAPA(res.data);

  };

  if (!capa)
    return null;

  return (

    <DashboardLayout>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">

          CAPA Details

        </h1>

        <div className="space-y-5">

          <div>

            <strong>Defect</strong>

            <p>
              {capa.defect?.defectCode}
            </p>

          </div>

          <div>

            <strong>Corrective Action</strong>

            <p>
              {capa.correctiveAction}
            </p>

          </div>

          <div>

            <strong>Preventive Action</strong>

            <p>
              {capa.preventiveAction}
            </p>

          </div>

          <div>

            <strong>Assigned To</strong>

            <p>
              {capa.assignedTo?.firstName}{" "}
              {capa.assignedTo?.lastName}
            </p>

          </div>

          <div>

            <strong>Due Date</strong>

            <p>
              {capa.dueDate
                ? new Date(capa.dueDate).toLocaleDateString()
                : "-"}
            </p>

          </div>

          <div>

            <strong>Status</strong>

            <p>{capa.status}</p>

          </div>

          <div>

            <strong>Verified By</strong>

            <p>
              {capa.verifiedBy
                ? `${capa.verifiedBy.firstName} ${capa.verifiedBy.lastName}`
                : "-"}
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}