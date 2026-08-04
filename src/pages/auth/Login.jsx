import AuthLayout from "../../layouts/AuthLayout";

import AuthCard from "../../components/auth/AuthCard";

import LoginForm from "../../components/auth/LoginForm";

export default function Login(){

return(

<AuthLayout>

<AuthCard title="Login">

<LoginForm/>

</AuthCard>

</AuthLayout>

);

}