import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./About.css"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      )
    })

    gsap.from(".journey-step", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".journey",
        start: "top 80%",
      },
    })
  }, [])

  return (
    <main className="about">

      {/* VISION */}
      <section className="about-hero">
        <span className="eyebrow">OUR VISION</span>
        <h1>
          Creating a future where people <br />
          <span>fully control their digital lives</span> <br />
          through AI and blockchain.
        </h1>
      </section>

      {/* MISSION */}
      <section className="mission reveal">
        <span className="eyebrow">OUR MISSION</span>
        <h2>Converging Technologies for Digital Evolution</h2>
        <p>
          We combine the most transformative technologies of our era into a single,
          powerful ecosystem designed to enhance every aspect of your digital existence.
        </p>

        <div className="mission-grid">
          <div className="mission-card">
            <h3>Artificial Intelligence</h3>
            <p>
              Advanced AI systems that learn, adapt, and evolve with each user,
              creating personalized digital experiences.
            </p>
          </div>

          <div className="mission-card">
            <h3>Blockchain Technology</h3>
            <p>
              Immutable, transparent, and secure infrastructure ensuring complete
              data ownership and transaction integrity.
            </p>
          </div>

          <div className="mission-card">
            <h3>Virtual Reality</h3>
            <p>
              Immersive environments where your digital identity comes to life,
              enabling new forms of interaction.
            </p>
          </div>

          <div className="mission-card">
            <h3>Unified Ecosystem</h3>
            <p>
              All technologies seamlessly integrated into one cohesive platform,
              eliminating friction between worlds.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values reveal">
        <span className="eyebrow">OUR VALUES</span>
        <h2>Principles That Guide Us</h2>

        <div className="values-grid">
          <div className="value">
            <h4>Transparency</h4>
            <p>Open and honest in all operations and decisions.</p>
          </div>
          <div className="value">
            <h4>Innovation</h4>
            <p>Pushing boundaries to create life-changing technology.</p>
          </div>
          <div className="value">
            <h4>Excellence</h4>
            <p>Committed to the highest quality in every detail.</p>
          </div>
          <div className="value">
            <h4>Privacy</h4>
            <p>Your data is yours. We protect, never exploit.</p>
          </div>
          <div className="value">
            <h4>Empowerment</h4>
            <p>Giving individuals control of their digital destiny.</p>
          </div>
        </div>
      </section>

      {/* USER JOURNEY */}
      <section className="journey">
        <span className="eyebrow">USER JOURNEY</span>
        <h2>Your Path to Digital Empowerment</h2>

        <div className="journey-line">
          <div className="journey-step">
            <h4>Sign Up</h4>
            <p>Create your MetaLife account</p>
          </div>

          <div className="journey-step">
            <h4>Digital Life</h4>
            <p>Access your personalized space</p>
          </div>

          <div className="journey-step">
            <h4>AI Interaction</h4>
            <p>Connect with your AI companion</p>
          </div>

          <div className="journey-step">
            <h4>Data Marketplace</h4>
            <p>Trade and monetize your data</p>
          </div>

          <div className="journey-step">
            <h4>Earnings</h4>
            <p>Earn from your digital presence</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About
