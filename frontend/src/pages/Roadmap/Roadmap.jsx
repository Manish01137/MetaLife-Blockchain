import "./Roadmap.css";

const roadmapData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Concept & Development",
    status: "completed",
    time: "Q1 - Q2 2024",
    points: [
      "Core concept development",
      "Team formation",
      "Smart contract development",
      "Whitepaper publication",
      "Initial funding round",
      "Security audits",
    ],
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Platform Launch",
    status: "progress",
    time: "Q3 - Q4 2024",
    progress: 65,
    points: [
      "Private sale launch",
      "AI assistant integration",
      "Partnership announcements",
      "Beta platform release",
      "Community building",
      "Mobile app development",
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "AI & Marketplace Expansion",
    status: "upcoming",
    time: "Q1 - Q2 2025",
    points: [
      "Data marketplace launch",
      "Advanced AI features",
      "Cross-chain integration",
      "Enterprise solutions",
      "Governance implementation",
      "Staking rewards program",
    ],
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Global Scaling",
    status: "upcoming",
    time: "Q3 2025 & Beyond",
    points: [
      "Global expansion",
      "Major exchange listings",
      "Virtual reality integration",
      "Metaverse presence",
      "DAO governance",
      "Continuous innovation",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="roadmap-page">
      {/* HERO */}
      <div className="roadmap-hero">
        <span className="eyebrow">OUR JOURNEY</span>
        <h1>
          Building the Future <span>Step by Step</span>
        </h1>
        <p>
          Follow our strategic roadmap as we revolutionize the intersection of
          AI, blockchain, and digital life.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="roadmap-timeline">
        <div className="roadmap-line" />

        {roadmapData.map((item, index) => (
          <div
            key={item.id}
            className={`roadmap-row ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className={`roadmap-card ${item.status}`}>
              <div className="card-header">
                <span className="phase">{item.phase}</span>
                <h3>{item.title}</h3>
              </div>

              <div className={`status ${item.status}`}>
                {item.status === "completed" && "Completed"}
                {item.status === "progress" && "In Progress"}
                {item.status === "upcoming" && "Upcoming"}
                <span>{item.time}</span>
              </div>

              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {item.progress && (
                <div className="progress-wrap">
                  <div className="progress-label">
                    Phase Progress <strong>{item.progress}%</strong>
                  </div>
                  <div className="progress-bar">
                    <span style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              )}
            </div>

            <div className={`roadmap-dot ${item.status}`}>
              {item.id}
            </div>
          </div>
        ))}
      </div>

      {/* FOOT CTA */}
      <div className="roadmap-end">
        <h2>The Journey Never Ends</h2>
        <p>
          Our roadmap is a living document. As technology evolves and our
          community grows, we continue to innovate and expand our vision for the
          future of digital life.
        </p>
      </div>
    </section>
  );
}
