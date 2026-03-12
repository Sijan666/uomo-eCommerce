
import { Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import RootLayouts from './components/layouts/RootLayouts'
import Error from './components/pages/Error'
import Blog from './components/pages/Blog'
import Shop from './components/pages/Shop'
import ContactUs from './components/pages/ContactUs'
import About from './components/pages/About'
import Locator from './components/pages/Locator'
import Lookbook from './components/pages/Lookbook'
import BlogList from './components/pages/BlogList'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<About/>} />
           <Route path="/locator" element={<Locator/>} />
          <Route path="/lookbook" element={<Lookbook/>} />
          <Route path="/list" element={<BlogList/>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
