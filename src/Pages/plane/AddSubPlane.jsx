import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Checkbox, message } from "antd";
import {
  usePostCheckoutMutation,
  useLazySingleGetCouponQuery,
} from "../redux/api/businessApi";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api/userApi";

const AddSubPlane = ({ openAddModal, setOpenAddModal, subscriptionId }) => {
  console.log(subscriptionId);
  const [form] = Form.useForm();
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  console.log(profileData);
  const role = profileData?.data?.role;
  const [discountedPrice, setDiscountedPrice] = useState(null);
  console.log(discountedPrice);
  const [addCheckout] = usePostCheckoutMutation();

  const [triggerCouponCheck, { data: singleCouponData, isFetching }] =
    useLazySingleGetCouponQuery();
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [displayPrice, setDisplayPrice] = useState(null);
  useEffect(() => {
    const initialPrice = Array.isArray(subscriptionId?.price)
      ? subscriptionId.price[0]
      : subscriptionId?.price;
    setSelectedPrice(initialPrice);
    setDisplayPrice(initialPrice);
    form.setFieldsValue({ price: initialPrice });
  }, [subscriptionId, form]);

  const handleCancel = () => {
    form.resetFields();
    setCouponCode("");
    if (
      Array.isArray(subscriptionId?.price) &&
      subscriptionId.price.length > 0
    ) {
      setDiscountedPrice(subscriptionId.price[0]);
    } else if (typeof subscriptionId?.price === "number") {
      setDiscountedPrice(subscriptionId.price);
    } else {
      setDiscountedPrice(null);
    }
    setShowCoupon(false);
    setOpenAddModal(false);
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) {
      message.warning("Please enter a coupon code");
      return;
    }
    try {
      const res = await triggerCouponCheck({ couponCode }).unwrap();
      if (res?.data) {
        const discount = res.data.discount;
        const newDisplayPrice =
          selectedPrice - (selectedPrice * discount) / 100;
        setDisplayPrice(newDisplayPrice);
        message.success(`Coupon applied! ${discount}% discount`);
      } else {
        message.error("Invalid coupon code");
        setDisplayPrice(selectedPrice);
      }
    } catch (error) {
      message.error("Invalid coupon code");
      setDisplayPrice(selectedPrice);
    }
  };

  console.log(subscriptionId);

  const handleSubmit = async () => {
    try {
      const payload = {
        subscriptionId: subscriptionId._id,
        price: String(selectedPrice)
      };
      console.log(payload);
      if (couponCode && singleCouponData?.data) {
        payload.couponCode = couponCode;
      }
      const res = await addCheckout(payload).unwrap();
      if (res?.success) {
        window.location.href = `${res?.data}`;
      }
      handleCancel();
    } catch (err) {
      console.error("Checkout Failed:", err);
    }
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={450}
    >
      <div className="mt-4 mb-6">
        <h2 className="text-center text-xl font-semibold mb-6">
          Subscription: {subscriptionId?.duration}
        </h2>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="price"
            label="Select Price"
            rules={[{ required: true, message: "Please select a price" }]}
          >
            <select
              className="w-full border px-3 py-2 rounded-md"
              value={selectedPrice}
              onChange={(e) => {
                const price = e.target.value;
                setSelectedPrice(price);
                setDisplayPrice(price);
              }}
            >
              <option value="">-- Select Price --</option>
              {subscriptionId?.price?.map((p, index) => (
                <option key={index} value={p}>
                  ${p}
                </option>
              ))}
            </select>
          </Form.Item>

          {displayPrice !== selectedPrice && (
            <p className="mt-2 text-green-600">
              Discounted Price: ${displayPrice.toFixed(2)}
            </p>
          )}

          <div className="flex items-center justify-between mb-2">
            <label className="font-medium">Apply a coupon code</label>
            <Checkbox
              checked={showCoupon}
              onChange={() => setShowCoupon(!showCoupon)}
            />
          </div>
          {showCoupon &&
            Array.isArray(subscriptionId?.price) &&
            subscriptionId.price.length > 0 && (
              <Form.Item name="couponCode" label="Coupon Code">
                <div className="flex">
                  <Input
                    placeholder="Enter your coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="py-2 rounded-tl rounded-tr-none rounded-br-none rounded-bl"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="bg-[#0091FF] hover:bg-blue-600 rounded-tl-none rounded-tr rounded-br rounded-bl-none text-white px-4"
                    disabled={isFetching}
                  >
                    {isFetching ? "Checking..." : "Apply"}
                  </button>
                </div>
              </Form.Item>
            )}

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="w-full py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-[#0091FF] text-white rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddSubPlane;

//  <Modal
//       centered
//       open={openAddModal}
//       onCancel={handleCancel}
//       footer={null}
//       width={450}
//     >
//       <div className="mt-4 mb-6">
//         <h2 className="text-center text-xl font-semibold mb-6">
//           Subscription: 1 Months Plan
//         </h2>

//         <Form form={form} onFinish={handleSubmit} layout="vertical">
//           {/* Price */}
//           <Form.Item label="Amount:-" name="price" initialValue={299}>
//             <Input
//               prefix="$"
//               suffix="(-0%)"
//               type="number"
//               className="py-2"
//               disabled
//             />
//           </Form.Item>

//           {/* Coupon Toggle */}
//           <div className="flex items-center justify-between mb-2">
//             <label className="font-medium">Apply a coupon code</label>
//             <Checkbox
//               checked={showCoupon}
//               onChange={() => setShowCoupon(!showCoupon)}
//             />
//           </div>

//           {/* Coupon Code Input */}
//           {showCoupon && (
//             <Form.Item name="couponCode" label="Coupon Code">
//               <div className="flex ">
//                 <Input placeholder="Enter your coupon code" className="py-2 rounded-tl rounded-tr-none rounded-br-none rounded-bl" />
//                 <button
//                   type="button"
//                   className="bg-[#0091FF] hover:bg-blue-600 rounded-tl-none rounded-tr rounded-br rounded-bl-none text-white px-4 "
//                 >
//                   Apply
//                 </button>
//               </div>
//             </Form.Item>
//           )}

//           {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button
//               type="button"
//               className="w-full py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="w-full py-2 bg-[#0091FF] text-white rounded-md hover:bg-blue-600"
//             >
//               Continue
//             </button>
//           </div>
//         </Form>
//       </div>
//     </Modal>
