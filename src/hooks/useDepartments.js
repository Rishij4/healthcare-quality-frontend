import {useEffect,useState} from "react";

import {getDepartments} from "../api/departmentApi";

import toast from "react-hot-toast";

export default function useDepartments(){

const [departments,setDepartments]=useState([]);

const [loading,setLoading]=useState(true);

const loadDepartments=async()=>{

try{

const res=await getDepartments();

setDepartments(res.data);

}

catch{

toast.error("Unable to load departments");

}

finally{

setLoading(false);

}

};

useEffect(()=>{

loadDepartments();

},[]);

return{

departments,

loading,

loadDepartments

};

}