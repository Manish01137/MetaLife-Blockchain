import "./Team.css";

export default function Team() {
  return (
    <section className="team-page">
      {/* HERO */}
      <div className="team-hero">
        <span className="eyebrow">OUR TEAM</span>
        <h1>
          Meet the Visionaries <span>Behind MetaLife AI</span>
        </h1>
        <p>
          World-class experts in AI, blockchain, and digital innovation, united
          by a shared vision of transforming digital life.
        </p>
      </div>

      {/* CORE TEAM */}
      <section className="team-section">
        <span className="section-eyebrow">LEADERSHIP</span>
        <h2>Core Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" alt="" />
            <h3>Alexander Chen</h3>
            <span>CEO & Founder</span>
            <p>
              Former Google AI Research Lead. 15+ years in AI and machine learning.
              PhD from MIT.
            </p>
          </div>

          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="" />
            <h3>Sarah Mitchell</h3>
            <span>CTO</span>
            <p>
              Ex-Amazon Principal Engineer. Blockchain expert with 10+ years
              experience.
            </p>
          </div>

          <div className="team-card">
            <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39" alt="" />
            <h3>Michael Roberts</h3>
            <span>Chief Blockchain Officer</span>
            <p>
              Ethereum Foundation contributor. Founded 2 successful blockchain
              startups.
            </p>
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="team-section light">
        <span className="section-eyebrow">EXPERT GUIDANCE</span>
        <h2>Advisors</h2>

        <div className="advisor-grid">
          <div className="advisor-card">
            <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7" alt="" />
            <h4>Dr. James Wilson</h4>
            <span>Technical Advisor</span>
            <p>Stanford Professor of Computer Science. AI Ethics expert.</p>
          </div>

          <div className="advisor-card">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="" />
            <h4>Maria Garcia</h4>
            <span>Strategic Advisor</span>
            <p>Former Sequoia Capital Partner. Invested in 40+ startups.</p>
          </div>

          <div className="advisor-card">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="" />
            <h4>Robert Johnson</h4>
            <span>Legal Advisor</span>
            <p>Partner at top-tier law firm. Crypto regulatory expert.</p>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="team-section">
        <span className="section-eyebrow">TRUSTED BY</span>
        <h2>Strategic Partners</h2>

        <div className="partners-grid">
          <div>Amazon Web Services</div>
          <div>Microsoft Azure</div>
          <div>Chainlink</div>
          <div>Polygon</div>
          <div>Consensys</div>
          <div>Y Combinator</div>
        </div>
      </section>
    </section>
  );
}
