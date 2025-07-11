import { ServiceCard } from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Bank Account Opening Services",
    image: "https://i.ibb.co/chbfGyS5/cover.png",
  },
  {
    id: 2,
    title: "Office Space in the Business Center",
    image: "https://i.ibb.co/p6FGBjRF/cover-1.png",
  },
  {
    id: 3,
    title: "Company Formation",
    image: "https://i.ibb.co/HDPQmD7j/cover-2.png",
  },
  {
    id: 4,
    title: "PRO SERVICES",
    image: "https://i.ibb.co/39j7Xz59/cover-3.png",
  },
  {
    id: 5,
    title: "Business Support & Concierge Services",
    image: "https://i.ibb.co/JWs3vnKb/cover-4.png",
  },
  {
    id: 6,
    title: "Bank Account Opening Services",
    image: "https://i.ibb.co/chbfGyS5/cover.png",
  },
];

export default function BusinessFormation() {
  return (
    <div className="container mx-auto px-5 pt-20 pb-10">
      {/* Header Section */}
      <div className="relative flex flex-col items-start gap-5 pl-5 mb-5">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#22C55E] z-[1] rounded-r-full"></div>

        <div className="ml-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0091FF] mb-6 leading-tight">
            Business Formation
          </h1>
          <p className="text-lg md:text-xl text-[#000000] leading-relaxed max-w-2xl">
            Find the perfect business opportunity by applying detailed filters
            to narrow down your search.
          </p>
        </div>
      </div>

      {/* Services Grid - Optimized Layout */}
      <div className="space-y-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
