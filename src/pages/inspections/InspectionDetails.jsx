import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getInspection } from "../../api/inspectionApi";
import { analyzeInspection } from "../../api/aiApi";
import toast from "react-hot-toast";

export default function InspectionDetails() {
  const { id } = useParams();

  const [inspection, setInspection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInspection();
  }, []);

  const loadInspection = async () => {
    try {
      const res = await getInspection(id);
      setInspection(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load inspection");
    } finally {
      setLoading(false);
    }
  };

  const runAI = async () => {
    try {
      await analyzeInspection(id);

      await loadInspection();

      toast.success("AI Analysis Completed");
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
          "AI Analysis Failed"
      );
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

  if (!inspection) {
    return (
      <DashboardLayout>
        <h2 className="text-xl font-bold text-red-600">
          Inspection Not Found
        </h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            Inspection Details
          </h1>

          <button
            onClick={runAI}
            disabled={
              inspection.status ===
              "Pending Review"
            }
            className={`px-5 py-3 rounded-lg text-white ${
              inspection.status ===
              "Pending Review"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {inspection.status ===
            "Pending Review"
              ? "AI Completed"
              : "Run AI Analysis"}
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <strong>Inspection ID</strong>
            <p>{inspection.inspectionId}</p>
          </div>

          <div>
            <strong>Patient</strong>
            <p>
              {inspection.patient?.firstName}{" "}
              {inspection.patient?.lastName}
            </p>
          </div>

          <div>
            <strong>Department</strong>
            <p>{inspection.department?.name}</p>
          </div>

          <div>
            <strong>Inspector</strong>
            <p>
              {inspection.inspector?.firstName}{" "}
              {inspection.inspector?.lastName}
            </p>
          </div>

          <div>
            <strong>Inspection Type</strong>
            <p>{inspection.inspectionType}</p>
          </div>

          <div>
            <strong>Priority</strong>
            <p>{inspection.priority}</p>
          </div>

          <div>
            <strong>Status</strong>
            <p>{inspection.status}</p>
          </div>

          <div>
            <strong>Date</strong>
            <p>
              {new Date(
                inspection.inspectionDate
              ).toLocaleDateString()}
            </p>
          </div>

        </div>

        <hr className="my-8" />

        <div className="mb-6">

          <h2 className="text-xl font-bold mb-3">
            Findings
          </h2>

          <p>{inspection.findings}</p>

        </div>

        <div className="mb-6">

          <h2 className="text-xl font-bold mb-3">
            Recommendation
          </h2>

          <p>{inspection.recommendation}</p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div>

            <h2 className="font-bold">
              AI Summary
            </h2>

            <p>{inspection.aiSummary || "-"}</p>

          </div>

          <div>

            <h2 className="font-bold">
              AI Risk Level
            </h2>

            <p>{inspection.aiRiskLevel || "-"}</p>

          </div>

          <div>

            <h2 className="font-bold">
              AI Score
            </h2>

            <p>
              {inspection.aiScore || 0} / 100
            </p>

          </div>

        </div>

        <hr className="my-8" />

        <div className="mb-8">

          <h2 className="text-xl font-bold mb-3">
            Root Causes
          </h2>

          <ul className="list-disc ml-6">

            {inspection.rootCauses?.length ? (

              inspection.rootCauses.map(
                (item, index) => (
                  <li key={index}>
                    {item.cause}
                  </li>
                )
              )

            ) : (

              <li>No Root Causes</li>

            )}

          </ul>

        </div>

        <div className="mb-8">

          <h2 className="text-xl font-bold mb-3">
            Corrective Actions
          </h2>

          <ul className="list-disc ml-6">

            {inspection.correctiveActions?.length ? (

              inspection.correctiveActions.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )

            ) : (

              <li>No Corrective Actions</li>

            )}

          </ul>

        </div>

        <div className="mb-8">

          <h2 className="text-xl font-bold mb-3">
            Preventive Actions
          </h2>

          <ul className="list-disc ml-6">

            {inspection.preventiveActions?.length ? (

              inspection.preventiveActions.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )

            ) : (

              <li>No Preventive Actions</li>

            )}

          </ul>

        </div>

        <div>

          <h2 className="text-xl font-bold mb-4">
            AI Detected Defects
          </h2>

          <table className="w-full border">

            <thead className="bg-gray-100">

              <tr>

                <th className="border p-2">
                  Category
                </th>

                <th className="border p-2">
                  Severity
                </th>

                <th className="border p-2">
                  Description
                </th>

              </tr>

            </thead>

            <tbody>

              {inspection.defects?.length ? (

                inspection.defects.map(
                  (defect) => (

                    <tr key={defect._id}>

                      <td className="border p-2">
                        {defect.category}
                      </td>

                      <td className="border p-2">
                        {defect.severity}
                      </td>

                      <td className="border p-2">
                        {defect.description}
                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="3"
                    className="border p-4 text-center"
                  >
                    No defects detected
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}