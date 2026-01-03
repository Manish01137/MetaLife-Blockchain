import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Footer.css"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".footer-brand", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%"
        }
      })

      gsap.from(".footer-links > div", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 85%"
        }
      })

      gsap.from(".footer-socials .social", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 80%"
        }
      })

      gsap.from(".footer-bottom", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 75%"
        }
      })

    })

    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-box"></div>
            <span>MetaLife AI</span>
          </div>

          <p>
            Innovating a digital life where boundaries end.
            AI-powered, blockchain-secured, built for the future.
          </p>

          <div className="footer-socials">
            <a className="social twitter"></a>
            <a className="social linkedin"></a>
            <a className="social github"></a>
            <a className="social telegram"></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a>About</a>
            <a>Team</a>
            <a>Roadmap</a>
            <a>Contact</a>
          </div>

          <div>
            <h4>Product</h4>
            <a>How It Works</a>
            <a>FAQ</a>
            <a>Security</a>
          </div>

          <div>
            <h4>Investment</h4>
            <a>ICO</a>
            <a>Equity Investment</a>
            <a>Tokenomics</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 MetaLife AI. All rights reserved.</p>

        <div className="footer-policies">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
