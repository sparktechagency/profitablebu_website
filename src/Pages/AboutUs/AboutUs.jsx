import Header from "./Header";

export default function AboutUs() {
  return (
    <div className="">
      <Header
        title="About Us"
        description="Discover who we are, what we do, and why we're passionate about connecting buyers and sellers around the world."
      />
      <section className="overflow-hidden  pt-20 pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 -mx-4">
            <div className="">
              <img
                src="./about.png"
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <div className="">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-3xl font-semibold text-[#0091FF]">
                  About Us ProfitableBusinessesForSale.com (PBFS)
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Your Trusted Partner in
                  <span className="text-[#22C55E]">Buying</span> &{" "}
                  <span className="text-[#22C55E]">Selling Businesses Online</span>
                </h2>
                <p className="mb-5 text-base text-[#000000]">
                  At PBFS <span className="font-semibold">(Profitable Businesses For Sale)</span>, we make it easier than ever for aspiring entrepreneurs, seasoned investors, and business owners to connect in a safe, transparent, and reliable online marketplace. Whether you’re planning to <span className="font-semibold">buy a business, sell your existing business</span>, or explore fresh investment opportunities, PBFS is your step-by-step guide to business success.
                </p>
                <p>We understand that buying or selling a business is a big decision. That’s why our platform is designed to simplify the entire process—helping you find the right buyer, the right seller, and the right deal with confidence.</p>
                <div>
                  <div>
                    <div className="flex items-center gap-5">
                      <img
                        src="./rocket.png"
                        alt=""
                        className="w-[80px] h-[80px] rounded-2xl"
                      />
                      <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-[#000000]">
                          Our Mission
                        </h1>
                        <p className="text-base text-[#000000]">
                          Our mission is simple: to <span className="font-semibold">empower entrepreneurs, investors, and business owners</span> by creating a smarter, streamlined way to explore new business opportunities or exit successfully. At PBFS, we believe business ownership should be more <span className="font-semibold">accessible, profitable, and rewarding</span> for everyone.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-5">
                        <img
                          src="./light.png"
                          alt=""
                          className="w-[100px] h-[100px] rounded-2xl"
                        />
                        <div className="flex flex-col gap-2">
                          <h1 className="text-2xl font-bold text-[#000000]">
                            What We Do
                          </h1>
                          <p>At ProfitableBusinessesForSale.com, we provide more than just listings—we provide opportunities. Our platform allows:
                          </p>
                          <ul className="list-disc pl-6 mb-6">
                            <li>Entrepreneurs to <span className="font-semibold">start fresh with the right business.</span>
                            </li>
                            <li>Buyers and Investors to <span className="font-semibold">scale their portfolios with profitable businesses.</span>
                            </li>
                            <li>Business owners to <span className="font-semibold">successfully sell and maximize returns.</span>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
