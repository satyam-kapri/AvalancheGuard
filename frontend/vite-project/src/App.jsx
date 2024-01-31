import MapContainer from "./components/MapContainer"
import Navbar from "./components/Navbar"
import Training from "./components/Training"
import Home from "./components/home"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
 
  return (
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/training" element={<Training/>}></Route>
      <Route path="/map" element={<MapContainer/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
