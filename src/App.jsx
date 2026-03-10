
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'
// import About from './components/pages/About'
import Error from './components/pages/Error'
import Blog from './components/pages/Blog'
import Shop from './components/pages/Shop'
import Lookbook from './components/pages/Lookbook'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          {/* <Route path="/about" element={<About/>} /> */}
          <Route path="/blog" element={<Blog/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/lookbook" element={<Lookbook/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App


