import { CheckCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessValuationSubmission() {
  return (
    <div className="container mx-auto px-5 pt-20 pb-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#0091FF] mb-5">
          Thank You for Your Submission!
        </h1>
        <p className="text-xl text-[#000000] mb-6">
          Your business valuation request has been received.
        </p>
        <p className="text-[#000000] max-w-2xl mx-auto leading-relaxed">
          We're reviewing the information you provided to calculate an accurate
          and personalized valuation. Our team may reach out if any further
          details are needed.
        </p>
      </div>

      {/* What Happens Next Section */}
      <div className="mb-10">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-semibold text-blue-600">
              What Happens Next?
            </h2>
          </div>

          <div className="space-y-8">
            {/* Valuation Review */}
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                — Valuation Review
              </h3>
              <p className="text-[#000000]">
                Our team will assess your inputs and supporting documents.
              </p>
            </div>

            {/* Optional Follow-up */}
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                — Optional Follow-up
              </h3>
              <p className="text-[#000000]">
                If necessary, we may contact you via the email or phone number
                you provided.
              </p>
            </div>

            {/* Valuation Delivery */}
            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="text-lg font-semibold text-[#000000] mb-2">
                — Valuation Delivery
              </h3>
              <p className="text-[#000000]">
                You'll receive your business valuation via email within 3–5
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Submission Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-[#0091FF] mb-5">
          Need to update your submission?
        </h2>
        <p className="text-[#000000] mb-5">
          If you need to correct or add more information, please contact us at
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="h-5 w-5 text-[#0091FF]" />
          <a
            href="mailto:valuation@pbsf.com"
            className="text-[#0091FF] underline font-medium"
          >
            valuation@pbsf.com
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link
            to="/"
            className="flex-1 border border-[#0091FF] text-[#0091FF] px-5 py-2 whitespace-nowrap rounded-md"
          >
            Back To Homepage
          </Link>
          <Link
            to="/business-valuaion"
            className="flex-1 bg-[#0091FF] text-white px-5 py-2 whitespace-nowrap rounded-md"
          >
            Submit Another Valuation
          </Link>
        </div>
      </div>
    </div>
  );
}
