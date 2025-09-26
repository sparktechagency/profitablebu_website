// src/Pages/CountryLandingPage.jsx
import { useParams } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";

const countryNames = {
  usa: "United States",
  uk: "United Kingdom",
  uae: "United Arab Emirates",
  ca: "Canada",
  au: "Australia",
  za: "South Africa",
};

export default function CountryLandingPage() {
  const { country } = useParams();

  const countryName = countryNames[country] || "Unknown Country";

  return (
    <div className="">
     <HomePage></HomePage>
    </div>
  );
}
