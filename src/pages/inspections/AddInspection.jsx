import DashboardLayout from "../../layouts/DashboardLayout";
import InspectionForm from "../../components/inspections/InspectionForm";

export default function AddInspection() {

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        New Inspection
      </h1>

      <InspectionForm />

    </DashboardLayout>

  );

}