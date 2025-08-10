import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  message,
  Select,
} from "antd";

import { Navigate } from "../Navigate";
import { IoCameraOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../redux/api/baseApi";
const EditProfile = () => {
  const { data: profileData, isLoading } = useGetProfileQuery();
  const navigate = useNavigate()
  const [updateProfile] = useUpdateProfileMutation();
    const [image, setImage] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const formData = new FormData();

   if (image) formData.append("profile-image", image);
      formData.append("name", values?.name);
      formData.append("mobile", values?.mobile);
      formData.append("location", values?.location);
      formData.append("profession", values?.profession);
      formData.append("description", values?.description);

      const res = await updateProfile(formData);
      console.log(res);
      message.success(res.data.message);
      navigate('/profilePage')
    } catch (error) {
      console.error(error);
      message.error(error?.data?.message);
    } finally {
    }
  };
 useEffect(() => {
    if (profileData?.data) {
      const admin = profileData.data;
      form.setFieldsValue({
        name: admin.name,
        email: admin.email,
        mobile: admin.mobile || "",
        location: admin.location || "",
        profession: admin.profession || "",
        description: admin.description || "",
        // address: admin.address || "",
      });
    }
  }, [profileData, form]);

  return (
    <div className="container m-auto md:mt-10 mt-20">
      <Navigate title={"Edit profile "}></Navigate>
      <div className="bg-white p-3">
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <div className="text-center mb-6">
            <div className="relative w-[140px] h-[124px] mx-auto">
              <input
                type="file"
                onChange={handleImageChange}
                id="img"
                style={{ display: "none" }}
              />
              <img
                className="w-[140px] h-[140px] rounded-full object-cover"
                src={`${image ? URL.createObjectURL(image) : `${imageUrl}/uploads/profile-image/${profileData?.data?.image}`}`}
                alt="Admin Profile"
              />

              <label
                htmlFor="img"
                className="absolute top-[80px] -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              >
                <IoCameraOutline className="text-black " />
              </label>
            </div>

            <p className="text-lg font-semibold mt-4">{profileData?.data?.name}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <Input
                className="w-full bg-transparent  py-2"
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input Email!" }]}
            >
              <Input
              disabled
                className="w-full bg-transparent py-2"
                placeholder="Email"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label="Conatct Number"
              name="mobile"
              rules={[
                { required: true, message: "Please input Contact Number!" },
              ]}
            >
              <Input
                className="w-full bg-transparent py-2"
                placeholder="Contact Number"
              />
            </Form.Item>
            <Form.Item
              label="Profession"
              name="profession"
              rules={[{ required: true, message: "Please input Profession!" }]}
            >
              <Input
                className="w-full bg-transparent  py-2"
                placeholder="Fuel Type"
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please input Location!" }]}
          >
            <Input
              className="w-full bg-transparent py-2"
              placeholder="Location"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <Input.TextArea
              className="w-full py-2"
              rows={4}
              placeholder="Type Here..."
            />
          </Form.Item>

          <Form.Item className=" pt-3">
            <button
              type="primary"
              htmlType="submit"
              className="px-11 bg-[#0091FF] text-white py-2"
            >
              Update Profile
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
