import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>
          Let's Start a <span>Conversation</span>
        </h1>
        <p>
          Have questions about MetaLife AI? Want to partner with us? We'd love
          to hear from you.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        {/* AI CHAT */}
        <div className="contact-card chat-card">
          <h2>AI Support Chat</h2>

          <div className="chat-status">
            <span className="dot"></span>
            AI Assistant Online
          </div>

          <div className="quick-questions">
            <button>What are your office hours?</button>
            <button>How can I invest?</button>
            <button>Tell me about the ICO</button>
            <button>What is META token?</button>
          </div>

          <div className="chat-box">
            Hello! I'm here to help answer your questions instantly. Ask me
            anything about MetaLife AI, or use the contact form for detailed
            inquiries.
          </div>

          <div className="chat-footer">
            <input placeholder="Type your question..." />
            <button>➤</button>
          </div>

          <div className="chat-meta">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉ hello@metalife.ai</span>
            <span>🕘 9AM–6PM PST</span>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-card info-card">
          <h2>Reach Out to Us</h2>

          <div className="info-box">
            <strong>Email Us</strong>
            <p>hello@metalife.ai</p>
          </div>

          <div className="info-box">
            <strong>Call Us</strong>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="info-box">
            <strong>Visit Us</strong>
            <p>San Francisco, CA</p>
          </div>

          <div className="socials">
            <button>𝕏</button>
            <button>in</button>
            <button>⌂</button>
            <button>💬</button>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-card form-card">
          <h2>How Can We Help?</h2>

          <div className="form-row">
            <input placeholder="Your Name" />
            <input placeholder="Email Address" />
          </div>

          <input placeholder="Subject" />
          <textarea placeholder="Tell us more about your inquiry..." />

          <button className="submit-btn">
            Send Message ➤
          </button>
        </div>
      </section>
    </div>
  )
}
