import React from 'react';
import { Button } from 'antd';
import img from '../../public/role-choose.png';

function ChooseRole() {
  const data = [
    {
      title: 'Buyer',
      description:
        '“List your business for sale, manage offers, and close deals securely.”',
    },
    {
      title: 'Seller',
      description:
        '“Browse businesses for sale, compare options, and connect with sellers.”',
    },
    {
      title: 'Broker',
      description:
        '“Browse businesses for sale, compare options, and connect with sellers.”',
    },
    {
      title: 'Franchise Seller',
      description: '“Browse businesses for sale, compare options',
    },
    {
      title: 'Investor',
      description: '“Browse businesses for sale, compare options',
    },
    {
      title: 'Business Idea Lister',
      description: '“Browse businesses for sale, compare options',
    },
    {
      title: 'Asset Seller',
      description: '“Browse businesses for sale, compare options',
    },
  ];
  return (
    <div className="container my-28 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Choose <span className="text-[#00FF3A] ">Your Role</span> to Get
          Started
        </h1>
        <p className="text-center text-base mt-4 mb-12">
          Select the option that best describes you to personalize your
          experience.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default ChooseRole;

const Card = ({ title, description }) => {
  return (
    <div className="flex">
      <div className="w-3/5 h-[300px]">
        <img className="w-full h-full object-cover" src={img} alt={title} />
      </div>
      <div className="w-3/5  relative h-full">
        <div className="absolute backdrop-blur-xl bg-[#0091FF]/15  h-fit py-[42px] px-[20px] right-20 flex items-start justify-center flex-col  top-1/2 transform -translate-y-1/2 w-full rounded">
          <div className="flex gap-2">
            <h1 className="font-bold text-4xl">Become a </h1>
            <span className="text-[#00FF3A] font-bold text-4xl">{title}</span>
          </div>
          <p className="text-black font-bold text-base">{description}</p>
          <Button className="mt-4 px-12 py-6 text-base bg-[#0091FF] text-white hover:!bg-[#0091FF]/80 hover:!text-white border-none font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
