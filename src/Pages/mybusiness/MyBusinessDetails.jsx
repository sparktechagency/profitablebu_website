import React, { useEffect } from "react";
import img1 from "../../assets/Home/mm.png";
import img2 from "../../assets/Home/nn.png";
import img3 from "../../assets/Home/oo.png";
import back from "../../assets/Home/back.png";
import { Navigate } from "../Navigate";
import { Link, useParams } from "react-router-dom";
import {
  useGetSingleBusinessQuery,
  useGetSingleIterestUserQuery,
} from "../redux/api/businessApi";
import { imageUrl } from "../redux/api/baseApi";
const MyBusinessDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  const { id: businessId } = useParams();

  const { data: businessDetails } = useGetSingleIterestUserQuery({
    businessId,
  });
  console.log(businessDetails);

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div className="container m-auto pb-20 lg:mt-8 mt-11 lg:px-0 px-4">
      <Navigate title={"Trendy Urban Café in Dhaka City"}></Navigate>
      <div className="lg:grid grid-cols-3 gap-9">
        <div className="bg-white shadow  p-4 text-center rounded">
          <div className="flex justify-center">
            <img src={img1} alt="" />
          </div>
          <h1 className="font-semibold text-3xl py-3">Total Views</h1>
          <h2 className="text-[#22C55E] font-semibold text-xl">
            {businessDetails?.data?.business?.views || "0"}
          </h2>
        </div>
        <div className="bg-white shadow  p-4 text-center rounded">
          <div className="flex justify-center">
            <img src={img2} alt="" />
          </div>
          <h1 className="font-semibold text-3xl py-3">Total Interests</h1>
          <h2 className="text-[#22C55E] font-semibold text-xl">
            {businessDetails?.data?.interestedUsers?.length || "0"}
          </h2>
        </div>
        <div className="bg-white shadow  p-4 text-center rounded">
          <div className="flex justify-center">
            <img src={img3} alt="" />
          </div>
          <h1 className="font-semibold text-3xl py-3">Inquiries Received</h1>
          <h2 className="text-[#22C55E] font-semibold text-xl">1,205</h2>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-4 pt-11">
        <img className="w-full h-[400px] object-cover" src={`${imageUrl}/uploads/business-image/${businessDetails?.data?.business?.image}` } alt="" />
        <div>
          <button className="bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded">
            #Francise
          </button>
          <h1 className="text-2xl text-[#0091FF]">
            {businessDetails?.data?.business?.title}
          </h1>
          <div className="space-y-2 my-3">
            <p>
              <span className="font-semibold">Business Type:</span>{" "}
              {businessDetails?.data?.business?.businessType}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              {businessDetails?.data?.business?.askingPrice}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {businessDetails?.data?.business?.location}
            </p>
            <p>
              <span className="font-semibold">Industry:</span>{" "}
              {businessDetails?.data?.business?.industryName}
            </p>
            <p>
              <span className="font-semibold">Ownership Type:</span>{" "}
              {businessDetails?.data?.business?.ownershipType}
            </p>
            <p>
              <span className="font-semibold">Reason for Selling :</span> Not
            </p>
          </div>
          <div className="flex gap-5">
            {role !== "Buyer" && (
              <Link
                to={`/EditNewBusiness/${businessDetails?.data?.business?._id}`}
              >
                <button className="bg-[#0091FF] px-4 py-1 rounded text-white">
                  Edit {businessDetails?.data?.business?.title}
                </button>
              </Link>
            )}
            <Link to={`/interestBuyer/${businessDetails?.data?.business?._id}`}>
              <button className="bg-[#0091FF] px-4 py-1 rounded text-white">
                interested buyers
              </button>
            </Link>
            {role === "Buyer" && (
              <Link
                to={`/business-details-with-form/${businessDetails?.data?.business?._id}`}
              >
                {" "}
                <button className="bg-[#0091FF] hover:bg-[#0091FF] text-white px-5 py-1 rounded">
                  Interested
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: businessDetails?.data?.business?.description,
          }}
          className="text-gray-700 mt-3"
        />
      </div>

      <h1 className="text-[#0091FF] font-bold text-3xl mt-9">Location</h1>
      <p className="mb-4">{businessDetails?.data?.business?.location}</p>

      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          businessDetails?.data?.business?.location || ""
        )}&output=embed`}
        className="w-full h-[300px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Business Location"
      />
    </div>
  );
};

export default MyBusinessDetails;
