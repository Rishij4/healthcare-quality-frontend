import { Link } from "react-router-dom";

export default function DepartmentTable({
  departments=[],
  onDelete,
}){

return(

<div className="bg-white rounded-xl shadow overflow-hidden">

<table className="w-full">

<thead className="bg-blue-700 text-white">

<tr>

<th className="p-4">Code</th>

<th>Name</th>

<th>Description</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{departments.length===0?

<tr>

<td
colSpan="4"
className="text-center py-8"
>

No Departments

</td>

</tr>

:

departments.map((dept)=>(

<tr
key={dept._id}
className="border-b"
>

<td className="p-4">

{dept.code}

</td>

<td>

{dept.name}

</td>

<td>

{dept.description}

</td>

<td className="space-x-3">

<Link
to={`/departments/${dept._id}`}
className="text-blue-600"
>

View

</Link>

<Link
to={`/departments/edit/${dept._id}`}
className="text-green-600"
>

Edit

</Link>

<button
onClick={()=>onDelete(dept._id)}
className="text-red-600"
>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}