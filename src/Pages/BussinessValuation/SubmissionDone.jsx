import { CheckCircle } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";



export default function SubmissionDone() {
      useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <div className="  py-12 px-4">
      <div className="container m-auto  rounded-lg  p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0091FF] mb-4">
            Thank You for Your Submission!
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Your business valuation request has been received.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We're reviewing the information you provided to calculate an
            accurate and personalized valuation. Our team may reach out if any
            further details are needed.
          </p>
        </div>

        {/* What Happens Next Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold text-green-600">
              What Happens Next?
            </h2>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Valuation Review
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team will assess your inputs and supporting documents.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Optional Follow-up
                </h3>
                <p className="text-gray-600 text-sm">
                  If necessary, we may contact you via the email or phone number
                  you provided.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Valuation Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  You'll receive your business valuation via email within 3-5
                  business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Update Submission Section */}
        <div className="text-center mb-8 p-6  rounded-lg">
          <h3 className="text-lg font-semibold text-[#0091FF] mb-2">
            Need to update your submission?
          </h3>
          <p className="text-gray-600 mb-2">
            If you need to correct or add more information, please contact us
            at
          </p>
          <a
            href="mailto:valuation@pbsf.com"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            valuation@pbsf.com
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={'/'}><button  className="px-8 border border-[#0091FF] py-2 text-[#0091FF] rounded" >
            Back To Homepage
          </button></Link>
          <Link to={'/business-valuaion'}><button className="px-8 bg-[#0091FF] py-2 text-white rounded" >
            Submit Another Valuation
          </button></Link>
        </div>
      </div>
    </div>
  );
}
