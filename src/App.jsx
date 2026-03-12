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
<<<<<<< HEAD
import Login from "./components/pages/Login";
=======
import TermsAndCondition from "./components/pages/TermsAndCondition";

>>>>>>> e14590f2bfbc043a89c482a8ea56b8bb8fbf9b70

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
<<<<<<< HEAD
          <Route path="*" element={<Login />} />
=======
          <Route path="/terms" element={<TermsAndCondition />} />
>>>>>>> e14590f2bfbc043a89c482a8ea56b8bb8fbf9b70
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
