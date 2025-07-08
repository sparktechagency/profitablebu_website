import Header from "./Header";

export default function AboutUs() {
  return (
    <div className="">
      <Header
        title="About Us"
        description="Discover who we are, what we do, and why we're passionate about connecting buyers and sellers around the world."
      />
      <section className="overflow-hidden px-5 pt-20 pb-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <img
                src="./about.png"
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-3xl font-semibold text-[#0091FF]">
                  About Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  Your Step-by-Step Guide to{" "}
                  <span className="text-[#22C55E]">Buying</span> &{" "}
                  <span className="text-[#22C55E]">Selling Businesses</span>
                </h2>
                <p className="mb-5 text-base text-[#000000]">
                  At PBFS.com, we connect aspiring entrepreneurs, seasoned
                  investors, and business owners in a trusted marketplace where
                  buying and selling businesses is seamless, transparent, and
                  secure. Our platform is built to simplify the complex process
                  of business transitions — whether you're looking to start
                  fresh, scale up, or cash out.
                </p>
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
                          We aim to empower individuals and organizations by
                          providing a smart, streamlined platform to explore new
                          business opportunities or successfully exit existing
                          ventures. At PBFS.com, our goal is to make business
                          ownership more accessible and selling more rewarding.
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
                          <p className="text-base text-[#000000]">
                            We connect aspiring entrepreneurs, seasoned
                            investors, and business owners in a trusted
                            marketplace where buying and selling businesses is
                            seamless, transparent, and secure. Our platform is
                            built to simplify the complex process of business
                            transitions — whether you're looking to start fresh,
                            scale up, or cash out.
                          </p>
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
