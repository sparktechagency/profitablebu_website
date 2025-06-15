import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'


import { Navigate } from '../Navigate';
import { IoCameraOutline } from 'react-icons/io5';
import { useState } from 'react';
const EditProfile = () => {
       const [form] = Form.useForm();
        const handleSubmit = (values) => {
            console.log(values)
        };
      const [image, setImage] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className='container m-auto'>
        <Navigate title={'Edit profile '}></Navigate>
           <div className='bg-white p-3'>
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
            style={{ width: 140, height: 140, borderRadius: "100%" }}
            src={`${
              image
                ? URL.createObjectURL(image)
                : `ddd`
            }`}
            alt="Admin Profile"
          />
    
            <label
              htmlFor="img"
              className="absolute top-[80px] -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <IoCameraOutline className="text-black " />
            </label>
       
        </div>

        <p className="text-lg font-semibold mt-4">
         foisal
        </p>
      </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please input your Name!" }]}
                    >
                        <Input className='w-full bg-transparent  py-2' placeholder="Name" />
                    </Form.Item>
                        <Form.Item
                        label="Email"
                        name="type"
                        rules={[{ required: true, message: "Please input Email!" }]}
                    >
                        <Input className='w-full bg-transparent  py-2' placeholder="Email" />
                    </Form.Item>

                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <Form.Item
                        label="Conatct Number"
                        name="type"
                        rules={[{ required: true, message: "Please input Contact Number!" }]}
                    >
                        <Input className='w-full bg-transparent  py-2' placeholder="Contact Number" />
                    </Form.Item>
                        <Form.Item
                        label="Profession"
                        name="type"
                        rules={[{ required: true, message: "Please input Profession!" }]}
                    >
                        <Input className='w-full bg-transparent  py-2' placeholder="Fuel Type" />
                    </Form.Item>

                </div>
               

           

            
                    <Form.Item
                        label="Location"
                        name="type"
                        rules={[{ required: true, message: "Please input Location!" }]}
                    >
                        <Input className='w-full bg-transparent py-2' placeholder="Location" />
                    </Form.Item>
                
        <Form.Item
                                label="Description"
                                name="feedback"
                                rules={[{ required: true, message: "Please input description!" }]}
                            >
                                <Input.TextArea className='w-full   py-2' rows={4} placeholder="Type Here..." />
                            </Form.Item>
      


                <Form.Item className=" pt-3">
                    <button type="primary" htmlType="submit" className="px-11 bg-[#0091FF] text-white py-2">
                        Update Profile
                    </button>
                </Form.Item>
            </Form>
           </div>
    </div>
  )
}

export default EditProfile