import { message, Spin } from "antd";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "./Pages/redux/api/userApi";

const ProtectedRoute = ({ children }) => {
  const { data: profileData, isLoading: profileLoading } = useGetProfileQuery();
  console.log(profileData);
  const role = profileData?.data?.role;
  const location = useLocation();
  const privateRoutes = ["/chat"];
  const planeRoutes = ["/plane"];
  const business = ["/myBusiness/details"];
  const faqs = ["/faqs"];
  const profiles = ["/profilePage"];
  const adds = ["/addnewbusiness"];
  const subscription = ["/subscription"];
  const contacts = ["/buyer-contact-info"];
  const token = localStorage.getItem("accessToken");

  const isPrivate = privateRoutes.includes(location.pathname);
  const isPlane = planeRoutes.includes(location.pathname);
  const businesss = business.includes(location.pathname);
  const faq = faqs.includes(location.pathname);
  const profile = profiles.includes(location.pathname);
  const add = adds.includes(location.pathname);
  const contact = contacts.includes(location.pathname);
    if (profileLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (
    (isPrivate || isPlane || businesss || faq || profile || add || contact) &&
    !token
  ) {
    message.info("Please login first");
    return <Navigate to="/auth/login" replace />;
  }

   if (add && role === "Investor") {
    message.error("Investors are not allowed to add new business");
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
