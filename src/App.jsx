import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import BlogDetails from "./Pages/BlogDetails"
import LandingPage from "./Pages/LandingPage"

function App() {

  return (
    <div className="bg-[#EAEAEA]">
      <BrowserRouter>
        <Header />
        <div className="container mx-auto px-5 mb-5">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog-details" element={<BlogDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
