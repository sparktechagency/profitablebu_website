import React, { useEffect } from "react";
import { Navigate } from "../Navigate";
import card from "../../assets/Home/card1.png";
import backCard from "../../assets/Home/ii.png";
import { Link } from "react-router-dom";
import {
  useDeleteBusinessMutation,
  useGetAllBusinessQuery,
} from "../redux/api/businessApi";
import { imageUrl } from "../redux/api/baseApi";
import { useGetProfileQuery } from "../redux/api/userApi";
import { DeleteIcon } from "lucide-react";
import { message, Popconfirm } from "antd";

const MyBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [deleteBusinesss] = useDeleteBusinessMutation();
  const { data: businessData, isLoading } = useGetAllBusinessQuery();

  const user = JSON.parse(localStorage.getItem("user"));
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();

  const role = profileData?.data?.role;

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  const {
    interestedBusiness = [],
    interestedBusinessAsset = [],
    interestedFranchise = [],
    interestedBusinessIdeas = [],
    myBusiness = [],
    mySoldBusiness = [],
  } = businessData?.data || {};

  const handleDeletebusiness = async (businessId) => {
    try {
      const res = await deleteBusinesss({ businessId, role }).unwrap();
      message.success(res?.message);
    } catch (err) {
      message.error(err?.data?.message);
    }
  };

  const renderCard = (item) => {
    // Check if the item is a business card (has businessId) or a sold card
    const isBusinessCard = item?.businessId;

    // For Broker: Render both business and sold cards based on item structure
    if (role === "Broker") {
      if (isBusinessCard) {
        // Business card for Broker
        return (
          <div
            key={item?._id}
            className="border border-[#0091FF] bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${backCard})` }}
          >
            <div className="h-48 relative">
              <img
                src={`${imageUrl}/Uploads/business-image/${item?.businessId?.image}`}
                alt={item?.businessId?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item?.businessId?.title}
              </h3>
              <p className="text-gray-600 mb-2">{item?.businessId?.location}</p>
              <div className="mb-2">
                <span className="text-blue-500">
                  {item?.businessId?.category}
                </span>{" "}
                ||{" "}
                <span className="text-[#D97706]">
                  {" "}
                  {item?.businessId?.subCategory}
                </span>
              </div>
              <p className="text-gray-800 mb-4">
                Starting from{" "}
                <span className="font-semibold">
                  {item?.businessId?.askingPrice}
                </span>
              </p>
              <Link to={`/details/${item?.businessId?._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                  View Details
                </button>
              </Link>
              <Popconfirm
                title="Are you sure you want to delete this Business?"
                onConfirm={() => handleDeletebusiness(item?._id)}
                okText="Yes"
                cancelText="No"
                okType="danger"
              >
                <button className="bg-red-600 ml-5 text-white px-4 py-2 rounded-md transition-colors">
                  Delete
                </button>
              </Popconfirm>
            </div>
          </div>
        );
      } else {
        // Sold card for Broker
        return (
          <div
            key={item?._id}
            className="border border-[#0091FF] bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${backCard})` }}
          >
            <div className="h-48 relative">
              <img
                src={`${imageUrl}/Uploads/business-image/${
                  item?.image || card
                }`}
                alt={item?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item?.title}
              </h3>
              <p className="text-gray-600 mb-2">{item?.location}</p>
              <div className="mb-2">
                <span className="text-blue-500">{item?.category}</span> ||{" "}
                <span className="text-[#D97706]"> {item?.subCategory}</span>
              </div>
              <p className="text-gray-800 mb-4">
                Starting from{" "}
                <span className="font-semibold">{item?.askingPrice}</span>
              </p>
              <Link to={`/details/${item?._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                  View Details
                </button>
              </Link>

              <Popconfirm
                title="Are you sure you want to delete this Business?"
                onConfirm={() => handleDeletebusiness(item?._id)}
                okText="Yes"
                cancelText="No"
                okType="danger"
              >
                <button className="bg-red-600 ml-5 text-white px-4 py-2 rounded-md transition-colors">
                  Delete
                </button>{" "}
              </Popconfirm>
            </div>
          </div>
        );
      }
    }

    // For Buyer or Investor: Render only business card
    if (role === "Buyer" || role === "Investor") {
      if (isBusinessCard) {
        // Business card
        return (
          <div
            key={item?._id}
            className="border border-[#0091FF] bg-cover bg-center rounded"
            style={{ backgroundImage: `url(${backCard})` }}
          >
            <div className="h-48 relative">
              <img
                src={`${imageUrl}/Uploads/business-image/${item?.businessId?.image}`}
                alt={item?.businessId?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item?.businessId?.title}
              </h3>
              <p className="text-gray-600 mb-2">{item?.businessId?.location}</p>
              <div className="mb-2">
                <span className="text-blue-500">
                  {item?.businessId?.category}
                </span>{" "}
                ||{" "}
                <span className="text-[#D97706]">
                  {" "}
                  {item?.businessId?.subCategory}
                </span>
              </div>
              <p className="text-gray-800 mb-4">
                Starting from{" "}
                <span className="font-semibold">
                  {item?.businessId?.askingPrice}
                </span>
              </p>
              <Link to={`/details/${item?.businessId?._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                  View Details
                </button>
              </Link>
              <Popconfirm
                title="Are you sure you want to delete this Business?"
                onConfirm={() => handleDeletebusiness(item?._id)}
                okText="Yes"
                cancelText="No"
                okType="danger"
              >
                <button className="bg-red-600 ml-5 text-white px-4 py-2 rounded-md transition-colors">
                  Delete
                </button>{" "}
              </Popconfirm>
            </div>
          </div>
        );
      }
      return null; // Don't render sold cards for Buyer/Investor
    }

    // For all other roles: Render only sold card
    if (!isBusinessCard) {
      return (
        <div
          key={item._id}
          className="border border-[#0091FF] bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${backCard})` }}
        >
          <div className="h-48 relative">
            <img
              src={`${imageUrl}/Uploads/business-image/${item?.image || card}`}
              alt={item?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item?.title}
            </h3>
            <p className="text-gray-600 mb-2">{item?.location}</p>
            <div className="mb-2">
              <span className="text-blue-500">{item?.category}</span> ||{" "}
              <span className="text-[#D97706]"> {item?.subCategory}</span>
            </div>
            <p className="text-gray-800 mb-4">
              Starting from{" "}
              <span className="font-semibold">{item?.askingPrice}</span>
            </p>
            <Link to={`/details/${item?._id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                View Details
              </button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this Business?"
              onConfirm={() => handleDeletebusiness(item?._id)}
              okText="Yes"
              cancelText="No"
              okType="danger"
            >
              <button className="bg-red-600 ml-5 text-white px-4 py-2 rounded-md transition-colors">
                Delete
              </button>{" "}
            </Popconfirm>
          </div>
        </div>
      );
    }

    return null; // Don't render business cards for other roles
  };

  return (
    <div className="container m-auto pb-20 mt-20 md:mt-11 px-4">
      <Navigate title={"My Business"} />

      {role === "Investor" ? (
        <>
          {/* Only Interested Business Ideas for Investor */}
          <Section
            title="Interested Business Ideas"
            data={interestedBusinessIdeas}
            renderCard={renderCard}
          />

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
        </>
      ) : role === "Buyer" ? (
        <>
          {/* Interested Business for Buyer */}
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
        </>
      ) : role === "Broker" ? (
        <>
          {role !== "Investor" && localStorage.getItem("accessToken") && (
            <div className="flex justify-end mt-4">
              <Link to={"/addnewbusiness"}>
                <button className="bg-blue-400 px-4 py-2 text-white rounded hover:underline">
                  Sale a New One
                </button>
              </Link>
            </div>
          )}
          <Section
            title={`Current ${role} for sale`}
            data={myBusiness}
            renderCard={renderCard}
          />

          {/* Sold Business */}
          <Section
            title={`Previous ${role} that has been sold`}
            data={mySoldBusiness}
            renderCard={renderCard}
          />
          <Section
            title="Interested Business"
            data={interestedBusiness}
            renderCard={renderCard}
          />

          <Section
            title="Interested Business Assets"
            data={interestedBusinessAsset}
            renderCard={renderCard}
          />

          <Section
            title="Interested Franchises"
            data={interestedFranchise}
            renderCard={renderCard}
          />
        </>
      ) : (
        <>
          {role !== "Investor" && localStorage.getItem("accessToken") && (
            <div className="flex justify-end mt-4">
              <Link to={"/addnewbusiness"}>
                <button className="bg-blue-400 px-4 py-2 text-white rounded hover:underline">
                  Sale a New One
                </button>
              </Link>
            </div>
          )}

          {/* My Business */}
          <Section
            title={`Current ${role} for sale`}
            data={myBusiness}
            renderCard={renderCard}
          />

          {/* Sold Business */}
          <Section
            title={`Previous ${role} that has been sold`}
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
