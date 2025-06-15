/* eslint-disable no-unused-vars */
import React from 'react'
import card from '../../assets/Home/card1.png'
const BusinessCard = () => {
    const businesses = [
        {
            id: 1,
            title: "Powering Better Financial Solutions",
            location: "Los Angeles, CA",
            categories: ["Financial Services", "Business Consulting"],
            price: "$100",
            image: card,
            imageAlt: "Futuristic office space with purple lighting",
        },
        {
            id: 2,
            title: "Powering Better Financial Solutions",
            location: "Los Angeles, CA",
            categories: ["Financial Services", "Business Consulting"],
            price: "$100",
            image: card,
            imageAlt: "Business professionals reviewing documents with city lights in background",
        },
        {
            id: 3,
            title: "Powering Better Financial Solutions",
            location: "Los Angeles, CA",
            categories: ["Financial Services", "Business Consulting"],
            price: "$100",
            image: card,
            imageAlt: "Modern skyscrapers and office buildings",
        },
    ]
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-500">Popular Business</h2>
                                <p className="text-gray-600 text-sm md:block hidden">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.
                                </p>
                            </div>
                        </div>
                        <a href="#" className="text-blue-500 hover:underline">
                            Explore More
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businesses.map((business) => (
                            <div
                                key={business.id}
                                className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-48 relative">
                                    <img
                                        src={business.image}
                                        alt={business.imageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{business.title}</h3>
                                    <p className="text-gray-600 mb-2">{business.location}</p>
                                    <div className="mb-2">
                                        <span className="text-blue-500">{business.categories[0]}</span>
                                        <span className="mx-2 text-gray-400">||</span>
                                        <span className="text-orange-500">{business.categories[1]}</span>
                                    </div>
                                    <p className="text-gray-800 mb-4">
                                        Starting from <span className="font-semibold">{business.price}</span>
                                    </p>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard

