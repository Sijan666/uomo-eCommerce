import React, { useState } from "react";
import Container from "../Container";
import blog1 from "../../assets/bloglist.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const blogData = {
  img: blog1,
  author: "ADMIN",
  date: "APRIL 05, 2020",
  desc: "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.",
};

const categories = [
  { label: "ALL", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
  { label: "COMPANY", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
  { label: "FASHION", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
  { label: "STYLE", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
  { label: "TRENDS", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
  { label: "BEAUTY", blogs: [
    { ...blogData, id: 1, title: "Us yielding Fish sea night night the said him two" },
    { ...blogData, id: 2, title: "Given Set was without from god divide rule Hath" },
    { ...blogData, id: 3, title: "Woman with good shoes is never be ugly place" },
  ]},
];

const getVisiblePages = (active) => {
  if (active <= 4) return [1, 2, 3, 4];
  if (active === 5) return [1, 2, 3, 4, 5];
  return [1, 2, 3, 4, 5, 6];
};

const BlogList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slide, setSlide] = useState("in");
  const [direction, setDirection] = useState("next");

  const animate = (newIndex, dir) => {
    setDirection(dir);
    setSlide("out");
    setTimeout(() => {
      setActiveIndex(newIndex);
      setSlide("in");
    }, 300);
  };

  const handleNext = () => {
    if (activeIndex < categories.length - 1) animate(activeIndex + 1, "next");
  };

  const handlePrev = () => {
    if (activeIndex > 0) animate(activeIndex - 1, "prev");
  };

  const currentCategory = categories[activeIndex];
  const pageNum = activeIndex + 1;
  const visiblePages = getVisiblePages(pageNum);

  const slideClass =
    slide === "out"
      ? direction === "next"
        ? "opacity-0 -translate-x-8"
        : "opacity-0 translate-x-8"
      : "opacity-100 translate-x-0";

  return (
    <div>
      <Container className="pt-[90px] pb-[140px]">
        <h1 className="text-[35px] font-bold font-Jost text-[#222222] uppercase mb-[11px]">
          The Blog
        </h1>

        {/* Filter Labels */}
        <div className="mb-[50px] flex flex-wrap gap-y-4 gap-x-10">
          {categories.map((cat, i) => (
            <span
              key={cat.label}
              className={`font-Jost font-medium text-[14px] relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#222222] after:transition-all after:duration-300
                ${activeIndex === i
                  ? "text-[#222222] after:w-full"
                  : "text-[#767676] after:w-0"
                }`}
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Blog List */}
        <div className={`transition-all duration-300 ${slideClass}`}>
          {currentCategory.blogs.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-[51px] mb-[50px]">
              <div className="flex-shrink-0 w-full sm:w-[690px]">
                <img src={item.img} alt={item.title} className="w-full h-[500px] object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-Jost text-[14px] text-[#767676] mb-[10px]">
                  BY {item.author} &nbsp;&nbsp; {item.date}
                </p>
                <h2 className="font-Jost font-medium text-[18px] lg:text-[20px] text-[#222222] leading-[28px] mb-[15px]">
                  {item.title}
                </h2>
                <p className="font-Jost text-[13px] lg:text-[14px] text-[#767676] leading-[24px] mb-[20px]">
                  {item.desc}
                </p>
                <button className="beforeAfter font-Jost font-medium text-[12px] text-[#222222] self-start">
                  CONTINUE READING
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-[10px]">
          <button
            onClick={handlePrev}
            className={`flex items-center gap-1 font-Jost text-[13px] font-medium ${activeIndex === 0 ? "text-[#CCCCCC] cursor-not-allowed" : "text-[#222222] cursor-pointer"}`}
          >
            <MdKeyboardArrowLeft size={18} /> PREV
          </button>

          <div className="flex gap-6">
            {visiblePages.map((num) => (
              <span
                key={num}
                className={`font-Jost text-[13px] font-medium relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#222222] after:transition-all after:duration-300
                  ${pageNum === num
                    ? "text-[#222222] after:w-full"
                    : "text-[#767676] after:w-0"
                  }`}
              >
                {num}
              </span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`flex items-center gap-1 font-Jost text-[13px] font-medium ${activeIndex === categories.length - 1 ? "text-[#CCCCCC] cursor-not-allowed" : "text-[#222222] cursor-pointer"}`}
          >
            NEXT <MdKeyboardArrowRight size={18} />
          </button>
        </div>

      </Container>
    </div>
  );
};

export default BlogList;