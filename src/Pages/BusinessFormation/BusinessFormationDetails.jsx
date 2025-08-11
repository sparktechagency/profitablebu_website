import { Tag } from "antd";
import InterestForm from "../BussinessDetailsWithForm/InterestedForm";
import { useParams } from "react-router-dom";
import { useGetSingleFormatQuery } from "../redux/api/businessApi";
import { imageUrl } from "../redux/api/baseApi";


export default function BusinessFormationDetails() {
  const { id: formationId } = useParams();

  const { data: singleData, isLoading, isError } = useGetSingleFormatQuery({ formationId });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !singleData?.data) {
    return <p>Failed to load formation details.</p>;
  }

  const formation = singleData.data;

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 w-full px-5 pt-20 pb-10">
      <div className="p-5 space-y-8 w-full md:w-1/2">
        <div className="flex flex-col gap-5">
          {/* Image Section */}
          <div className="mt-11">
            <div className="md:flex gap-5 items-center">
              <img
                src={`${imageUrl}/uploads/business-image/${formation.image}`}
                alt={formation.title}
                className="object-cover md:w-[200px]"
              />
              <div className="space-y-3 mt-6 md:mt-0">
                <Tag className="bg-blue-100 border-[#0091FF] text-[#0091FF] px-5 py-2 font-bold">
                  #Franchise
                </Tag>
                <h1 className="text-3xl font-bold text-[#0091FF]">
                  {formation.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-5">
            <p className="text-gray-700 leading-relaxed">{formation.detail}</p>
          </div>

          <div className="flex flex-col gap-5">
          
            <div>
              <h1 className="text-2xl font-bold text-[#000] mb-5">Assets Included</h1>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Licensed franchise brand rights (transferable)</li>
                <li>• Complete cafe setup (~1,200 sq. ft.)</li>
                <li>• Professional coffee & kitchen equipment</li>
                <li>• POS system</li>
                <li>• Decor and interior furnishings</li>
                <li>• 10k+ social media followers</li>
                <li>• Staff and supplier contacts</li>
              </ul>
            </div>

        
            <div>
              <h1 className="text-2xl font-bold text-[#000] mb-5">Financial Summary (Approximate)</h1>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Monthly Revenue: $4,500</li>
                <li>• Monthly Expenses: $2,000</li>
                <li>• Net Profit: $2,500</li>
                <li>• Inventory Value: $2,000</li>
                <li>• Lease Terms: 3 years remaining, renewable</li>
                <li>• Royalty Fee: 5% of monthly revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-11 md:w-1/2">
        <InterestForm businessId={formationId}/>
      </div>
    </div>
  );
}
