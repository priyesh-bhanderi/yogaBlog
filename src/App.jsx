import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import BlogDetails from "./Pages/BlogDetails"

function App() {

  return (
    <div className="bg-[#EAEAEA]">
      <BrowserRouter>
        {/* <Header /> */}
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog-details" element={<BlogDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
