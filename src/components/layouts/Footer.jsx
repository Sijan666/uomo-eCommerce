import Container from "../Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import Image from "../Image";
import footerLogo from '../../assets/footerLogo.png'
import paymentLogo from '../../assets/paymentLogo.png'
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebookF size={14} />, color: "#222222" },
    { icon: <FaTwitter size={14} />, color: "#767676" },
    { icon: <FaInstagram size={14} />, color: "#222222" },
    { icon: <FaYoutube size={14} />, color: "#222222" },
    { icon: <FaPinterestP size={14} />, color: "#222222" },
  ];

  const footerColumns = [
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Affiliates", "Blog", "Contact Us"]
    },
    {
      title: "SHOP",
      links: ["New Arrivals", "Accessories", "Men", "Women", "Shop All"]
    },
    {
      title: "COMPANY",
      links: ["Customer Service", "My Account", "Find a Store", "Legal & Privacy", "Contact", "Gift Card"]
    }
  ];

  return (
    <section className="bg-[#e4e4e4] relative">
      <Container className="pt-[100px] ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between">
          {/* 1st */}
          <div className="h-[255.26px] ">
            <div className="mb-8">
              <Image imgSrc={footerLogo} className={''}/>
            </div>
            <div className="mt-[45px] text-[#222] text-[14px] leading-6 mb-6">
              <p className="mb-1 whitespace-nowrap font-Jost">1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p className="mb-1 font-Jost">United States</p>
            </div>
            <div className="text-[14px] leading-6 mb-8">
              <p className="font-Jost font-medium text-[#222] mb-1">sale@uomo.com</p>
              <p className="font-Jost font-medium text-[#222]">+1 246-345-0695</p>
            </div>
            <div className="flex md:gap-9 gap-5 mx-auto md:mx-0 md:w-[205px] mt-[47px]">
              {socialIcons.map((item, idx) => (
                <a key={idx} className={`text-[${item.color}] cursor-pointer`}>{item.icon}</a>
              ))}
            </div>
          </div>
          {/* 2nd */}
          <div className="grid md:grid-cols-3 grid-cols-2 md:text-left md:w-[586px] gap-6 ">
            {footerColumns.map((col, i) => (
              <div key={i}>
                <h2 className="font-Jost font-medium text-[#222222] text-[18px] mb-4">{col.title}</h2>
                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <div className="group inline-flex flex-col items-center cursor-pointer">
                        <a className="text-[#222222] font-normal text-[14px] leading-10 font-Jost">{link}</a>
                        <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* 3rd */}
          <div className="col-span-1 ">
            <h2 className="font-Jost font-medium text-[#222222] text-[18px] mb-4">SUBSCRIBE</h2>
            <p className="text-[#222] text-[14px] leading-6 mt-[27px] mb-4 font-Jost">
              Be the first to get the latest news about trends,
              <br />
              promotions, and much more!
            </p>
            <div className="bg-white flex items-center justify-between px-4 h-[55px] mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 font-Jost text-[#222] text-[14px] outline-none bg-transparent placeholder:text-[#222]"
              />
              <button className="font-Jost font-medium text-[#222] text-[14px] ml-2 hover:text-[#D6001C] transition-colors">
                JOIN
              </button>
            </div>
            <p className="font-Jost font-medium text-[#222] text-[15px] mt-[41px]">
              Secure payments
            </p>
            <div className="mt-[11px]">
              <Image imgSrc={paymentLogo}/>
            </div>
          </div>
        </div>
        {/* border */}
        <div className="w-full h-px mt-[88px] bg-[#CFCDCD]"></div>
        <div className="flex flex-col lg:flex-row gap-y-5 justify-between  py-6 mt-[34px]">
          <p className="font-Jost text-[#222] text-[14px] leading-6  whitespace-nowrap">
            ©2020 Uomo
          </p>
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-Jost text-[#767676] text-[14px] leading-6 mr-2">Language</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-Jost text-[#222] text-[14px] leading-6 whitespace-pre">
                  United Kingdom | English
                </span>
                <IoIosArrowUp className="ml-2" />
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-Jost text-[#767676] text-[14px] leading-6 mr-2">Currency</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-Jost text-[#222] text-[14px] leading-6 whitespace-nowrap">$ USD</span>
                <IoIosArrowUp className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="w-[45px] h-[45px] absolute bottom-0 right-0 bg-white p-4 flex items-center justify-center">
        <img src="./src/assets/arrow.png" alt="" />
      </div> */}
    </section>
  );
};

export default Footer;
