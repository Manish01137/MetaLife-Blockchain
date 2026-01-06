import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// REAL PAGES
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import HowItWorks from "./pages/HowItWorks/HowItWorks"
import Roadmap from "./pages/Roadmap/Roadmap"
import Team from "./pages/Team/Team"
import FAQ from "./pages/FAQ/FAQ"
import Contact from "./pages/Contact/Contact" // ✅ ADD THIS

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

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* HOW IT WORKS */}
        <Route path="/how-it-works" element={<HowItWorks />} />

        {/* ROADMAP */}
        <Route path="/roadmap" element={<Roadmap />} />

        {/* TEAM */}
        <Route path="/team" element={<Team />} />

        {/* FAQ */}
        <Route path="/faq" element={<FAQ />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* TEMP ROUTES */}
        <Route path="/ico" element={<Page title="ICO" />} />
        <Route path="/equity" element={<Page title="Equity Investment" />} />
        <Route path="/signup" element={<Page title="Sign Up" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
