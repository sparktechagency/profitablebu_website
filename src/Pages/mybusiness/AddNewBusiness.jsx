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
const { Option } = Select;
import Dragger from "antd/es/upload/Dragger";
import React, { useEffect, useRef, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Navigate } from "../Navigate";
import JoditEditor from "jodit-react";
import { Country, State, City } from "country-state-city";
import {
  useAddBusinessMutation,
  useGetCategtoryQuery,
} from "../redux/api/businessApi";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const AddNewBusiness = () => {
  const { data: categorie, isLoading, isError } = useGetCategtoryQuery();
  const [addBusiness] = useAddBusinessMutation();
  const editor = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState("");
  const [form] = Form.useForm();
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const [countries, setCountries] = useState([]);
  console.log(countries);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);


const [selectedCountry, setSelectedCountry] = useState(null);
const [selectedState, setSelectedState] = useState(null);
const [selectedCity, setSelectedCity] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    const category = categorie.data.find((cat) => cat.categoryName === value);
    setSubCategories(category?.subCategories || []);
    form.setFieldsValue({ subCategory: null });
  };
console.log(selectedState)
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);


const handleCountryChange = (value) => {
  const country = countries.find((c) => c.isoCode === value);
  setSelectedCountry(country); 
  setStates(State.getStatesOfCountry(value));
  setCities([]);
  form.setFieldsValue({ state: undefined, city: undefined });
};

// State Change
const handleStateChange = (value) => {
  const state = states.find((s) => s.isoCode === value);
  setSelectedState(state); 
  setCities(City.getCitiesOfState(selectedCountry?.isoCode, value));
  form.setFieldsValue({ city: undefined });
};


const handleCityChange = (value) => {
  const city = cities.find((c) => c.name === value);
  setSelectedCity(city); 
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
  const handleSubmit = async (values) => {
    console.log(values);

    try {
      const formData = new FormData();

      fileList.forEach((file, index) => {
        formData.append("business_image", file.originFileObj);
      });
      formData.append("title", values?.title);




    formData.append("country", selectedCountry?.isoCode );
    formData.append("countryName", selectedCountry?.name);

    formData.append("state", selectedState?.name );


    formData.append("city", selectedCity?.name );


      formData.append("category", values?.category);
      formData.append("subCategory", values?.subCategory);

      // formData.append("location", values?.location);
      formData.append("askingPrice", values?.askingPrice);
      formData.append("businessType", values?.businessType);
      formData.append("price", values?.price);
      formData.append("ownerShipType", values?.ownerShipType);
      formData.append("reason", values?.reason);
      formData.append("description", content);
      const res = await addBusiness(formData);

      console.log(res);
      if (res.data?.message) {
        message.success(res.data?.message);
      } else {
        message.error(res?.error?.data?.message);
      }
    } catch (errr) {
      console.log(errr);
      message.error(errr?.data?.message);
    }
  };
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 600,
    },
    buttons: [
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
    if (categorie?.data?.length) {
      const defaultCategory = categorie.data[0];
      setSelectedCategory(defaultCategory.categoryName);
      setSubCategories(defaultCategory.subCategories || []);
      form.setFieldsValue({ category: defaultCategory.categoryName });
    }
  }, [categorie]);

  return (
    <div className="container m-auto pb-20 pt-3">
      <Navigate title={"Add New Business Information"}></Navigate>
      <div className="bg-white p-3">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item label="Photos">
            <Upload
              style={{ width: "100%", height: "200px" }}
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              multiple={false}
              maxCount={1}
              accept=".png,.jpg,.jpeg"
            >
              <p className="text-4xl">
                <InboxOutlined />
              </p>

              <p>Click or drag file Max 1 MB Only PNG and JPG</p>

              {fileList.length < 1 && "+ Upload"}
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
          <div className="">
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
                <Select
                  style={{ height: "48px" }}
                  placeholder="Select Sub Category"
                >
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
                onChange={handleCityChange}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Option value="Select Asking Price">Select</Option>
                <Option value="Under $50K">Under $50K</Option>
                <Option value="$50K - $100K">$50K - $100K</Option>
                <Option value="$100K - $250K">$100K - $250K</Option>
                <Option value="$250K - $500K">$250K - $500K</Option>
                <Option value="$500K - $1M">$500k - $1M</Option>
                <Option value="Over $1M">Over $1M</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Price Range (USD)" name="price">
              <Input
                type="number"
                className="w-full bg-transparent py-3"
                placeholder="price"
              />
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
                <Option value="Other">Other</Option>
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
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item label="Reason for Selling" name="reason">
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
          <div className="mt-2">
            Note: Write your description like you’re telling a success story. Focus on what makes your business valuable and exciting for buyers.
          </div>

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

export default AddNewBusiness;
