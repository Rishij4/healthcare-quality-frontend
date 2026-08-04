import AuthLayout from "../../layouts/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthLayout>
      <AuthCard title="Register">
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}