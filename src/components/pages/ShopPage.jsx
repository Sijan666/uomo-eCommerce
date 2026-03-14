import React, { useState } from "react";
import ProductforTrendy from "../ProductforTrendy";
import Container from "../Container";
import shopListBackground from "/src/assets/shop_list_bg.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Calvin Shorts",
    productPrice: "$62",
    badge: "-47%",
  },
  {
    id: 2,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Kirby T-Shirt",
    productPrice: "$17",
  },
  {
    id: 3,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Cafeknit Shawl",
    productPrice: "$120",
    offerPrice: "$99",
    badge: "NEW",
  },
  {
    id: 4,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Shirt In Botanical Cheetah Print",
    productPrice: "$62",
  },
  {
    id: 5,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Cotton Jersey T-Shirt",
    productPrice: "$17",
  },
  {
    id: 6,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Zara Dresses",
    productPrice: "$120",
    offerPrice: "$99",
  },
  {
    id: 7,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Shirt In Botanical Cheetah Print",
    productPrice: "$62",
  },
  {
    id: 8,
    productImg: "/src/assets/images/images_1.png",
    productType: "Dresses",
    productTitle: "Cotton Jersey T-Shirt",
    productPrice: "$17",
  },
  {
    id: 9,
    productImg: "/src/assets/images/images_1.png",
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
  "#1a2744",
  "#222",
  "#5c3d2e",
  "#c49a6c",
  "#8b4513",
  "#e8c4a0",
  "#f5c5c5",
  "#e8a0a0",
  "#d4a0c8",
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
const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[#f0f0f0] py-4">
      <button
        className="flex justify-between items-center w-full mb-3"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[11px] font-semibold tracking-[0.1em] text-[#222] uppercase">
          {title}
        </span>
        <span className="text-[#999] text-sm">{open ? "∧" : "∨"}</span>
      </button>
      {open && children}
    </div>
  );
};

// ── Main Shop Page ────────────────────────────────────────────────────────────
const ShopPage = () => {
  const [activeNav, setActiveNav] = useState("Shoes");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceMax, setPriceMax] = useState(537);
  const [sort, setSort] = useState("DEFAULT SORTING");
  const [viewMode, setViewMode] = useState(3);
  const [activePage, setActivePage] = useState(2);
  const [brandSearch, setBrandSearch] = useState("");

  const toggleColor = (c) =>
    setSelectedColors((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  const toggleSize = (s) =>
    setSelectedSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );
  const toggleBrand = (b) =>
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );

  const gridCols =
    viewMode === 2
      ? "grid-cols-2"
      : viewMode === 4
        ? "grid-cols-4"
        : "grid-cols-3";

  return (
    <section>
        {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <div className="max-w-[1800px]  mx-auto bg-white font-Jost">
      
        <div
          className="w-[1800px] h-[440px] flex flex-col items-center justify-center relative object-cover aspect-auto bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${shopListBackground})` }}
        >
          <div className="flex flex-col items-center justify-center w-[852px] h-[140px] relative z-10 my-[150px]">
            <h1 className="text-[60px] text-center font-bold text-[#222222] relative z-10 w-[208px] h-[87px]">
              SHOES
            </h1>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-5 relative z-10">
              {navItems.map((item) => (
                <span
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`text-[16px] font-medium font-Jost uppercase cursor-pointer transition-colors
                ${
                  activeNav === item
                    ? "text-[#222222] border-b-2 border-[#222] pb-px"
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
      <Container>
        <div className="flex">
          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="w-52 shrink-0 border-r border-[#f0f0f0] px-4 py-5">
            <FilterSection title="Product Categories">
              <ul className="space-y-1.5">
                {categories.map((c) => (
                  <li
                    key={c}
                    className="text-xs text-[#555] cursor-pointer hover:text-[#D6001C] transition-colors"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </FilterSection>

            <FilterSection title="Color">
              <div className="flex flex-wrap gap-2">
                {colorsList.map((c) => (
                  <div
                    key={c}
                    onClick={() => toggleColor(c)}
                    style={{ background: c }}
                    className={`w-[18px] h-[18px] rounded-full cursor-pointer transition-transform hover:scale-110
                    ${selectedColors.includes(c) ? "ring-2 ring-offset-1 ring-[#222]" : ""}`}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Sizes">
              <div className="flex flex-wrap gap-1.5">
                {sizesList.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`border text-[11px] px-2.5 py-1 tracking-wide transition-all
                    ${
                      selectedSizes.includes(s)
                        ? "bg-[#222] text-white border-[#222]"
                        : "border-[#d4d4d4] text-[#767676] bg-white hover:bg-[#222] hover:text-white hover:border-[#222]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Brands">
              {/* Search */}
              <div className="flex items-center border border-[#e0e0e0] px-2 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  className="text-xs py-1.5 outline-none w-full bg-transparent text-[#555] placeholder-[#bbb]"
                />
                <svg
                  className="w-3 h-3 text-[#bbb] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>

              <div className="space-y-1.5">
                {brandsList
                  .filter((b) =>
                    b.name.toLowerCase().includes(brandSearch.toLowerCase()),
                  )
                  .map((b) => (
                    <label
                      key={b.name}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-[#222] w-3 h-3"
                          checked={selectedBrands.includes(b.name)}
                          onChange={() => toggleBrand(b.name)}
                        />
                        <span className="text-xs text-[#444]">{b.name}</span>
                      </div>
                      <span className="text-[10px] text-[#bbb]">{b.count}</span>
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
                className="w-full accent-[#D6001C] mt-1"
              />
              <div className="flex justify-between mt-2 text-[11px] text-[#767676]">
                <span>Min Price: $29</span>
                <span>Max Price: ${priceMax}</span>
              </div>
            </FilterSection>
          </aside>

          {/* ── Product Grid ───────────────────────────────────────────────── */}
          <main className="flex-1 px-6 py-5">
            {/* Breadcrumb + Controls */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-[10px] tracking-widest text-[#999] uppercase">
                Home / The Shop
              </p>
              <div className="flex items-center gap-4">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-[11px] border border-[#ddd] px-3 py-1.5 bg-white text-[#555] outline-none tracking-wide cursor-pointer"
                >
                  <option>DEFAULT SORTING</option>
                  <option>PRICE: LOW TO HIGH</option>
                  <option>PRICE: HIGH TO LOW</option>
                  <option>NEWEST</option>
                </select>

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#bbb] tracking-wider mr-1">
                    VIEW
                  </span>
                  {[2, 3, 4].map((v) => (
                    <span
                      key={v}
                      onClick={() => setViewMode(v)}
                      className={`text-xs cursor-pointer font-medium transition-colors
                      ${viewMode === v ? "text-[#222]" : "text-[#bbb] hover:text-[#222]"}`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Product Cards — using ProductforTrendy as reusable card ── */}
            <div className={`grid ${gridCols} gap-5`}>
              {products.map((p) => (
                <ProductforTrendy
                  key={p.id}
                  productImg={p.productImg}
                  imgClassName="object-cover aspect-square"
                  productType={p.productType}
                  productTitle={p.productTitle}
                  productPrice={p.productPrice}
                  offerPrice={p.offerPrice}
                />
              ))}
            </div>

            {/* ── Pagination ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between mt-10 border-t border-[#f0f0f0] pt-5">
              <span
                onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                className="text-xs text-[#444] tracking-widest cursor-pointer hover:text-[#D6001C] transition-colors uppercase"
              >
                ← Prev
              </span>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((p) => (
                  <span
                    key={p}
                    onClick={() => setActivePage(p)}
                    className={`text-xs px-2 py-1 cursor-pointer transition-colors
                    ${
                      activePage === p
                        ? "text-[#222] border-b border-[#222]"
                        : "text-[#767676] hover:text-[#222]"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <span
                onClick={() => setActivePage((p) => Math.min(4, p + 1))}
                className="text-xs text-[#444] tracking-widest cursor-pointer hover:text-[#D6001C] transition-colors uppercase"
              >
                Next →
              </span>
            </div>
          </main>
        </div>
      </Container>
    </section>
  );
};

export default ShopPage;
