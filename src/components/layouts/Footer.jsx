import Container from "../Container";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

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
      <Container className="py-[100px]">
        <div className="flex">

         
          <div className="w-[282px] h-[255.26px]">
            <div className="mb-8">
              <img
                src="./src/assets/footer logo.png"
                alt="UOMO"
                className="h-[27px] w-auto"
              />
            </div>

            <div className="mt-[45px] text-[#222] text-[14px] leading-6 mb-6">
              <p className="mb-1 whitespace-nowrap">1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
              <p className="mb-1">United States</p>
            </div>

            <div className="text-[14px] leading-6 mb-8">
              <p className="font-['Jost',sans-serif] font-medium text-[#222] mb-1">sale@uomo.com</p>
              <p className="font-['Jost',sans-serif] font-medium text-[#222]">+1 246-345-0695</p>
            </div>

            <div className="flex gap-[36px] w-[205px] mt-[47px]">
              {socialIcons.map((item, idx) => (
                <a key={idx} className={`text-[${item.color}]`}>{item.icon}</a>
              ))}
            </div>
          </div>

         
          <div className="w-[79px]"></div>

        
          <div className="grid grid-cols-3 w-[586px] gap-x-6">

            {footerColumns.map((col, i) => (
              <div key={i}>
                <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">{col.title}</h2>
                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <div className="group inline-flex flex-col items-center">
                        <a className="text-[#222222] font-normal text-[14px] leading-10">{link}</a>
                        <div className="w-full h-[3px] bg-[#222222] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

      
          <div className="w-[133px]"></div>

         
          <div className="col-span-1">
            <h2 className="font-['Jost',sans-serif] font-medium text-[#222222] text-[18px] mb-4">SUBSCRIBE</h2>
            <p className="text-[#222] text-[14px] leading-6 mt-[27px] mb-4">
              Be the first to get the latest news about trends,
              <br />
              promotions, and much more!
            </p>

            <div className="bg-white flex items-center justify-between px-4 h-[55px] mt-[16px]">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 font-['Jost',sans-serif] text-[#222] text-[14px] outline-none bg-transparent placeholder:text-[#222]"
              />
              <button className="font-['Jost',sans-serif] font-medium text-[#222] text-[14px] ml-2 hover:text-[#D6001C] transition-colors">
                JOIN
              </button>
            </div>

            <p className="font-['Jost',sans-serif] font-medium text-[#222] text-[15px] mt-[41px]">
              Secure payments
            </p>
            <img
              src="./src/assets/payment method.png"
              alt="payment"
              className="w-full h-auto mt-[11px]"
            />
          </div>
        </div>

        <div className="w-full h-[1px] mt-[88px] bg-[#CFCDCD]"></div>

        <div className="flex items-center py-6 mt-[34px]">
          <p className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 mr-[897px] whitespace-nowrap">
            ©2020 Uomo
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-['Jost',sans-serif] text-[#767676] text-[14px] leading-6 mr-1">Language</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 whitespace-pre">
                  United Kingdom | English
                </span>
                <img src="./src/assets/arrow.png" alt="" />
              </div>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-['Jost',sans-serif] text-[#767676] text-[14px] leading-6 mr-1">Currency</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-['Jost',sans-serif] text-[#222] text-[14px] leading-6 whitespace-nowrap">$ USD</span>
                <img src="./src/assets/arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>

     
      <div className="w-[45px] h-[45px] absolute bottom-0 right-0 bg-white p-[16px] flex items-center justify-center">
        <img src="./src/assets/arrow.png" alt="" />
      </div>
    </section>
  );
};

export default Footer;
