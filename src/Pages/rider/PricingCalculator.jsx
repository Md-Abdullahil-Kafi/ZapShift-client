import { useForm } from "react-hook-form";
import { useState } from "react";

const PricingCalculator = () => {
  const { register, handleSubmit, reset } = useForm();
  const [price, setPrice] = useState(null);

  const onSubmit = (data) => {
    const { parcelType, destination, weight } = data;

    // Example pricing logic
    let basePrice = 0;

    if (parcelType === "document") basePrice = 30;
    if (parcelType === "small") basePrice = 50;
    if (parcelType === "medium") basePrice = 80;
    if (parcelType === "large") basePrice = 120;

    let destinationFee = destination === "inside" ? 20 : 40;

    const weightFee = Number(weight) * 10;

    const total = basePrice + destinationFee + weightFee;
    setPrice(total);
  };

  const handleReset = () => {
    reset();
    setPrice(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Calculate Your Cost
      </h2>

      <div className="flex flex-col-reverse md:grid md:grid-cols-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 col-span-7">

        {/* Parcel Type */}
        <div>
          <label className="block mb-1 font-medium">Parcel type</label>
          <select
            {...register("parcelType", { required: true })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Parcel type</option>
            <option value="document">Document</option>
            <option value="small">Small Parcel</option>
            <option value="medium">Medium Parcel</option>
            <option value="large">Large Parcel</option>
          </select>
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-1 font-medium">Delivery Destination</label>
          <select
            {...register("destination", { required: true })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Delivery Destination</option>
            <option value="inside">Inside Dhaka</option>
            <option value="outside">Outside Dhaka</option>
          </select>
        </div>

        {/* Weight */}
        <div>
          <label className="block mb-1 font-medium">Weight (KG)</label>
          <input
            type="number"
            {...register("weight", { required: true, min: 1 })}
            placeholder="Enter weight"
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-32 py-3 bg-gray-200 rounded-md"
          >
            Reset
          </button>

          <button
            type="submit"
            className="flex-1 py-3 bg-lime-400 rounded-md font-medium"
          >
            Calculate
          </button>
        </div>
      </form>

      {/* Showing Price */}
      <div className="col-span-5 flex items-center justify-center text-center">
        {price !== null && (
        <div className="text-center mt-8 text-7xl font-bold">
          {price} Tk
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
