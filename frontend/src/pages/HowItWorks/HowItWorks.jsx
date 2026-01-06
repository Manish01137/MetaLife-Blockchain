import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    desc:
      "Sign up in minutes with just your email. Your journey to digital empowerment begins with a simple, secure registration process.",
    points: [
      "Quick email verification",
      "Secure password setup",
      "Optional Web3 wallet connection",
    ],
    side: "left",
  },
  {
    id: 2,
    title: "Access Your Digital Life",
    desc:
      "Enter your personalized digital space. A unique environment tailored to your preferences, interests, and goals.",
    points: [
      "Customizable dashboard",
      "Personal digital identity",
      "Unified data management",
    ],
    side: "right",
  },
  {
    id: 3,
    title: "Interact with AI Assistant",
    desc:
      "Meet your AI companion—an intelligent assistant that learns from you and helps optimize your digital experience.",
    points: [
      "24/7 AI availability",
      "Personalized recommendations",
      "Natural language interaction",
    ],
    side: "left",
  },
  {
    id: 4,
    title: "Buy or Sell Data Securely",
    desc:
      "Access the decentralized data marketplace. Trade your data on your terms while maintaining complete privacy and control.",
    points: [
      "Encrypted transactions",
      "Fair market pricing",
      "Complete data ownership",
    ],
    side: "right",
  },
  {
    id: 5,
    title: "Earn from Your Digital Presence",
    desc:
      "Monetize your digital footprint. Earn META tokens and build real value from your online activities and data contributions.",
    points: [
      "Token rewards",
      "Passive income streams",
      "Transparent earnings",
    ],
    side: "left",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-wrapper">
      {/* HEADER */}
      <div className="how-header">
        <span className="how-eyebrow">HOW IT WORKS</span>
        <h1>Your Journey to Digital Freedom</h1>
        <p>
          Five simple steps to transform how you interact with the digital
          world. No complexity, just seamless integration of AI and blockchain
          technology.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        <div className="timeline-line" />

        {steps.map((step) => (
          <div
            key={step.id}
            className={`timeline-row ${step.side}`}
          >
            <div className="timeline-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <ul>
                {step.points.map((p, i) => (
                  <li key={i}>✓ {p}</li>
                ))}
              </ul>
            </div>

            <div className="timeline-dot">{step.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
