import React from 'react'
import { Navigate } from '../Navigate'
import { Link } from 'react-router-dom'

const buyers = [
  {
    name: 'Bessie Cooper',
    email: 'tinest@mail.ru',
    role: 'Investor',
    interest: 'Trendy Urban Café in Dhaka City',
    img: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Dianne Russell',
    email: 'bertou@yandex.ru',
    role: 'Investor',
    interest: 'Trendy Urban Café in Dhaka City',
    img: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Kathryn Murphy',
    email: 'bertou@yandex.ru',
    role: 'Investor',
    interest: 'Trendy Urban Café in Dhaka City',
    img: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Albert Flores',
    email: 'seema@gmail.com',
    role: 'Investor',
    interest: 'Trendy Urban Café in Dhaka City',
    img: 'https://i.pravatar.cc/150?img=4',
  },
  {
    name: 'Robert Fox',
    email: 'tinest@mail.ru',
    role: 'Investor',
    interest: 'Trendy Urban Café in Dhaka City',
    img: 'https://i.pravatar.cc/150?img=5',
  },
]

const InterestedBuyer = () => {
  return (
    <div className="container mx-auto p-6 space-y-4">
        <Navigate title={'Trendy Urban Café in Dhaka City  /  interested buyers'}></Navigate>
      {buyers.map((buyer, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-white shadow rounded-xl hover:shadow-md transition-all"
        >
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <img
              src={buyer.img}
              alt={buyer.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{buyer.name}</h3>
              <p className="text-sm text-gray-500">{buyer.email}</p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded ml-2">
              {buyer.role}
            </span>
          </div>

          {/* Middle Section */}
          <div className="hidden md:block text-sm text-gray-700">
            <p className="font-medium">Interested On</p>
            <p className="text-blue-500">{buyer.interest}</p>
          </div>

          {/* Right Section */}
          <Link to={'/interestBuyer/details'}><button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            view Details
          </button></Link>
        </div>
      ))}
    </div>
  )
}

export default InterestedBuyer
