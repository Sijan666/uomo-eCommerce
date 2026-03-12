
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import RootLayouts from './components/layouts/RootLayouts'

import Error from './components/pages/Error'
import StoreLocation from './components/pages/StoreLocation'


function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/store" element={<StoreLocation/>} />
        </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App


