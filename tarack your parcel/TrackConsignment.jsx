import { useState } from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";

const TrackConsignment = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleSearch = () => {
    console.log("Searching:", trackingId);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#0A3A2A]">Track Your Consignment</h1>
      <p className="text-gray-500 mt-2">
        Now you can easily track your consignment
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex items-center gap-3 max-w-lg">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search tracking code here"
            className="w-full border rounded-xl pl-10 py-2 outline-none"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-lime-300 rounded-xl font-semibold"
        >
          Search
        </button>
      </div>

      <hr className="my-10" />

      {/* Two Column Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Details */}
        <div className="bg-[#F5F7F7] rounded-3xl shadow p-8">
          <h2 className="text-xl font-bold mb-6 text-[#0A3A2A]">
            Product details
          </h2>

          <div className="text-gray-700 space-y-2">
            <p>May 31, 2025 03:41 pm</p>
            <p>Id : <span className="font-semibold">148976175</span></p>
            <p>Invoice : <span className="font-semibold">24227</span></p>
            <p>
              Tracking Code :
              <span className="font-semibold"> 0IJWJEVXWZ9823Q7H5H5SYV7</span>
            </p>

            <br />

            <p>Name : Zahid Hossain</p>
            <p>
              Address : Madrasha Road, Chandpur sadar, Chandpur, Chandpur,
              3600, BD
            </p>
            <p>Phone Number : 01780448866</p>

            <br />

            <p>Approved : <span className="text-red-400">N/A</span></p>
            <p>Weight : KG</p>
            <p>COD : b 0</p>
            <p className="text-yellow-500 font-semibold">Pending</p>
          </div>
        </div>

        {/* Tracking Updates */}
        <div className="bg-[#F5F7F7] rounded-3xl shadow p-8">
          <h2 className="text-xl font-bold mb-6 text-[#0A3A2A]">
            Tracking Updates
          </h2>

          <div className="space-y-10">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="text-gray-600 text-sm">
                  Jun 02, 2025 <br /> 12:21 am
                </div>

                <FaCheckCircle className="text-green-500 text-xl mt-1" />

                <div className="text-gray-700 text-sm">
                  Assigned to rider.
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrackConsignment;
