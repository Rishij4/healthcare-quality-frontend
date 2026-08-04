import DashboardLayout from "../../layouts/DashboardLayout";
import DepartmentTable from "../../components/departments/DepartmentTable";
import useDepartments from "../../hooks/useDepartments";
import {deleteDepartment} from "../../api/departmentApi";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";

export default function DepartmentList(){

const{
departments,
loading,
loadDepartments
}=useDepartments();

const remove=async(id)=>{

if(!window.confirm("Delete Department?"))
return;

await deleteDepartment(id);

toast.success("Deleted");

loadDepartments();

};

if(loading)
return(
<DashboardLayout>
Loading...
</DashboardLayout>
);

return(

<DashboardLayout>

<div className="flex justify-between items-center mb-8">

<h1 className="text-3xl font-bold">

Departments

</h1>

<Link
to="/departments/add"
className="bg-blue-600 text-white px-5 py-3 rounded-lg"
>

+ Add Department

</Link>

</div>

<DepartmentTable

departments={departments}

onDelete={remove}

/>

</DashboardLayout>

);

}