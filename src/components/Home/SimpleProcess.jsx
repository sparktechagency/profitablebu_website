import React from 'react'

const SimpleProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 2,
      title: "Browse Listings or Create Your Listing",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 3,
      title: "Contact the Seller or Buyer",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 4,
      title: "Negotiate & Finalize Deal",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 5,
      title: "Complete the Transaction",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "We dejoy working with dining clients, people for whom quality, service, integrity & aesthetics.",
    },
  ]
  return (
    <div>
      <section className="py-16  ">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium mb-2">Our Simple Process</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're buying or selling, our platform makes the process seamless and straightforward. Here's how it
            works:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FFFFFF] rounded-2xl p-8 py-11 border-2 border-cyan-200 hover:border-cyan-300 transition-colors"
            >
              {/* Number Icon */}
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default SimpleProcess