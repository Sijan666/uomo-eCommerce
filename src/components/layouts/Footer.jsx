import Container from "../Container";

const Footer = () => {
  return (
    <>
      <section className="bg-[#e4e4e4] w-full">
        <Container className="py-20">
          <div className="grid grid-cols-5 gap-12">
            {/* column 1 */}
            <div>
              <div className="mb-8">
                <img
                  src="./src/assets/footer logo.png"
                  alt="UOMO"
                  className="h-[27px] w-auto"
                />
              </div>
              <div className="text-[#222] text-[14px] leading-6 mb-6">
                <p className="mb-1">
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
              <div className="flex gap-[36px]  text-[14px]">
                <img src="./src/assets/facebook.png" alt="Facebook" />
                <img src="./src/assets/twitter.png" alt="Facebook" />
                <img src="./src/assets/instagram.png" alt="Facebook" />
                <img src="./src/assets/youtube.png" alt="Facebook" />
                <img src="./src/assets/pinterest.png" alt="Facebook" />
                
                
              </div>
            </div>
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
                      Affiliates
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
        </Container>
      </section>
    </>
  );
};

export default Footer;
