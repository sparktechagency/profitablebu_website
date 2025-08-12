import Header from "../AboutUs/Header";
import { Typography } from "antd";
import { useGetTermsConditionsQuery } from "../redux/api/metaApi";

const { Text } = Typography;

export default function TermsAndConditions() {
  const { data: terms } = useGetTermsConditionsQuery();
  console.log(terms);

  return (
    <div className="text-[#000000]">
      <Header
        title="Terms and Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />

      <div className="container mx-auto px-5 pt-20 pb-10">
        <div>
          <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

          
          <Text>
            {terms?.data?.[0]?.description}
          </Text>
        </div>
      </div>
    </div>
  );
}
