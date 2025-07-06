import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
export const Navigate = ({title}) => {
    const navigate = useNavigate()
  return (
   <div className=''>
     <div className='bg-white shadow py-3 px-3 my-2'>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          
          }}
        >
          <h1
            onClick={() => navigate(-1)}
            className="flex gap-4 cursor-pointer"
          >
            <button className="text-[#EF4849]">
              <FaArrowLeft />
            </button>
            <span className="text-lg font-semibold">{title}</span>
          </h1>
          
        </div>
    </div>
   </div>
  )
}