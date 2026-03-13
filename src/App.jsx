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
          <Route path="/locator" element={<Locator />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
