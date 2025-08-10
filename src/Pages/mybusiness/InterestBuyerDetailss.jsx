import React from 'react'
import img from '../../assets/Home/back.png'
import { Link, useParams } from 'react-router-dom'
import { useGetDetailsSingleIterestUserQuery } from '../redux/api/businessApi'
import { imageUrl } from '../redux/api/baseApi'

const InterestBuyerDetailss = () => {
 const { businessId, interestedId } = useParams();



  const { data, isLoading } = useGetDetailsSingleIterestUserQuery({ businessId, interestedId });
console.log(data)
  return (
    <div className="container mx-auto p-6 space-y-6 bg-[#f6fcff] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
        <div className="flex items-center gap-4">
          <img
             src={`${imageUrl}/uploads/business-image/${data?.data?.interestedUser?.image}` }
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{data?.data?.interestedUser?.name}</h2>
            <p className="text-sm text-gray-500">{data?.data?.interestedUser?.email}</p>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded ml-2">
           {data?.data?.interestedUser?.businessRole}
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Send Message
        </button>
      </div>

      {/* Interested Section */}
      <div className="bg-white border rounded-xl shadow-sm flex flex-col md:flex-row overflow-hidden">
        <img src={`${imageUrl}/uploads/business-image/${data?.data?.business?.image}` } alt="interested" className="w-full md:w-1/3 object-cover h-[330px] " />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
             {data?.data?.business?.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{data?.data?.business?.location}</p>
            <p className="text-sm text-blue-600 inline-block mr-2">{data?.data?.business?.category || 'none'}</p>
            <span className="text-sm text-orange-500">|| Business Consulting</span>
            <p className="text-sm mt-2">
              Starting from <span className="font-semibold">{data?.data?.business?.askingPrice}</span>
            </p>
          </div>
          <Link to={`/details/${data?.data?.business?._id}`}> <button className="mt-4 w-max bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button></Link>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-6  p-6 ">
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Full Name</h4>
          <p className="text-base">{data?.data?.interestedUser?.name}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Mobile number</h4>
          <p className="text-base">(406) 555–0120</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Sector</h4>
          <p className="text-base">2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Service Zone</h4>
          <p className="text-base">Manchester</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Email</h4>
          <p className="text-base">{data?.data?.interestedUser?.email}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Activity</h4>
          <p className="text-base">5/27/15</p>
        </div>
      </div>

      {/* Message Section */}
      <div className=" p-6 ">
        <h4 className="text-sm text-gray-500 font-medium mb-2">— Message</h4>
        <p className="text-base text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Aenean congue nisi at vitae
          quam lobortis. Praesent scelerisque molestie elementum lobortis sed
          viverra. Mi facilisis tristique dolor nibh risus vel neque. Vulputate
          ac proin eget eget luctus bibendum euismod congue amet. Molestie
          suspendisse fermentum volutpat tincidunt lectus vel diam duis cras.
          Ultricies ante tempor imperdiet purus congue convallis at. Fames
          tellus ullamcorper et rhoncus id. Habitant malesuada faucibus
          dignissim quis enim nec leo eget aliquet. Dui ipsum accumsan mattis
          faucibus tincidunt laoreet.
        </p>
      </div>
    </div>
  )
}

export default InterestBuyerDetailss
