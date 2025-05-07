import { Routes, Route } from "react-router"
import Home from "./Components/Pages/Home"
import WhyUs from "./Components/Pages/WhyUs"
import Trainers from "./Components/Pages/Trainers"
import ContactUs from "./Components/Pages/ContactUs"

function App() {
  

  return (
    <>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/WhyUs" element={<WhyUs />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/ContactUs" element={<ContactUs />} />

    </Routes>
    </>
  )
}

export default App
