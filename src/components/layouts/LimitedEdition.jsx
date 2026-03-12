import React from "react";
import ProductforTrendy from "/src/components/ProductforTrendy";
import Container from "../Container";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const LimitedEdition = () => {

  const products = [
    {
      id: 1,
      img: "/src/assets/productImage.png",
      type: "Dresses",
      title: "Hub Accent Mirror",
      price: "$29",
    },
    {
      id: 2,
      img: "/src/assets/productImage.png",
      type: "Dresses",
      title: "Hosking Blue Area Rug",
      price: "$62",
    },
    {
      id: 3,
      img: "/src/assets/productImage.png",
      type: "Dresses",
      title: "Hanneman Pouf",
      price: "$17",
    },
    {
      id: 4,
      img: "/src/assets/productImage.png",
      type: "Dresses",
      title: "Cushion Flot Slipcover",
      price: "$129",
      offer: "$99",
    },
    {
      id: 5,
      img: "/src/assets/productImage.png",
      type: "Dresses",
      title: "Cushion Flot Slipcover",
      price: "$129",
      offer: "$99",
    },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16">
      <Container>

        <h3 className="text-center font-Jost text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] text-[#222222] uppercase mb-8 lg:mb-[41px]">
          Limited <span className="font-bold">Edition</span>
        </h3>

        <div className="relative">

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".limited-next",
              prevEl: ".limited-prev",
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductforTrendy
                  className="w-full"
                  imgClassName="w-full aspect-[4/5] object-cover"
                  // make image responsive for various image sizes
                  productImg={item.img}
                  productType={item.type}
                  productTitle={item.title}
                  productPrice={item.price}
                  offerPrice={item.offer}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (design unchanged) */}
          <button className="limited-prev absolute top-1/2 -translate-y-1/2 left-1 md:left-2 lg:-left-10 z-10 cursor-pointer">
            <IoIosArrowBack size={25} className="text-[#767676]"/>
          </button>

          <button className="limited-next absolute top-1/2 -translate-y-1/2 right-1 md:right-2 lg:-right-10 z-10 cursor-pointer">
            <IoIosArrowForward size={25} className="text-[#767676]" />
          </button>

        </div>

      </Container>
    </section>
  );
};

export default LimitedEdition;