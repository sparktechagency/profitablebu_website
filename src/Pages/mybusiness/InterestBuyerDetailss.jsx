import React from 'react'
import img from '../../assets/Home/back.png'
import { Link } from 'react-router-dom'

const InterestBuyerDetailss = () => {
  return (
    <div className="container mx-auto p-6 space-y-6 bg-[#f6fcff] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt="user"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Sardor</h2>
            <p className="text-sm text-gray-500">sardor@gmail.com</p>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded ml-2">
            Investor
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Send Message
        </button>
      </div>

      {/* Interested Section */}
      <div className="bg-white border rounded-xl shadow-sm flex flex-col md:flex-row overflow-hidden">
        <img src={img} alt="interested" className="w-full md:w-1/3 object-cover h-64 md:h-auto" />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Powering Better Financial Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-1">Los Angeles, CA</p>
            <p className="text-sm text-blue-600 inline-block mr-2">Financial Services</p>
            <span className="text-sm text-orange-500">|| Business Consulting</span>
            <p className="text-sm mt-2">
              Starting from <span className="font-semibold">$100</span>
            </p>
          </div>
          <Link to={'/business-details'}> <button className="mt-4 w-max bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button></Link>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-6  p-6 ">
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">— Full Name</h4>
          <p className="text-base">Albert Flores</p>
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
          <p className="text-base">dric@gmail.com</p>
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
