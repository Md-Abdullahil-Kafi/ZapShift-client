import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router";
const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    open: true, // First one is open in the image
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, most posture correctors are designed to be adjustable, making them suitable for a wide range of ages and body types. Always check the product's specific sizing guide.",
    open: false,
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "When used correctly and consistently, posture correctors can help retrain your muscles to maintain proper posture, which can significantly reduce certain types of back pain.",
    open: false,
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some high-end models include smart features like sensors that vibrate when you slouch, helping you build better habits actively.",
    open: false,
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can sign up for our back-in-stock notifications via email on the product page, and we will alert you as soon as the item is available again.",
    open: false,
  },
];

const FAQ = () => {
  return (
    <div className="py-16 px-4 min-h-screen text-white ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#009c8d] mb-10">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-500 mb-15 max-w-3xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200 border border-base-300 text-base-content text-start">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                How do I create an account?
              </div>
              <div className="collapse-content text-sm">
                <hr className="opacity-15 mb-5" />
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-10 justify-center">
          <span className="flex items-center">
            <Link className=" rounded-full bg-primary py-3 px-13 text-black font-bold">
              See More FAQ’s
            </Link>
            <span className="bg-gray-700 text-white p-2 rounded-full">
              <FaLocationArrow size={28}></FaLocationArrow>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
