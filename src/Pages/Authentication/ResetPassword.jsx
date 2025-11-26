import { useForm } from "react-hook-form";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password reset data:", data);
    
  };

  const newPassword = watch("newPassword");

  return (
    <div className="max-w-sm mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
      <p className="mb-6 text-gray-600">Reset your password</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* New Password */}
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2"
            {...register("newPassword", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|;:"<>,.?/~`]).{8,}$/,
                message:
                  "Password must have uppercase, lowercase, number & special char",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-lime-300 py-3 rounded-lg font-medium"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
