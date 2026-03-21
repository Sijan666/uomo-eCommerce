import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import RootLayouts from "./components/layouts/RootLayouts";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/pages/Home"));
const Error = lazy(() => import("./components/pages/Error"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Shop = lazy(() => import("./components/pages/Shop"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const About = lazy(() => import("./components/pages/About"));
const Lookbook = lazy(() => import("./components/pages/Lookbook"));
const Locator = lazy(() => import("./components/pages/Locator"));
const TermsAndCondition = lazy(() => import("./components/pages/TermsAndCondition"));
const BlogList = lazy(() => import("./components/pages/BlogList"));
const ComingSoon = lazy(() => import("./components/pages/ComingSoon"));
const Cart = lazy(() => import("./components/pages/Cart"));
const Shipping = lazy(() => import("./components/pages/Shipping"));
const ReceivedOrder = lazy(() => import("./components/pages/ReceivedOrder"));
const Login = lazy(() => import("./components/pages/Login"));
const Register = lazy(() => import("./components/pages/Register"));
const Tracking = lazy(() => import("./components/pages/Tracking"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));
const ShopPage = lazy(() => import("./components/pages/ShopPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/shopList" element={<ShopPage />} />
          <Route path="/locator" element={<Locator />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/receivedOrder" element={<ReceivedOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;