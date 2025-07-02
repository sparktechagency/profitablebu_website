import React from 'react'
import img1 from '../../assets/country-icons/afg.png'
import img2 from '../../assets/country-icons/pak.png'
import img3 from '../../assets/country-icons/un.png'
const Country = () => {
  return (
    <div>
       <div className="flex justify-between items-center mt-20">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Popular Business
            </h2>
            <p className="text-gray-600 text-sm md:block hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices lectus sem.
            </p>
          </div>
        </div>
        <a href="#" className="text-blue-500 hover:underline">
          Explore More
        </a>
      </div>
    <div className="grid grid-cols-3 gap-4 mt-10">
  {[img1, img2, img3].map((img, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-lg shadow-md"
    >
      <img
        src={img}
        alt={`Country ${index + 1}`}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 translate-y-32 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <div>
          <p className="text-white font-semibold text-4xl">120+</p>
        <p className='text-white text-2xl'>Business Available</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Country