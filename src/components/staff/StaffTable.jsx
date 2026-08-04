import { Link } from "react-router-dom";

export default function StaffTable({
    staff=[],
    onDelete
}){

return(

<div className="bg-white rounded-xl shadow overflow-hidden">

<table className="w-full">

<thead className="bg-blue-700 text-white">

<tr>

<th className="p-4">Employee ID</th>

<th>Name</th>

<th>Department</th>

<th>Designation</th>

<th>Shift</th>

<th>Status</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{staff.map((item)=>(

<tr
key={item._id}
className="border-b"
>

<td className="p-4">

{item.employeeId}

</td>

<td>

{item.firstName} {item.lastName}

</td>

<td>

{item.department?.name}

</td>

<td>

{item.designation}

</td>

<td>

{item.shift}

</td>

<td>

{item.status}

</td>

<td className="space-x-3">

<Link
to={`/staff/${item._id}`}
className="text-blue-600"
>

View

</Link>

<Link
to={`/staff/edit/${item._id}`}
className="text-green-600"
>

Edit

</Link>

<button
onClick={()=>onDelete(item._id)}
className="text-red-600"
>

Delete

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}