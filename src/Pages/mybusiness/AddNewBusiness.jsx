import { Button, ConfigProvider, DatePicker, Form, Input, Select } from 'antd'
import Dragger from 'antd/es/upload/Dragger';
import React, { useRef, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Navigate } from '../Navigate';
import JoditEditor from 'jodit-react';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const AddNewBusiness = () => {
      const editor = useRef(null);
  const [content, setContent] = useState('');
    const [form] = Form.useForm();
    const handleSubmit = (values) => {
        console.log(values)
    };

      const config = {
      readonly: false,
      placeholder: 'Start typings...',
      style: {
          height: 600,
      },
      buttons: [
          'image', 'fontsize', 'bold', 'italic', 'underline', '|',
          'font', 'brush',
          'align'
      ]
  }


    return (
        <div className='container m-auto pb-20 pt-3'>
            <Navigate title={'Add New Business Idea'}></Navigate>
           <div className='bg-white p-3'>
             <Form form={form} onFinish={handleSubmit} layout="vertical">

                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
                <div className=" ">
                    <Form.Item
                        label="Business Title"
                        name="type"
                        rules={[{ required: true, message: "Please input your business Title!" }]}
                    >
                        <Input className='w-full bg-transparent  py-2' placeholder="Fuel Type" />
                    </Form.Item>

                   
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <Form.Item
                        label="Business Category"
                        name="mileage"
                        rules={[{ required: true, message: "Please input Buisiness Category!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>
                     <Form.Item
                        label="Country"
                        name="mileage"
                        rules={[{ required: true, message: "Please input Country!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>

                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <Form.Item
                        label="Location"
                        name="mileage"
                        rules={[{ required: true, message: "Please input Location!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>
                     <Form.Item
                        label="Asking Price"
                        name="mileage"
                        rules={[{ required: true, message: "Please input Asking Price!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>

                </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <Form.Item
                        label="Ownership Type"
                        name="mileage"
                        rules={[{ required: true, message: "Please input Ownership type!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>
                     <Form.Item
                        label="Buisiness Type"
                        name="mileage"
                        rules={[{ required: true, message: "Please input business Type!" }]}
                    >
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#1d4ed8',
                                    borderRadius: 8,
                                    controlHeight: 40,

                                },
                            }}
                        >
                            <Select placeholder="Select Inquiry" className="w-full">
                                <Option value="General_Inquiry">Select</Option>
                                <Option value="Service_Request">Part</Option>
                                <Option value="Partnership_Inquiry">Qz</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>

                </div>

           

            
                    <Form.Item
                        label="Industry Name"
                        name="type"
                        rules={[{ required: true, message: "Please input Indersty Name!" }]}
                    >
                        <Input className='w-full bg-transparent py-2' placeholder="Engine Model" />
                    </Form.Item>
                
           <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
        // onChange={newContent => { }}
      />
      


                <Form.Item className=" pt-3">
                    <button type="primary" htmlType="submit" className="px-11 bg-[#0091FF] text-white py-2">
                        Save
                    </button>
                </Form.Item>
            </Form>
           </div>
        </div>
    )
}

export default AddNewBusiness