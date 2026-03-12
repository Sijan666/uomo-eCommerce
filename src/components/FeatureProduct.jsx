
import Image from "./Image";
import Button from "./Button";

const FeaturedProducts = ({imgSrc,imgAlt,price,category}) => {
  return (
    <>
      <div className="relative group overflow-hidden hover:bg-red">
        <Image imgSrc={imgSrc} imgAlt={imgAlt} />
        <div className="absolute bottom-0 left-0 right-0 w-full h-0 bg-[#D6001C]/80 group-hover:h-full transition-all duration-500 ease-in-out"></div>
        <div className=" absolute bottom-10 left-10">
          <p className=" group-hover:text-white transition-color duration-500 text-[18px] font-medium font-Jost text-[#222222] pb-2">{price}</p>
          <h3 className="  group-hover:text-white transition-color duration-500 pb-[15px] text-[#000000] text-[26px] font-medium font-Jost">
            {category}
          </h3>
          <Button className={"hover:after:w-12.5 group-hover:after:bg-white group-hover:text-white transition-color duration-500 text-[14px] font-medium beforeAfterwhite"} btnText={"SHOP NOW"} />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;