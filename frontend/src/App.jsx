import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// REAL PAGES
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

// TEMP PAGE (until built)
const Page = ({ title }) => (
  <div
    style={{
      padding: "160px 8% 120px",
      fontSize: "42px",
      fontWeight: "600",
      color: "#0f172a",
    }}
  >
    {title}
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT (REAL PAGE) */}
        <Route path="/about" element={<About />} />

        {/* TEMP ROUTES (WILL REPLACE ONE BY ONE) */}
        <Route path="/how-it-works" element={<Page title="How It Works" />} />
        <Route path="/ico" element={<Page title="ICO" />} />
        <Route path="/equity" element={<Page title="Equity Investment" />} />
        <Route path="/roadmap" element={<Page title="Roadmap" />} />
        <Route path="/team" element={<Page title="Team" />} />
        <Route path="/faq" element={<Page title="FAQ" />} />
        <Route path="/contact" element={<Page title="Contact" />} />
        <Route path="/signup" element={<Page title="Sign Up" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
