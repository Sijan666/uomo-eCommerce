
import { Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import RootLayouts from './components/layouts/RootLayouts'
import Error from './components/pages/Error'
import Blog from './components/pages/Blog'
import Shop from './components/pages/Shop'
import ContactUs from './components/pages/ContactUs'
import About from './components/pages/About'
<<<<<<<<< Temporary merge branch 1
import Locator from './components/pages/Locator'
=========
import Lookbook from './components/pages/Lookbook'
>>>>>>>>> Temporary merge branch 2


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
<<<<<<<<< Temporary merge branch 1
           <Route path="/locator" element={<Locator/>} />
=========
          <Route path="/lookbook" element={<Lookbook/>} />
>>>>>>>>> Temporary merge branch 2
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
