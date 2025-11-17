import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const FeedbackCard = () => {
    return (
        <div>
            <div className="">
                      <div className=" mb-9">
                        {/* DaisyUI Card structure */}
                        <div className="card w-full bg-white border-gray-300 border shadow-2xl rounded-2xl lg:rounded-[30px] p-4 md:p-10">
                          <div className="card-body p-0">
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-4xl text-teal-400 mb-4" />
            
                            {/* Testimonial Text */}
                            <p className="text-xs text-gray-700 leading-relaxed mb-6">
                              A posture corrector works by providing support and gentle
                              alignment to your shoulders, back, and spine, encouraging you
                              to maintain proper posture throughout the day.
                            </p>
            
                            {/* Separator Line */}
                            <div className="border-t border-gray-200 dashed mb-6"></div>
            
                            {/* Author Info */}
                            <div className="flex flex-col md:flex-row md:text-start text-center items-center">
                              {/* Profile Circle */}
                              <div className="w-12 h-12 rounded-full bg-teal-800 md:mr-4"></div>
                              <div>
                                <h4 className="text-xl font-bold text-gray-900">
                                  Awlad Hossin
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Senior Product Designer
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
    );
};

export default FeedbackCard;