import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function VerifyCode() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const inputsRef = useRef([]);

  const onSubmit = (data) => {
    const code = Object.values(data).join("");
    console.log("Entered Code:", code);
  };

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // allow only digits
    setValue(`code${index}`, value);

    if (value && index < 6) {
      inputsRef.current[index].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !watch(`code${index}`) && index > 1) {
      inputsRef.current[index - 2].focus();
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-2">Enter Code</h1>
      <p className="mb-6 text-gray-600">
        Enter 6 digit code that we sent in your email address
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 6 Input Boxes */}
        <div className="flex justify-between gap-2">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <input
              key={num}
              maxLength={1}
              type="text"
              className="w-12 h-12 border text-center rounded-lg text-lg font-medium"
              {...register(`code${num}`, {
                required: "All 6 digits are required",
                pattern: {
                  value: /^[0-9]$/,
                  message: "Only numbers are allowed",
                },
              })}
              ref={(el) => (inputsRef.current[index] = el)}
              onInput={(e) => handleInput(e, num)}
              onKeyDown={(e) => handleKeyDown(e, num)}
            />
          ))}
        </div>

        {/* Error message */}
        {errors.code1 && (
          <p className="text-red-500 text-sm mt-1">
            Please enter all 6 digits correctly
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-lime-300 py-3 rounded-lg font-medium"
        >
          Verify Code
        </button>
      </form>
    </div>
  );
}
