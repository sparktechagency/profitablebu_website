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
import { InboxOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Navigate } from "../Navigate";
import JoditEditor from "jodit-react";
import { useGetSingleBusinessQuery, useUpdateSingleMutation } from "../redux/api/businessApi";
import { useParams } from "react-router-dom";
import { countryData } from "../../dummy-data/DummyData";
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
const EditNewBusiness = () => {
  const { id: businessId } = useParams();
  const [fileList, setFileList] = useState([]);
  const [updateSingleData] = useUpdateSingleMutation();
  const { data: businessDetails } = useGetSingleBusinessQuery({ businessId });

    console.log(businessId)

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    const id = businessId
     try {
          const formData = new FormData();
    
          fileList.forEach((file) => {
            formData.append("business-image", file.originFileObj);
          });
          formData.append("title", values?.title);
          formData.append("category", values?.category);
          formData.append("country", values?.country);
          formData.append("location", values?.location);
          formData.append("askingPrice", values?.askingPrice);
          formData.append("ownershipType", values?.ownershipType);
          formData.append("businessType", values?.businessType);
          formData.append("industryName", values?.industryName);
          formData.append("description", content);
    
          const res = await updateSingleData({formData,id});
          console.log(res);
          message.success(res.data.message);
        } catch (error) {
          console.error(error);
          message.error(message?.data?.error);
        } finally {
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
    const data = businessDetails.data;

    // Set form values
    form.setFieldsValue({
      title: data.title,
      category: data.category,
      country: data.country,
      location: data.location,
      askingPrice: data.askingPrice,
      ownershipType: data.ownershipType,
      businessType: data.businessType,
      industryName: data.industryName,
    });

    // Set description content
    setContent(data.description);

    // Set existing image
    if (data.cover_image) {
      setFileList([
        {
          uid: '-1',
          name: 'cover_image.png',
          status: 'done',
          url: data.image,
        },
      ]);
    }
  }
}, [businessDetails, form]);


  return (
    <div className="container m-auto pb-20 pt-3">
      <Navigate title={"Edit Business Information"}></Navigate>
      <div className="bg-white p-3">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
         
          <Form.Item label="Photos">
            <Upload
              style={{ width: "100%" }}
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              multiple={true}
            >
              <p className="text-4xl">
                <InboxOutlined />
              </p>

              <p className="">Click or drag file to this area to upload</p>

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
                className="w-full bg-transparent  py-2"
                placeholder="Fuel Type"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Business Category"
              name="category"
              rules={[
                { required: true, message: "Please input Buisiness Category!" },
              ]}
            >
              <Select placeholder="Select Category" className="w-full">
                <Option>Select</Option>
                <Option value="Restaurant">Restaurant</Option>
                <Option value="Retail">Retail</Option>
                <Option value="E-commerce">E-commerce</Option>
                <Option value="Franchise">Franchise</Option>
                <Option value="Services">Services</Option>
                <Option value="Manufacturing">Manufacturing</Option>
                <Option value="Education">Education</Option>
                <Option value="Automotive">Automotive</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Select Your Country "
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
              >
                {countryData.map((country) => (
                  <Select.Option key={country.code} value={country.code}>
                    <div className="flex items-center gap-2">
                      <img src={country.flag} alt={country.name} />{" "}
                      {country.name}
                    </div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Please input Location!" }]}
            >
              <Select placeholder="Select Inquiry" className="w-full">
                <Option value="">Select</Option>
                <Option value="Dubai">Dubai</Option>
                <Option value="Sharjah">Sharjah</Option>
                <Option value="Ajman">Ajman</Option>
                <Option value="Umm Ai-Quwain">Umm Ai-Quwain</Option>
                <Option value="Fujairah">Fujairah</Option>
                <Option value="Ras Ai Khaimah">Ras Ai Khaimah</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Asking Price"
              name="askingPrice"
              rules={[
                { required: true, message: "Please input Asking Price!" },
              ]}
            >
              <Select placeholder="Select Inquiry" className="w-full">
                <Option value="General_Inquiry">Select</Option>
                <Option value="Under $50k">Under $50k</Option>
                <Option value="$50k - $100k">$50k - $100k</Option>
                <Option value="$100k - $250k">$100k - $250k</Option>
                <Option value="$250k - $500k">$250k - $500k</Option>
                <Option value="$500k - $1M">$500k - $1M</Option>
                <Option value="Over $1M">Over $1M</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Ownership Type"
              name="ownershipType"
              rules={[
                { required: true, message: "Please input Ownership type!" },
              ]}
            >
              <Select placeholder="Select Inquiry" className="w-full">
                <Option value="General_Inquiry">Select</Option>
                <Option value="Service_Request">Sole Proprietorship</Option>
                <Option value="Partnership_Inquiry">Partnership</Option>
                <Option value="Partnership_Inquiry">Corporation</Option>
                <Option value="Partnership_Inquiry">LLC</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Buisiness Type"
              name="businessType"
              rules={[
                { required: true, message: "Please input business Type!" },
              ]}
            >
              <Select placeholder="Select Inquiry" className="w-full">
                <Option value="General_Inquiry">Select</Option>
                <Option value="Service_Request">Franchise</Option>
                <Option value="Partnership_Inquiry">Independent</Option>
                <Option value="Partnership_Inquiry">Startup</Option>
                <Option value="Partnership_Inquiry">Home-Based</Option>
                <Option value="Partnership_Inquiry">Online</Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            label="Industry Name"
            name="industryName"
            rules={[{ required: true, message: "Please input Indersty Name!" }]}
          >
            <Input
              className="w-full bg-transparent py-2"
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
