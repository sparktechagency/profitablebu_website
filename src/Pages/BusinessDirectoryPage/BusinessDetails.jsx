import React from 'react';
import { useParams } from 'react-router-dom';
import { businessData } from '../../dummy-data/DummyData';

function BusinessDetails() {
  const { id } = useParams();
  const business = businessData.find(
    (business) => business.id === parseInt(id, 10)
  );

  return (
    <div className="min-h-screen bg-[#e7fcff] py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto backdrop-blur-xl p-2 rounded-lg">
        {/* Title and Location */}
        <div className="flex flex-col lg:flex-row lg:justify-start gap-3 mb-6">
          {/* Image */}
          <div className="mt-6 lg:mt-0 lg:w-1/3">
            <img
              src={business?.image}
              alt={business?.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {business?.title}
            </h1>
            <p className="text-lg text-gray-600">{business?.location}</p>
            <p className="text-md text-gray-600">
              {business?.category} - {business?.subcategory}
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-2">
              ${business?.price}
            </p>
          </div>
        </div>

        {/* Assets Included */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Assets Included:
          </h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {business?.assetsIncluded?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Financial Summary */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Financial Summary:
          </h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <strong>Monthly Revenue:</strong> $
              {business?.financialSummary?.monthlyRevenue}
            </li>
            <li>
              <strong>Net Profit:</strong> $
              {business?.financialSummary?.netProfit}
            </li>
            <li>
              <strong>Inventory Value:</strong> $
              {business?.financialSummary?.inventoryValue}
            </li>
            <li>
              <strong>Lease Terms:</strong>{' '}
              {business?.financialSummary?.leaseTerms}
            </li>
            <li>
              <strong>Royalty Fee:</strong>{' '}
              {business?.financialSummary?.royaltyFee}
            </li>
          </ul>
        </div>

        {/* Sale Event */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sale Event:</h2>
          <p className="text-gray-700 mt-2">
            <strong>Date:</strong> {business?.saleEvent?.date}
          </p>
          <p className="text-gray-700">
            <strong>Time:</strong> {business?.saleEvent?.time}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {business?.saleEvent?.location}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact:</h2>
          <p className="text-gray-700 mt-2">
            <strong>Host:</strong> {business?.contact?.hostName}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {business?.contact?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetails;
