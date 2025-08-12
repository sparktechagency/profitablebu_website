import Header from "../AboutUs/Header";
import { Typography } from "antd";
import { useGetPrivecyQuery } from "../redux/api/metaApi";

const { Text } = Typography;

export default function PrivacyPolicy() {
    const {data:privecy} = useGetPrivecyQuery()
    console.log(privecy)
  return (
    <div className="text-[#000000]">
      <Header
        title="Privacy Policy"
        description="Please read these terms and conditions carefully before using our services."
      />

      <div className="container mx-auto px-5 pt-20 pb-10 ">
        <div>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        {privecy?.data?.description}
        </div>
      </div>
    </div>
  );
}
