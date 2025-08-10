// import React from "react";
// import { Navigate } from "../Navigate";
// import card from "../../assets/Home/card1.png";
// import backCard from "../../assets/Home/ii.png";
// import { Link } from "react-router-dom";
// import { useGetAllBusinessQuery } from "../redux/api/businessApi";
// const MyBusiness = () => {
//   const { data: businessData } = useGetAllBusinessQuery();
//   console.log(businessData);
//   const businesses = [
//     {
//       id: 1,
//       title: "Powering Better Financial Solutions",
//       location: "Los Angeles, CA",
//       categories: "Financial Services",
//       price: "$100",
//       image: card,
//       imageAlt: "Futuristic office space with purple lighting",
//     },
//   ];

//   return (
//     <div className="container m-auto pb-20 mt-20 md:mt-11 px-4">
//       <Navigate title={"My Business"}></Navigate>

//       {/*==================== this is role is Buyer ================*/}

//       <h1>Role : Buyer</h1>

//       <div className="pt-6">
//         <div className="">
//           <div className="">
//             <div className="flex justify-end">
//               <Link to={"/addnewbusiness"}>
//                 {" "}
//                 <button className="bg-blue-400 px-4 py-2 text-white rounded hover:underline">
//                   Sale a New One
//                 </button>
//               </Link>
//             </div>
//             <div className="mb-6 mt-11">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-blue-500">
//                       Interested Business
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {businessData?.data?.map((business) => (
//                 <div
//                   key={business.id}
//                   className=" border border-[#0091FF] bg-cover bg-center rounded"
//                   style={{
//                     backgroundImage: `url(${backCard})`,
//                   }}
//                 >
//                   <div className="h-48 relative">
//                     <img
//                       src={business.image}
//                       alt={business.imageAlt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {business.title}
//                     </h3>
//                     <p className="text-gray-600 mb-2">{business.location}</p>
//                     <div className="mb-2">
//                       <span className="text-blue-500">{business.category}</span>{" "}
//                       ||{" "}
//                       <span className="text-[#D97706]">
//                         Business Consulting
//                       </span>
//                     </div>
//                     <p className="text-gray-800 mb-4">
//                       Starting from{" "}
//                       <span className="font-semibold">
//                         {business.askingPrice}
//                       </span>
//                     </p>
//                     <Link to={`/details/${business?._id}`}>
//                       <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
//                         View Details
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-16">
//         <div className="">
//           <div className="">
//             <div className="flex justify-between mb-6">
//               <div className="flex items-center">
//                 <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-500">
//                     Interested Business Assets
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               interestedBusinessAsset data get koro
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-16">
//         <div className="">
//           <div className="">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-500">
//                     Interested Franchises
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               interestedFranchise data get koro
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-16">
//         <div className="">
//           <div className="">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-500">
//                     Interested Business Ideas
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               interestedBusinessIdeas data get koro
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== this is all role data =====================*/}
//       <h1>Role : Other</h1>
//       <div className="pt-16">
//         <div className="">
//           <div className="">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-500">
//                     Current business for sale
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               myBusiness data get koro
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="pt-16">
//         <div className="">
//           <div className="">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center">
//                 <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4 "></div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-500">
//                     Previous business that has been sold
//                   </h2>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               mySoldBusiness data get koro
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBusiness;

import React from "react";
import { Navigate } from "../Navigate";
import card from "../../assets/Home/card1.png";
import backCard from "../../assets/Home/ii.png";
import { Link } from "react-router-dom";
import { useGetAllBusinessQuery } from "../redux/api/businessApi";
import { imageUrl } from "../redux/api/baseApi";

const MyBusiness = () => {
  const { data: businessData, isLoading } = useGetAllBusinessQuery();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const {
    interestedBusiness = [],
    interestedBusinessAsset = [],
    interestedFranchise = [],
    interestedBusinessIdeas = [],
    myBusiness = [],
    mySoldBusiness = [],
  } = businessData?.data || {};

  const renderCard = (item) => {
    console.log(item)
    if (role === "Buyer") {
      // Data for Buyer (e.g., interestedBusiness)
      return (
        <div
          key={item._id}
          className="border border-[#0091FF] bg-cover bg-center rounded "
          style={{ backgroundImage: `url(${backCard})` }}
        >
          <div className="h-48 relative">
            <img
              src={`${imageUrl}/uploads/business-image/${item?.businessId?.image}`}
              alt={item.businessId?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.businessId?.title}
            </h3>
            <p className="text-gray-600 mb-2">{item.businessId?.location}</p>
            <div className="mb-2">
              <span className="text-blue-500">{item.businessId?.category}</span>{" "}
              || <span className="text-[#D97706]">Business Consulting</span>
            </div>
            <p className="text-gray-800 mb-4">
              Starting from{" "}
              <span className="font-semibold">
                {item.businessId?.askingPrice}
              </span>
            </p>
            <Link to={`/details/${item?.businessId?._id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                View Details
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      // Data for Seller (or any other role)
      return (
        <div
          key={item._id}
          className="border border-[#0091FF] bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${backCard})` }}
        >
          <div className="h-48 relative">
            <img
              src={`${imageUrl}/uploads/business-image/${item.image}` || card}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-2">{item.location}</p>
            <div className="mb-2">
              <span className="text-blue-500">{item.category}</span> ||{" "}
              <span className="text-[#D97706]">Business Consulting</span>
            </div>
            <p className="text-gray-800 mb-4">
              Starting from{" "}
              <span className="font-semibold">{item.askingPrice}</span>
            </p>
            <Link to={`/details/${item?._id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                View Details
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container m-auto pb-20 mt-20 md:mt-11 px-4 ">
      <Navigate title={"My Business"} />

    {role === "Buyer" ? (
  <>
    {/* Interested Business */}
    <Section
      title="Interested Business"
      data={interestedBusiness}
      renderCard={renderCard}
    />

    {/* Interested Business Asset */}
    <Section
      title="Interested Business Assets"
      data={interestedBusinessAsset}
      renderCard={renderCard}
    />

    {/* Interested Franchise */}
    <Section
      title="Interested Franchises"
      data={interestedFranchise}
      renderCard={renderCard}
    />

    {/* Interested Business Ideas */}
    <Section
      title="Interested Business Ideas"
      data={interestedBusinessIdeas}
      renderCard={renderCard}
    />
  </>
) : (
  <>
    <div className="flex justify-end mt-4">
      <Link to={"/addnewbusiness"}>
        <button className="bg-blue-400 px-4 py-2 text-white rounded hover:underline">
          Sale a New One
        </button>
      </Link>
    </div>

    {/* My Business */}
    <Section
      title="Current business for sale"
      data={myBusiness}
      renderCard={renderCard}
    />

    {/* Sold Business */}
    <Section
      title="Previous business that has been sold"
      data={mySoldBusiness}
      renderCard={renderCard}
    />
  </>
)}
    </div>
  );
};

const Section = ({ title, data, renderCard }) => (
  <div className="pt-16">
    <div>
      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-[5px] h-12 rounded-r bg-green-500 mr-4"></div>
          <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
        </div>
      </div>

      {/* Data or No Data */}
      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map(renderCard)}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">No data found</p>
      )}
    </div>
  </div>
);


export default MyBusiness;
