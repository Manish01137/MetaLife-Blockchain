import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// REAL PAGES
import Home from "./pages/Home/Home"

// TEMP PAGES (until you build them)
const Page = ({ title }) => (
  <div style={{ padding: "140px 8%", fontSize: "36px" }}>
    {title}
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* REAL HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* PLACEHOLDERS */}
        <Route path="/about" element={<Page title="About" />} />
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
