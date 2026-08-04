import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { useDispatch } from "react-redux";

import { loginSuccess } from "../../redux/slices/authSlice";

import { loginUser } from "../../services/authService";

export default function LoginForm(){

const{

register,

handleSubmit,

formState:{errors}

}=useForm();

const navigate=useNavigate();

const dispatch=useDispatch();

const onSubmit = async (data) => {
  try {
    const res = await loginUser(data);

    console.log("LOGIN RESPONSE");
    console.log(res);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    dispatch(
      loginSuccess({
        token: res.data.token,
        user: res.data.user,
      })
    );

    toast.success("Login Successful");
    navigate("/dashboard");

  } catch (err) {
    console.log("LOGIN ERROR");
    console.log(err.response?.data);

    toast.error("Invalid Credentials");
  }
};

return(

<form

onSubmit={handleSubmit(onSubmit)}

className="space-y-5"

>

<input

type="email"

placeholder="Email"

className="w-full border p-3 rounded"

{...register("email",{

required:true

})}

/>

<input

type="password"

placeholder="Password"

className="w-full border p-3 rounded"

{...register("password",{

required:true

})}

/>

<button

className="w-full bg-blue-700 text-white p-3 rounded"

>

Login

</button>

</form>

);

}