import React from 'react';
import { useParams } from 'react-router-dom';
import { businessData } from '../../dummy-data/DummyData';
import { Divider, Tag } from 'antd';
import { FaCalendar } from 'react-icons/fa';
import dayjs from 'dayjs';
import { imageUrl } from '../redux/api/baseApi';

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
             
              src={`${imageUrl}/uploads/business-image/${business?.image}` }
              alt={business?.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="text-center lg:text-left">
            <Tag color="blue">{business?.hashtags}</Tag>
            <h1 className="text-3xl font-bold text-[#0091FF]">
              {business?.title}
            </h1>
            <p className="text-lg text-black">
              <strong>Business Type:</strong> {business?.businessType}
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-2">
              <strong>Price:</strong>${business?.price}
            </p>
            <p className="text-md text-black">
              <strong>Location:</strong> {business?.location}
            </p>
            <p className="text-md text-black">
              <strong>Ownership:</strong> {business?.ownership}
            </p>
            <p className="text-md text-black">
              <strong>Reason for Selling:</strong> {business?.reason}
            </p>
          </div>
        </div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: business?.description }} />
        </div>
        <Divider />
        <div>
          <FaCalendar />
          <span>{dayjs(business?.createdAt).format('DD/MM/YYYY')}</span>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetails;
