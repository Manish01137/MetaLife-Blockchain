import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-grid">

        {/* BRAND */}
        <div>
          <h3>✨ MetaLife AI</h3>
          <p>
            Innovating a digital life where boundaries end.
            AI-powered, blockchain-secured, designed for the future.
          </p>

          <div className="socials">
            <span>🐦</span>
            <span>💼</span>
            <span>🐙</span>
            <span>💬</span>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4>Company</h4>
          <a>About</a>
          <a>Team</a>
          <a>Roadmap</a>
          <a>Contact</a>
        </div>

        {/* PRODUCT */}
        <div>
          <h4>Product</h4>
          <a>How It Works</a>
          <a>FAQ</a>
        </div>

        {/* INVESTMENT */}
        <div>
          <h4>Investment</h4>
          <a>Equity Investment</a>
          <a>ICO</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 MetaLife AI. All rights reserved.</p>
        <div className="policies">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
