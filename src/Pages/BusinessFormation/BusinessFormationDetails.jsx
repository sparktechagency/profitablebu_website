import { Tag } from "antd";
import InterestForm from "../BussinessDetailsWithForm/InterestedForm";
import { useParams } from "react-router-dom";
import { useGetSingleFormatQuery } from "../redux/api/businessApi";
import { imageUrl } from "../redux/api/baseApi";
import InterenstFormation from "./InterenstFormation";
import { useEffect } from "react";


export default function BusinessFormationDetails() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id: formationId } = useParams();

  const { data: singleData, isLoading, isError } = useGetSingleFormatQuery({ formationId });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !singleData?.data) {
    return <p>Failed to load formation details.</p>;
  }

  const formation = singleData?.data;


  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full px-5 pb-10">
      <div className="p-5 space-y-8 w-full md:w-1/2">
        <div className="flex flex-col gap-5">
          {/* Image Section */}
          <div className="mt-11">
            <div className="md:flex gap-5 items-center">
              <img
                src={`${imageUrl}/uploads/formation-image/${formation?.image}`}
                alt={formation?.title}
                className="object-cover md:w-[100px] h-[100px] rounded-full"
              />
              <div className="space-y-3 mt-6 md:mt-0">
                {/* <Tag className="bg-blue-100 border-[#0091FF] text-[#0091FF] px-5 py-2 font-bold">
                  {formation.businessRoll}
                </Tag> */}
                <h1 className="text-3xl font-bold text-[#0091FF]">
                  {formation?.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">{formation?.detail}</p>
          </div>

          <div className="flex flex-col gap-5">
          
          
          </div>
        </div>
      </div>

      <div className="w-full mt-11 md:w-1/2">
        <InterenstFormation formationId={formationId}></InterenstFormation>
      </div>
    </div>
  );
}
