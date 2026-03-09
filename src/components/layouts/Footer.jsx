import Container from "../Container";

const Footer = () => {
  return (
    <>
      <section className="bg-[#e4e4e4]">
        <Container className="py-[100px]">
          <div className="flex">
            {/* column 1 */}
            <div className="w-[282px] h-[255.26px]">
              <div className="mb-8">
                <img
                  src="./src/assets/footer logo.png"
                  alt="UOMO"
                  className="h-[27px] w-auto"
                />
              </div>
              <div className="mt-[45px] text-[#222] text-[14px] leading-6 mb-6">
                <p className="mb-1 whitespace-nowrap">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622
                </p>
                <p className="mb-1">United States</p>
              </div>
              <div className="text-[14px] leading-6 mb-8">
                <p className="font-['Jost',sans-serif] font-medium text-[#222] mb-1">
                  sale@uomo.com
                </p>
                <p className="font-['Jost',sans-serif] font-medium text-[#222]">
                  +1 246-345-0695
                </p>
              </div>
              <div className="mt-[47] flex gap-[36px] w-[205px] text-[14px]">
                <img src="./src/assets/facebook.png" alt="Facebook" />
                <img src="./src/assets/twitter.png" alt="Facebook" />
                <img src="./src/assets/instagram.png" alt="Facebook" />
                <img src="./src/assets/youtube.png" alt="Facebook" />
                <img src="./src/assets/pinterest.png" alt="Facebook" />
              </div>
            </div>

            {/* gap 79px */}
            <div className="w-[79px]"></div>

            {/* grid for column 2,3,4 */}
            <div className="grid grid-cols-3 w-[586px] ">
              {/* column 2 */}
              <div>
                <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">
                  COMPANY
                </h2>

                <ul className="space-y-2">
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] font-normal text-[14px] leading-10">
                        About Us
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Careers
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Affiliates
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Blog
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Contact Us
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* column 3 */}
              <div>
                <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">
                  SHOP
                </h2>

                <ul className="space-y-2">
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] font-normal text-[14px] leading-10">
                        New Arrivals
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Accessories
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Men
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Women
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Shop All
                      </a>
                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* column 4 */}
              <div>
                <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">
                  COMPANY
                </h2>

                <ul className="space-y-2">
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] font-normal text-[14px] leading-10">
                        Customer Service
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        My Account
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>

                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Find a Store
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Legal & Privacy
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Contact
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group inline-flex flex-col items-center">
                      <a className="text-[#222222] text-[14px] leading-10 ">
                        Gift Card
                      </a>

                      <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* gap 133px */}
            <div className="w-[133px]"></div>

            <div className="col-span-1">
              <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">
                SUBSCRIBE
              </h2>
              <p className="text-[#222] text-[14px] leading-6 mt-[27px] mb-4">
                Be the first to get the latest news about trends,
                <br />
                promotions, and much more!
              </p>
              <div className="bg-white flex items-center justify-between px-4 h-[55px] py-3 mt-[16px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 font-['Jost',sans-serif] text-[#222] text-[14px] outline-none bg-transparent placeholder:text-[#222]"
                />
                <button className="font-['Jost',sans-serif] font-medium text-[#222] text-[14px] ml-2 hover:text-[#D6001C] transition-colors">
                  JOIN
                </button>
              </div>
              <p className="mt-[41px] font-['Jost',sans-serif] font-medium text-[#222] mt-[41px] text-[15px]">
                Secure payments
              </p>
              <img
                src="./src/assets/payment method.png"
                className="w-full h-auto mt-[11px] mt-[11px]"
                alt="payment"
              />
            </div>
          </div>
          <div className="w-full h-[1px] mt-[88px] bg-[#CFCDCD]"></div>
          <div className="flex items-center py-6 mt-[34px]">
            <p className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 mr-[897px] whitespace-nowrap">
              ©2020 Uomo
            </p>

            <div className="flex items-center">
              <span className="font-['Jost',sans-serif] text-[#767676] text-[14px] leading-6 mr-[27px]">
                Language
              </span>

              <div className="flex items-center gap-1 mr-[62px] cursor-pointer">
                <span className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 whitespace-pre">
                  United Kingdom | English
                </span>
                <img src="./src/assets/arrow.png" alt="" />
              </div>
            </div>

            <div className="flex items-center">
              <span className="font-['Jost',sans-serif] text-[#767676] text-[14px] leading-6 mr-[23px]">
                Currency
              </span>

              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 whitespace-nowrap">
                  $ USD
                </span>
                <img src="./src/assets/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </Container>
        <div className="w-[45px] h-[45px] absolute bottom-0 right-0 bg-white p-[16px] flex items-center justify-center">
          <img src="./src/assets/arrow.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Footer;
