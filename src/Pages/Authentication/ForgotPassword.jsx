import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function ForgotPassword() {
    const {forgotPassword}=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot Password email:", data.email);
    forgotPassword(data.email)
      .then(() => {
    alert(`password sent ${data.email} successfully!`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div className="max-w-sm mx-auto mt-14 p-6">
      <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
      <p className="text-gray-600 mb-6">
        Enter your email address and we’ll send you a reset link.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-300 py-3 rounded-lg font-medium"
        >
          Send
        </button>
      </form>

      {/* Login link */}
      <p className="mt-4 text-gray-500">
        Remember your password?{" "}
        <Link to="/login" className="text-lime-600 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}
