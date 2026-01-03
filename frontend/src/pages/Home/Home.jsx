import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.css"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {

    /* HERO TIMELINE */
    gsap.timeline()
      .from(".badge", { opacity: 0, y: -20, duration: .8 })
      .from(".hero h1", { opacity: 0, y: 40, duration: .9 }, "-=.4")
      .from(".hero p", { opacity: 0, y: 30, duration: .8 }, "-=.5")
      .from(".hero-actions button", {
        opacity: 0,
        y: 30,
        stagger: .2,
        duration: .7
      }, "-=.4")

    /* SCROLL SECTIONS */
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          }
        }
      )
    })

    /* STATS COUNT ANIMATION */
    gsap.utils.toArray(".stat strong").forEach(stat => {
      const value = stat.getAttribute("data-value")
      gsap.fromTo(stat, { innerText: 0 }, {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 90%"
        }
      })
    })

    /* PROGRESS BAR */
    gsap.fromTo(".bar span",
      { width: "0%" },
      {
        width: "67%",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ico-progress",
          start: "top 85%"
        }
      }
    )

  }, [])

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <span className="badge">The Future of Digital Life</span>

        <h1>
          MetaLife AI <br />
          <span>Innovating a Digital Life</span>
        </h1>

        <p>
          Experience the next generation of digital existence powered by advanced
          AI intelligence and secured by blockchain technology.
        </p>

        <div className="hero-actions">
          <button className="btn primary">Start Now →</button>
          <button className="btn outline">Join as Investor</button>
        </div>
      </section>

      {/* AI RECOMMENDATIONS */}
      <section className="recommendations reveal">
        <h2>AI-Powered Recommendations</h2>

        <div className="recommend-box">
          Consider diving deeper into our ICO section to find the best investment
          opportunities tonight.
        </div>

        <div className="recommend-cards">
          <div className="card">
            <h3>Explore ICO Opportunities</h3>
            <p>Discover upcoming ICO projects with high growth potential.</p>
            <span>Explore Now →</span>
          </div>

          <div className="card">
            <h3>Learn About Equity Investments</h3>
            <p>Understand how equity investments work for better decisions.</p>
            <span>Explore Now →</span>
          </div>

          <div className="card">
            <h3>Check Our Roadmap</h3>
            <p>Get insights into our future plans and strategies.</p>
            <span>Explore Now →</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features reveal">
        <h2>Revolutionizing Digital Existence</h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>Personal AI Intelligence</h3>
            <p>Your AI companion that learns and evolves with you.</p>
          </div>

          <div className="feature">
            <h3>Customized Digital Life</h3>
            <p>Build and manage your digital presence in one ecosystem.</p>
          </div>

          <div className="feature">
            <h3>Decentralized Data Marketplace</h3>
            <p>Monetize your data securely while keeping ownership.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats reveal">
        <h2>Real-Time Platform Metrics</h2>

        <div className="stats-grid">
          <div className="stat">
            <strong data-value="125">0</strong>K+
            <span>Registered Users</span>
          </div>
          <div className="stat">
            <strong data-value="45">0</strong>M
            <span>Trading Volume</span>
          </div>
          <div className="stat">
            <strong data-value="850">0</strong>K+
            <span>Tokens Distributed</span>
          </div>
          <div className="stat">
            <strong data-value="99.9">0</strong>%
            <span>Uptime</span>
          </div>
        </div>

        <div className="ico-progress">
          <p>$6.7M of $10M raised • Private Sale</p>
          <div className="bar"><span /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Ready to Transform Your Digital Future?</h2>
        <p>
          Join thousands of pioneers building their digital legacy with MetaLife AI.
        </p>

        <div className="hero-actions">
          <button className="btn primary">Buy META Tokens →</button>
          <button className="btn outline">Learn More</button>
        </div>
      </section>

    </main>
  )
}

export default Home
