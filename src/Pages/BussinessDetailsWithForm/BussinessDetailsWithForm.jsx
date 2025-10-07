import { Tag } from "antd";
import { MapPin } from "lucide-react";
import img1 from "../../assets/Home/mm.png";
import img2 from "../../assets/Home/nn.png";
import img3 from "../../assets/Home/oo.png";
import back from "../../assets/Home/back.png";
import InterestForm from "./InterestedForm";
import { useGetSingleIterestUserQuery } from "../redux/api/businessApi";
import { Link, useParams } from "react-router-dom";
import { Navigate } from "../Navigate";
import { imageUrl } from "../redux/api/baseApi";
import { useGetProfileQuery } from "../redux/api/userApi";
import { useEffect, useState } from "react";
const libraries = ["places"];
const mapContainerStyle = { width: "100%", height: "300px" };
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
export default function BussinessDetailsWithForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const { id: businessId } = useParams();

  const { data: businessDetails } = useGetSingleIterestUserQuery({
    businessId,
  });
  const [center, setCenter] = useState(null);
  useEffect(() => {
    if (!isLoaded) return;

    const city = businessDetails?.data?.business?.city || "";
    const state = businessDetails?.data?.business?.state || "";
    const country = businessDetails?.data?.business?.countryName || "";

    const address = `${city}, ${state}, ${country}`.trim();
    if (!address) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;
        setCenter({ lat: loc.lat(), lng: loc.lng() });
      }
    });
  }, [businessDetails, isLoaded]);

  if (!isLoaded) return <div>Loading map...</div>;
  return (
    <div className="container m-auto pb-20 lg:mt-8 mt-16 lg:px-0 px-4">
      <Navigate title={businessDetails?.data?.business?.title}></Navigate>

      <div className=" pt-11">
        <div className="lg:grid grid-cols-2">
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src={`${imageUrl}/uploads/business-image/${businessDetails?.data?.business?.image}`}
              alt=""
            />
            <div className="pt-11">
              <button className="bg-[#C1E1FF] border border-[#0091FF] px-2 py-2 rounded">
                {businessDetails?.data?.business?.businessRole}
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
                  <span className="font-semibold">Business Type:</span>{" "}
                  {businessDetails?.data?.business?.businessType}
                </p>
                <p>
                  <span className="font-semibold">Country:</span>{" "}
                  {businessDetails?.data?.business?.countryName},{" "}
                  {businessDetails?.data?.business?.city},{" "}
                  {businessDetails?.data?.business?.state}
                </p>

                <p>
                  <span className="font-semibold">Reason:</span>{" "}
                  {businessDetails?.data?.business?.reason}
                </p>
                <p>
                  <span className="font-semibold">Ownership Type:</span>{" "}
                  {businessDetails?.data?.business?.ownerShipType}
                </p>
                {/* <p>
                  <span className="font-semibold">Reason for Selling :</span>{" "}
                  Not
                </p> */}
              </div>
            </div>
          </div>
          <div>
            <div className="w-full ">
              <InterestForm
                businessRole={businessDetails?.data?.business?.businessRole}
                businessId={businessId}
              />
            </div>
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
      <p className="mb-4">{businessDetails?.data?.business?.countryName}</p>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center || { lat: 23.8103, lng: 90.4125 }}
      >
        {center && <Marker position={center} />}
      </GoogleMap>
    </div>
  );
}
