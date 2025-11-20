import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {register, handleSubmit, formState:{errors}}=useForm()
  const {signInUser, signInGoogle} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

   const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(result => {
      navigate(location?.state || "/") ;     
    })
    .catch(error => console.log(error))
  }

  const handleLogIn = (data)=>{
    signInUser(data.email, data.password)
    .then(result => {
      console.log(result.user)
      navigate(location?.state || "/") ;     
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="w-[384px]">
      <div>
        <h1 className="font-bold text-4xl mb-5">Welcome Back</h1>
        <p>Login With ZapShift</p>
      </div>

      <div>
        <form onSubmit={handleSubmit(handleLogIn)} className="fieldset mt-5">
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
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary text-black mt-4">Login</button>
        </form>
        <div>
          Don't have any Account?{" "}
          <Link
            className="text-primary underline hover:text-blue-700"
            to={"/register"}
            state={location?.state}
          >
            Register
          </Link>
        </div>
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

export default Login;
