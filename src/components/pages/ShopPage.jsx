import React, { useState } from "react";
import ProductforTrendy from "../ProductforTrendy";
import shopListBackground from "/src/assets/shop_list_bg.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import product from '../../assets/productImage.png'

// ── Data ──────────────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    productImg: product,
    productType: "Dresses",
    productTitle: "Calvin Shorts",
    productPrice: "$62",
    badge: "-47%",
  },
  {
    id: 2,
    productImg: product,
    productType: "Dresses",
    productTitle: "Kirby T-Shirt",
    productPrice: "$17",
  },
  {
    id: 3,
    productImg: product,
    productType: "Dresses",
    productTitle: "Cafeknit Shawl",
    productPrice: "$120",
    offerPrice: "$99",
    badge: "NEW",
  },
  {
    id: 4,
    productImg: product,
    productType: "Dresses",
    productTitle: "Shirt In Botanical Cheetah Print",
    productPrice: "$62",
  },
  {
    id: 5,
    productImg: product,
    productType: "Dresses",
    productTitle: "Cotton Jersey T-Shirt",
    productPrice: "$17",
  },
  {
    id: 6,
    productImg: product,
    productType: "Dresses",
    productTitle: "Zara Dresses",
    productPrice: "$120",
    offerPrice: "$99",
  },
  {
    id: 7,
    productImg: product,
    productType: "Dresses",
    productTitle: "Shirt In Botanical Cheetah Print",
    productPrice: "$62",
  },
  {
    id: 8,
    productImg: product,
    productType: "Dresses",
    productTitle: "Cotton Jersey T-Shirt",
    productPrice: "$17",
  },
  {
    id: 9,
    productImg: product,
    productType: "Dresses",
    productTitle: "Zora Dresses",
    productPrice: "$120",
    offerPrice: "$99",
  },
];

const navItems = [
  "#StayHome",
  "New In",
  "Jackets",
  "Hoodies",
  "Men",
  "Women",
  "Trousers",
  "Accessories",
  "Shoes",
];
const categories = [
  "Dresses",
  "Sweatshirts",
  "Jackets",
  "Jeans",
  "Men",
  "Shorts",
  "Swimwear",
  "T-shirts & Tops",
  "Trousers",
  "Jumpers & Cardigans",
];
const colorsList = [
  "#0A2472",
  "#D7BB4F",
  "#282828",
  "#B1D6E8",
  "#9C7539",
  "#D29B48",
  "#E6AE95",
  "#D76B67",
  "#BFDCC4",
];
const sizesList = ["XS", "S", "M", "L", "XL", "XXL"];
const brandsList = [
  { name: "Adidas", count: 3 },
  { name: "Balmain", count: 7 },
  { name: "Balenciaga", count: 10 },
  { name: "Burberry", count: 37 },
  { name: "Kenzo", count: 93 },
  { name: "Givenchy", count: 1077 },
  { name: "Zara", count: 44 },
];

// ── Collapsible Filter Section ────────────────────────────────────────────────
const FilterSection = ({ title, children, className = "" }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full">
      <button
        className="flex items-center justify-between w-full relative"
        onClick={() => setOpen(!open)}
      >
        <h4
          className={`reflex flex-col items-center justify-center text-[18px] font-medium font-jost text-[#222222] uppercase ${className}`}
        >
          {title}
        </h4>

        <div className="text-[#222222] absolute right-0 top-1/2 -translate-y-1/2">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>

      {open && children}
    </div>
  );
};

// ── Sidebar Content (shared between drawer and desktop) ───────────────────────
const SidebarContent = ({
  selectedColors,
  toggleColor,
  selectedSize,
  toggleSize,
  selectedBrands,
  toggleBrand,
  brandSearch,
  setBrandSearch,
  priceMax,
  setPriceMax,
}) => (
  <div className="flex flex-col gap-y-10 lg:gap-y-15">
    <FilterSection title="Product Categories">
      <ul className="space-y-3 py-1 mt-[13px]">
        {categories.map((c) => (
          <li
            key={c}
            className="text-[14px] font-regular font-Jost text-[#222222] cursor-pointer hover:text-[#767676] transition-colors"
          >
            {c}
          </li>
        ))}
      </ul>
    </FilterSection>

    <FilterSection title="Color">
      <div className="flex flex-wrap gap-x-[25px] gap-y-[26px] mt-[23px]">
        {colorsList.map((c) => (
          <div
            key={c}
            onClick={() => toggleColor(c)}
            style={{ background: c }}
            className={`w-4 h-4 rounded-full cursor-pointer transition-transform hover:scale-110
              ${selectedColors.includes(c) ? "ring-2 ring-offset-2 ring-[#222222]" : ""}`}
          />
        ))}
      </div>
    </FilterSection>

    <FilterSection title="Sizes">
      <div className="flex flex-wrap gap-1.5 mt-[23px]">
        {sizesList.map((s) => (
          <button
            key={s}
            onClick={() => toggleSize(s)}
            className={`text-[14px] font-jost font-normal border w-[58px] h-8 transition-all
              ${
                selectedSize === s
                  ? "bg-[#222222] text-white border-[#222222]"
                  : "border-[#767676] text-[#222222] bg-white hover:bg-[#222222] hover:text-white hover:border-[#222222]"
              }`}
          >
            {s}
          </button>
        ))}
      </div>
    </FilterSection>

    <FilterSection title="Brands">
      {/* Search */}
      <div className="h-[55px] flex items-center border border-[#e0e0e0] mt-[18px]">
        <input
          type="text"
          placeholder="Search"
          value={brandSearch}
          onChange={(e) => setBrandSearch(e.target.value)}
          className="w-full h-[55px] pl-[17px] text-[14px] font-jost font-normal outline-none bg-transparent text-[#222222] placeholder-[#222222]"
        />
        <svg
          className="w-4 h-4 text-[#222222] shrink-0 mr-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>

      <div className="w-full mt-[19px] space-y-6 flex flex-col">
        {brandsList
          .filter((b) =>
            b.name.toLowerCase().includes(brandSearch.toLowerCase()),
          )
          .map((b) => (
            <label
              key={b.name}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="accent-[#222222] w-4 h-4"
                  checked={selectedBrands.includes(b.name)}
                  onChange={() => toggleBrand(b.name)}
                />
                <span className="text-[14px] font-jost font-normal text-[#222222]">
                  {b.name}
                </span>
              </div>
              <span className="text-[14px] font-jost font-normal text-[#222222]">
                {b.count}
              </span>
            </label>
          ))}
      </div>
    </FilterSection>

    <FilterSection title="Price">
      <input
        type="range"
        min={29}
        max={937}
        value={priceMax}
        onChange={(e) => setPriceMax(Number(e.target.value))}
        className="w-full accent-[#222222] mt-[11px] h-1.5"
      />
      <div className="h-10 flex items-center justify-between text-[14px] text-[#767676] font-Jost font-normal">
        <span>Min Price: $29</span>
        <span>Max Price: ${priceMax}</span>
      </div>
    </FilterSection>
  </div>
);

// ── Main Shop Page ────────────────────────────────────────────────────────────
const ShopPage = () => {
  const [activeNav, setActiveNav] = useState("Shoes");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceMax, setPriceMax] = useState(537);
  const [sort, setSort] = useState("DEFAULT SORTING");
  const [viewMode, setViewMode] = useState(3);
  const [activePage, setActivePage] = useState(2);
  const [brandSearch, setBrandSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleColor = (c) =>
    setSelectedColors((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  const toggleSize = (size) => setSelectedSize(size);
  const toggleBrand = (b) =>
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );

  // Responsive grid: respect the user's viewMode on desktop,
  // but cap at 2 cols on tablet and 1 col on mobile.
  const gridCols =
    viewMode === 2
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : viewMode === 4
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  const filterProps = {
    selectedColors,
    toggleColor,
    selectedSize,
    toggleSize,
    selectedBrands,
    toggleBrand,
    brandSearch,
    setBrandSearch,
    priceMax,
    setPriceMax,
  };

  return (
    <section className="max-w-[1800px] mx-auto">
      {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <div className="w-full font-Jost">
        <div
          className="w-full h-[280px] sm:h-[360px] lg:h-[440px] flex flex-col items-center justify-center relative object-cover bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopListBackground})` }}
        >
          <div className="flex flex-col items-center justify-center px-4 relative z-10">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] text-center font-bold text-[#222222] relative z-10 mb-4 lg:mb-[26px]">
              SHOES
            </h1>

            <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-7 relative z-10 pb-0.5">
              {navItems.map((item) => (
                <span
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`text-[13px] sm:text-[16px] font-medium font-Jost uppercase cursor-pointer transition-colors
                    ${
                      activeNav === item
                        ? "beforeAfterLine"
                        : "hover: beforeAfterBlack"
                    }`}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1417px] mx-auto mt-9 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Mobile filter toggle */}
        <div className="flex lg:hidden mb-5">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-x-2 text-[14px] font-Jost font-medium text-[#222222] uppercase border border-[#222222] px-4 py-2"
          >
            <RiEqualizerLine className="text-[16px]" />
            Filters
          </button>
        </div>

        {/* ── Mobile Filter Drawer ──────────────────────────────────────── */}
        {/* Overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
        )}
        {/* Drawer panel */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 overflow-y-auto transition-transform duration-300 lg:hidden
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0e0e0]">
            <span className="text-[16px] font-Jost font-medium text-[#222222] uppercase">
              Filters
            </span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-[#222222] text-[22px]"
            >
              <IoClose />
            </button>
          </div>
          <div className="px-5 py-6">
            <SidebarContent {...filterProps} />
          </div>
        </div>

        <div className="flex gap-x-10 xl:gap-x-15">
          {/* ── Desktop Sidebar ───────────────────────────────────────────── */}
          <aside className="hidden lg:flex flex-col w-[260px] xl:w-[300px] shrink-0">
            <SidebarContent {...filterProps} />
          </aside>

          {/* ── Product Grid ───────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb + Controls */}
            <div className="flex flex-wrap items-center justify-between gap-y-3 mb-6 sm:mb-8">
              <p className="text-[14px] font-Jost font-medium text-[#222222] uppercase">
                Home / The Shop
              </p>
              <div className="flex items-center gap-x-4 sm:gap-x-[82px]">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-Jost font-medium text-[13px] sm:text-[14px] border-b-[3px] border-[#222222] px-2.5 py-1.5 bg-white text-[#222222] outline-none cursor-pointer"
                >
                  <option>DEFAULT SORTING</option>
                  <option>PRICE: LOW TO HIGH</option>
                  <option>PRICE: HIGH TO LOW</option>
                  <option>NEWEST</option>
                </select>

                <div className="flex items-center gap-1.5">
                  <span className="text-[14px] font-Jost font-medium text-[#222222] mr-[11px]">
                    VIEW
                  </span>
                  {[2, 3, 4].map((v) => (
                    <span
                      key={v}
                      onClick={() => setViewMode(v)}
                      className={`text-[14px] font-Jost font-medium text-[#222222] cursor-pointer transition-colors
                        ${viewMode === v ? "text-[#222222]" : "text-[#767676] hover:text-[#222222]"}`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Product Cards ── */}
            <div className={`grid ${gridCols} gap-5 sm:gap-6 lg:gap-7`}>
              {products.map((p) => (
                <ProductforTrendy
                  key={p.id}
                  productImg={p.productImg}
                  imgClassName="w-full h-[260px] sm:h-[320px] lg:h-[400px] object-cover aspect-4/5"
                  productType={p.productType}
                  productTitle={p.productTitle}
                  productPrice={p.productPrice}
                  offerPrice={p.offerPrice}
                />
              ))}
            </div>

            {/* ── Pagination ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between mt-10 sm:mt-[50px] mb-[60px] sm:mb-[101px]">
              <span
                onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                className="flex gap-x-2 items-center text-[14px] font-Jost font-medium text-[#222222] cursor-pointer hover:text-[#767676] transition-colors uppercase"
              >
                <MdKeyboardArrowLeft /> Prev
              </span>

              <div className="flex items-center gap-x-4 sm:gap-x-5">
                {[1, 2, 3, 4].map((p) => (
                  <span
                    key={p}
                    onClick={() => setActivePage(p)}
                    className={`text-[16px] font-Jost font-medium text-[#222222] cursor-pointer transition-colors
                      ${
                        activePage === p
                          ? "text-[#222222] border-b border-[#222222]"
                          : "text-[#767676] hover:text-[#222222] hover:border-[#222222]"
                      }`}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <span
                onClick={() => setActivePage((p) => Math.min(4, p + 1))}
                className="flex gap-x-2 items-center text-[14px] font-Jost font-medium text-[#222222] tracking-widest cursor-pointer hover:text-[#767676] transition-colors uppercase"
              >
                Next <MdKeyboardArrowRight />
              </span>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
