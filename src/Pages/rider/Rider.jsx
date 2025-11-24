import React from "react";
import riderImage from "../../assets/agent-pending.png";
import { useForm } from "react-hook-form";

const Rider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
  return (
    <div className="lg:my-20 m-y rounded-3xl bg-white lg:p-10 p-5 lg:grid flex flex-col-reverse grid-cols-1 lg:grid-cols-12">
      <section className="lg:col-span-7 ">
        <div>
          <h1 className="font-bold text-6xl text-secondary mb-4">Be a Rider</h1>
          <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className=" justify-center items-center flex lg:hidden">
            <img src={riderImage} alt="Rider Image" />
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-white p-6 rounded-lg space-y-4"
          >
            <h2 className="text-2xl font-bold">Tell us about yourself</h2>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Age */}
              <div>
                <label>Your age</label>
                <input
                  type="number"
                  placeholder="Your age"
                  className="input input-bordered w-full"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 18, message: "Minimum age is 18" },
                    max: { value: 60, message: "Maximum age is 60" },
                  })}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
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

              {/* District */}
              <div>
                <label>Your District</label>
                <select
                  className="select select-bordered w-full"
                  {...register("district", {
                    required: "Select your district",
                  })}
                >
                  <option value="">Select your District</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Rajshahi">Rajshahi</option>
                </select>
                {errors.district && (
                  <p className="text-red-500 text-sm">
                    {errors.district.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NID */}
              <div>
                <label>NID No</label>
                <input
                  type="text"
                  placeholder="NID"
                  className="input input-bordered w-full"
                  {...register("nid", {
                    required: "NID is required",
                    minLength: {
                      value: 10,
                      message: "NID must be at least 10 digits",
                    },
                  })}
                />
                {errors.nid && (
                  <p className="text-red-500 text-sm">{errors.nid.message}</p>
                )}
              </div>

              {/* Contact */}
              <div>
                <label>Contact</label>
                <input
                  type="text"
                  placeholder="Contact"
                  className="input input-bordered w-full"
                  {...register("contact", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^01[3-9]\d{8}$/,
                      message: "Enter a valid Bangladeshi phone number",
                    },
                  })}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4 - Wirehouse */}
            <div>
              <label>Which wire-house you want to work?</label>
              <select
                className="select select-bordered w-full"
                {...register("wirehouse", {
                  required: "Select a wire-house",
                })}
              >
                <option value="">Select wire-house</option>
                <option value="Wirehouse A">Wirehouse A</option>
                <option value="Wirehouse B">Wirehouse B</option>
              </select>
              {errors.wirehouse && (
                <p className="text-red-500 text-sm">
                  {errors.wirehouse.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <aside className="lg:col-span-5 lg:flex justify-center items-center hidden lg:items-end p-7">
        <img src={riderImage} alt="Rider Image" />
      </aside>
    </div>
  );
};

export default Rider;
