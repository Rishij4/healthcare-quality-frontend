import DashboardLayout from "../../layouts/DashboardLayout";
import PatientForm from "../../components/patients/PatientForm";

export default function AddPatient() {

  return (

    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        Add Patient
      </h1>

      <PatientForm />

    </DashboardLayout>

  );

}