import { useState } from "react";

const tabs = ["Story", "Mission", "Success", "Team & Others"];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("Story");

  const content = {
    Story: `
      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
      Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
      service has made us a trusted partner for thousands. Whether it's a personal gift or a
      time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

      We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
      Over the years, our commitment to real-time tracking, efficient logistics, and customer-first
      service has made us a trusted partner for thousands. Whether it's a personal gift or a
      time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
    `,
    Mission: `
      Our mission is to build the fastest and most reliable parcel delivery network nationwide.
      We combine technology, skilled manpower, and exceptional service to deliver trust — every day.
    `,
    Success: `
      Over the years, we have delivered millions of parcels with 99% on-time success rate.
      Thousands of customers rely on us for personal and business shipments across Bangladesh.
    `,
    "Team & Others": `
      Our team is built with experts in logistics, technology, and customer service.
      Together, we work tirelessly to give you the best delivery experience possible.
    `,
  };

  return (
    <div className="max-w-6xl mx-auto p-6 rounded-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#003B36]">About Us</h1>
      <p className="mt-3 text-gray-600 max-w-4xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on time,
        every time.
      </p>

      {/* Divider */}
      <div className="border-b my-6"></div>

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab ? "text-[#7BA63F] border-b-2 border-[#7BA63F]" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-700 leading-7 whitespace-pre-line">
        {content[activeTab]}
      </div>
    </div>
  );
}
