import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Upload,
} from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useRef, useState } from "react";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Navigate } from "../Navigate";
import JoditEditor from "jodit-react";
import { Country, State, City } from "country-state-city";
import {
  useGetCategtoryQuery,
  useGetSingleBusinessQuery,
  useUpdateSingleMutation,
} from "../redux/api/businessApi";
import { useParams } from "react-router-dom";
import { countryData } from "../../dummy-data/DummyData";
import { imageUrl } from "../redux/api/baseApi";
dayjs.extend(customParseFormat);

const EditNewBusiness = () => {
  const { id: businessId } = useParams();
  console.log(businessId);

  const [fileList, setFileList] = useState([]);
  const [updateSingleData] = useUpdateSingleMutation();
  const { data: businessDetails } = useGetSingleBusinessQuery({ businessId });
  console.log(businessDetails);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  console.log(businessDetails?.data?.business.image);
  const { data: categorie, isLoading, isError } = useGetCategtoryQuery();
  console.log(categorie);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [form] = Form.useForm();
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const category = categorie.data.find((cat) => cat.categoryName === value);
    setSubCategories(category?.subCategories || []);
    form.setFieldsValue({ subCategory: null });
  };
  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setStates(State.getStatesOfCountry(value));
    setCities([]);
    form.setFieldsValue({ state: undefined, city: undefined });
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    setCities(City.getCitiesOfState(selectedCountry, value));
    form.setFieldsValue({ city: undefined });
  };
const handleSubmit = async (values) => {

  const existingImages = fileList
    .filter((file) => file.url)
    .map((file) => {
      const parts = file.url.split("/");
      return parts[parts.length - 1]; 
    });


  const newImages = fileList
    .filter((file) => file.originFileObj)
    .map((file) => file.originFileObj);
    

  console.log("New Images:", newImages);
  console.log("Existing Images:", existingImages);

  const id = businessId;
  const user = businessDetails?.data?.business?.user;

  try {
    const formData = new FormData();

    formData.append(
      "business_image",
      JSON.stringify({
        business_image: existingImages,
      })
    );

    newImages.forEach((file) => {
      formData.append("business_image", file);
    });

    formData.append("title", values?.title || "");
    formData.append("state", values?.state || "");
    formData.append("city", values?.city || "");
    formData.append("category", values?.category || "");
    formData.append("subCategory", values?.subCategory || "");
    formData.append("country", values?.country || "");
    // formData.append("location", values?.location || "");
    formData.append("askingPrice", values?.askingPrice || "");
    formData.append("businessType", values?.businessType || "");
    formData.append("ownerShipType", values?.ownerShipType || "");
    formData.append("industryName", values?.industryName || "");
    formData.append("description", content || "");

    const res = await updateSingleData({
      formData,
      businessId: id,
      user: user,
    });

    if (res?.data?.success) {
      message.success(res.data.message );
    } else {
      message.error(res?.data?.error);
    }
  } catch (error) {
    console.error("Update Error:", error);
    message.error(error?.response?.data?.error || "Update failed!");
  }
};


  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 600,
    },
    buttons: [
      "image",
      "fontsize",
      "bold",
      "italic",
      "underline",
      "|",
      "font",
      "brush",
      "align",
    ],
  };

  useEffect(() => {
    if (businessDetails?.data) {
      const data = businessDetails.data?.business;
      form.setFieldsValue({
        city: data.city,
        state: data.state,
        title: data.title,
        category: data.category,
        subCategory: data.subCategory,
        country: data.country,
        // location: data.location,
        askingPrice: data.askingPrice,
        ownerShipType: data.ownerShipType,
        businessType: data.businessType,
        industryName: data.industryName,
      });

      setContent(data.description);

      if (data.image && data.image.length > 0) {
        setFileList(
          data.image.map((img, index) => ({
            uid: `-${index}`,
            name: img,
            status: "done",
            url: `${imageUrl}/uploads/business-image/${img}`,
          }))
        );
      }
    }
  }, [businessDetails, form]);

  useEffect(() => {
    if (categorie?.data?.length) {
      const defaultCategory = categorie.data[0];
      setSelectedCategory(defaultCategory.categoryName);
      setSubCategories(defaultCategory.subCategories || []);
      form.setFieldsValue({ category: defaultCategory.categoryName });
    }
  }, [categorie]);

  return (
    <div className="container m-auto pb-20 pt-3">
      <Navigate title={"Edit Business Information"}></Navigate>
      <div className="bg-white p-3">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Photos">
            <Upload
            style={{ width: "100%", height: "200px" }}
              listType="picture-card"
              fileList={fileList}
              onChange={handleUploadChange}
              onRemove={handleRemove}
              beforeUpload={() => false}
              multiple
            >
              {fileList.length >= 4 ? null : (
                <div className="flex items-center gap-2">
                  <PlusOutlined />
                   <p className="">Click or drag file Max 1 MB Only PNG and JPG</p>

                </div>
              )}
            </Upload>
          </Form.Item>
          <div className=" ">
            <Form.Item
              label="Business Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your business Title!",
                },
              ]}
            >
              <Input
                className="w-full bg-transparent  py-3"
                placeholder="Fuel Type"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Business Category"
              name="category"
              rules={[
                { required: true, message: "Please select Business Category!" },
              ]}
            >
              <Select
              style={{ height: "48px" }}
                placeholder="Select Category"
                onChange={handleCategoryChange}
                value={selectedCategory}
              >
                {categorie?.data?.map((cat) => (
                  <Option key={cat._id} value={cat.categoryName}>
                    {cat.categoryName}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {subCategories.length > 0 && (
              <Form.Item label="Sub Category" name="subCategory">
                <Select style={{ height: "48px" }} placeholder="Select Sub Category">
                  {subCategories.map((sub, i) => (
                    <Option key={i} value={sub.name}>
                      {sub.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Country */}
            <Form.Item
              label="Select Your Country"
              name="country"
              rules={[
                { required: true, message: "Please select your country!" },
              ]}
            >
              <Select
                placeholder="Select your country"
                style={{ height: "48px" }}
                showSearch
                allowClear
                onChange={handleCountryChange}
                optionLabelProp="label"
              >
                {countries.map((country) => (
                  <Select.Option
                    key={country.isoCode}
                    value={country.isoCode}
                    label={country.name}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${country.isoCode.toLowerCase()}.png`}
                        alt={country.name}
                        className="w-5 h-3 object-cover"
                      />
                      {country.name}
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* State */}
            <Form.Item label="Select State" name="state">
              <Select
                placeholder="Select your state"
                style={{ height: "48px" }}
                showSearch
                allowClear
                onChange={handleStateChange}
                disabled={!selectedCountry}
              >
                {states.map((state) => (
                  <Select.Option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* City */}
            <Form.Item label="Select City" name="city">
              <Select
                placeholder="Select your city"
                style={{ height: "48px" }}
                showSearch
                allowClear
                disabled={!selectedState}
              >
                {cities.map((city) => (
                  <Select.Option key={city.name} value={city.name}>
                    {city.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="">
            {/* <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Please input Location!" }]}
            >
              <Select
                style={{ height: "48px" }}
                placeholder="Select Location"
                className="w-full"
              >
                <Option value="">Select</Option>
                <Option value="Dubai">Dubai</Option>
                <Option value="Sharjah">Sharjah</Option>
                <Option value="Ajman">Ajman</Option>
                <Option value="Umm Ai-Quwain">Umm Ai-Quwain</Option>
                <Option value="Fujairah">Fujairah</Option>
                <Option value="Ras Ai Khaimah">Ras Ai Khaimah</Option>
              </Select>
            </Form.Item> */}
            <Form.Item
              label="Asking Price"
              name="askingPrice"
              rules={[
                { required: true, message: "Please input Asking Price!" },
              ]}
            >
              <Select
                style={{ height: "48px" }}
                placeholder="Select Asking Price"
                className="w-full"
              >
                <Option value="General_Inquiry">Select</Option>
                <Option value="Under $50K">Under $50K</Option>
                <Option value="$50K - $100K">$50K - $100K</Option>
                <Option value="$100k - $250K">$100k - $250K</Option>
                <Option value="$250K - $500K">$250K - $500K</Option>
                <Option value="$500K - $1M">$500K - $1M</Option>
                <Option value="Over $1M">Over $1M</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Ownership Type"
              name="ownerShipType"
              rules={[
                { required: true, message: "Please input Ownership type!" },
              ]}
            >
              <Select
                style={{ height: "48px" }}
                placeholder="Select Ownership Type"
                className="w-full"
              >
                <Option>Select</Option>
                <Option value="Sole Proprietorship">Sole Proprietorship</Option>
                <Option value="Partnership">Partnership</Option>
                <Option value="Corporation">Corporation</Option>
                <Option value="LLC">LLC</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Buisiness Type"
              name="businessType"
              rules={[
                { required: true, message: "Please input business Type!" },
              ]}
            >
              <Select
                style={{ height: "48px" }}
                placeholder="Select Inquiry"
                className="w-full"
              >
                <Option>Select</Option>
                <Option value="Franchise">Franchise</Option>
                <Option value="Independent">Independent</Option>
                <Option value="Startup">Startup</Option>
                <Option value="Home-Based">Home-Based</Option>
                <Option value="Online">Online</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            label="Industry Name"
            name="industryName"
            rules={[{ required: true, message: "Please input Indersty Name!" }]}
          >
            <Input
              className="w-full bg-transparent py-3"
              placeholder="Engine Model"
            />
          </Form.Item>

          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />

          <Form.Item className=" pt-3">
            <button
              type="primary"
              htmlType="submit"
              className="px-11 bg-[#0091FF] text-white py-2"
            >
              Save
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditNewBusiness;
