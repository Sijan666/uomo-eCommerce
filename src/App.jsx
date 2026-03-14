import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import RootLayouts from "./components/layouts/RootLayouts";
import Error from "./components/pages/Error";
import Blog from "./components/pages/Blog";
import Shop from "./components/pages/Shop";
import ContactUs from "./components/pages/ContactUs";
import About from "./components/pages/About";
import Lookbook from "./components/pages/Lookbook";
import Locator from "./components/pages/Locator";
import TermsAndCondition from "./components/pages/TermsAndCondition";
import BlogList from "./components/pages/BlogList";
import ComingSoon from "./components/pages/ComingSoon";
import Cart from "./components/pages/Cart";
import Shipping from "./components/pages/Shipping";
import ReceivedOrder from "./components/pages/ReceivedOrder";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Tracking from "./components/pages/Tracking";
import ShopPage from "./components/pages/ShopPage";


function App() {
  return (
    <>
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
          <Route path="/receivedOrder" element={<ReceivedOrder/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/tracking" element={<Tracking/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
