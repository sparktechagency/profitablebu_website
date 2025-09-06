import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Checkbox, message } from "antd";
import {
  usePostCheckoutMutation,
  useLazySingleGetCouponQuery,
} from "../redux/api/businessApi";
import { useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api/userApi";

const BrokerAdd = ({ openAddModal, setOpenAddModal, subscriptionId }) => {
  const [form] = Form.useForm();
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  const role = profileData?.data?.role;
  const [selectedPriceObj, setSelectedPriceObj] = useState(null); // Store the full price object
  const [displayPrice, setDisplayPrice] = useState(null);
  const [addCheckout] = usePostCheckoutMutation();
  const [triggerCouponCheck, { data: singleCouponData, isFetching }] =
    useLazySingleGetCouponQuery();
  const navigate = useNavigate();

  // Initialize the selected price and form
  useEffect(() => {
    if (!subscriptionId?.price) return;

    let initialPriceObj;
    if (Array.isArray(subscriptionId.price) && subscriptionId.price.length > 0) {
      initialPriceObj = subscriptionId.price[0]; // Default to first price object
    } else if (typeof subscriptionId.price === "number") {
      initialPriceObj = { price: subscriptionId.price, duration: subscriptionId.duration }; // Fallback for non-array price
    } else {
      initialPriceObj = null;
    }

    setSelectedPriceObj(initialPriceObj);
    setDisplayPrice(initialPriceObj?.price || null);
    form.setFieldsValue({ price: initialPriceObj?.price?.toString() });
  }, [subscriptionId, form]);

  const handleCancel = () => {
    form.resetFields();
    setCouponCode("");
    setShowCoupon(false);
    setDisplayPrice(selectedPriceObj?.price || null);
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
        const newDisplayPrice = selectedPriceObj.price - (selectedPriceObj.price * discount) / 100;
        setDisplayPrice(newDisplayPrice);
        message.success(`Coupon applied! ${discount}% discount`);
      } else {
        message.error("Invalid coupon code");
        setDisplayPrice(selectedPriceObj?.price || null);
      }
    } catch (error) {
      message.error("Invalid coupon code");
      setDisplayPrice(selectedPriceObj?.price || null);
    }
  };

  const handleSubmit = async () => {
    try {
      // Construct payload with selected price and corresponding duration
      const payload = {
        subscriptionId: subscriptionId._id,
        duration: selectedPriceObj?.duration || subscriptionId.duration, // Use duration from selected price object
        price: String(selectedPriceObj?.price), // Use selected price
      };

      if (couponCode && singleCouponData?.data) {
        payload.couponCode = couponCode;
      }

      const res = await addCheckout(payload).unwrap();
      if (res?.success) {
        window.location.href = res?.data;
      }
      handleCancel();
    } catch (err) {
      message.error(err?.data?.message || "Checkout failed");
      console.error("Checkout Failed:", err?.data?.message);
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
          Subscription: {selectedPriceObj?.duration || subscriptionId?.duration}
        </h2>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="price"
            label="Select Price"
            rules={[{ required: true, message: "Please select a price" }]}
          >
            <select
              className="w-full border px-3 py-2 rounded-md"
              value={selectedPriceObj?.price?.toString() || ""}
              onChange={(e) => {
                const selectedPrice = e.target.value;
             
                const priceObj = Array.isArray(subscriptionId?.price)
                  ? subscriptionId.price.find(
                      (p) => p.price.toString() === selectedPrice
                    )
                  : { price: selectedPrice, duration: subscriptionId.duration };
                setSelectedPriceObj(priceObj);
                setDisplayPrice(priceObj?.price || null);
                form.setFieldsValue({ price: selectedPrice });
              }}
            >
              <option value="">-- Select Price --</option>
              {Array.isArray(subscriptionId?.price) &&
                subscriptionId.price.map((p) => (
                  <option key={p?._id || p?.price} value={p?.price}>
                    ${p?.price} ({p?.duration})
                  </option>
                ))}
            </select>
          </Form.Item>
          {displayPrice !== selectedPriceObj?.price && (
            <p className="mt-2 text-green-600">
              Discounted Price: ${displayPrice?.toFixed(2)}
            </p>
          )}
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium">Apply a coupon code</label>
            <Checkbox
              checked={showCoupon}
              onChange={() => setShowCoupon(!showCoupon)}
            />
          </div>
          {showCoupon && (
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

export default BrokerAdd;