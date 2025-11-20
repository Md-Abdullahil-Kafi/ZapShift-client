import React from "react";
import upload from "../../../assets/image-upload-icon.png";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const Register = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const {registerUser, signInGoogle, updateUserProfile} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  
  const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(result => {
      console.log(result.user);
      navigate(location?.state || "/")
    })
    .catch(error => console.log(error))
  }

  const onSubmit = (data) => {
    const photo = data.photo[0]
    registerUser(data.email, data.password)
    .then(result =>{
      const formData = new FormData();
      formData.append("image", photo)
      const imageAPI_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_imgbb_host_Key}`
      axios.post(`imageAPI_URL`, formData)
      .then(res => {
        const userProfile ={
          displayName: data.name,
          photoURL: res.data.data.url,
        }
        updateUserProfile(userProfile)
        .then().catch(error => console.log(error))
      })
      navigate(location?.state || "/")
    } )
    .catch(error => console.log(error))
  };

  return (
    <div className="w-[384px]">
      <div>
        <h1 className="font-bold text-4xl mb-5">Create an Account</h1>
        <p>register With ZapShift</p>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset  mt-7">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name",{required:true})}
            className="input w-full"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (<p className="text-red-600" role="alert">Name Must be required</p>)}
          <label className="label">Photo</label>
          <input type="file" className="file-input" placeholder="Your photo" {...register("photo", { required: true})}/>
          {errors.photo?.type === "required" && (<p className="text-red-600" role="alert">Photo Must be required</p>)}
          <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <label className="label">Password</label>
            <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              validate: {
                minLength: (value) =>
                  value.length >= 8 || "Password must be at least 8 characters",

                hasUppercase: (value) =>
                  /[A-Z]/.test(value) || "Password must include at least one uppercase letter",

                hasLowercase: (value) =>
                  /[a-z]/.test(value) || "Password must include at least one lowercase letter",

                hasNumber: (value) =>
                  /\d/.test(value) || "Password must include at least one number",

                hasSpecialChar: (value) =>
                  /[!@#$%^&*()_+\-={}[\]|;:"<>,.?/~`]/.test(value) ||
                  "Password must include at least one special character",
              },
            })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          <button className="btn btn-primary text-black mt-4">Register</button>
          <div>
            Already have an Account?{" "}
            <Link
              className="text-primary underline hover:text-blue-700"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
        <div className="text-center">Or</div>
        <div>
          <button onClick={handleGoogleSignIn} className="btn  mt-4 w-full">
            <FcGoogle /> Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
