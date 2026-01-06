import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What is MetaLife AI?",
        a: "MetaLife AI is an AI-powered, blockchain-secured digital life platform that allows users to manage, monetize, and control their digital presence.",
      },
      {
        q: "How does MetaLife AI work?",
        a: "MetaLife AI combines artificial intelligence with decentralized blockchain technology to provide secure digital identity, data ownership, and AI-driven services.",
      },
      {
        q: "Is MetaLife AI available worldwide?",
        a: "Yes, MetaLife AI is designed to be globally accessible, subject to local regulatory compliance.",
      },
    ],
  },
  {
    category: "ICO & Tokens",
    items: [
      {
        q: "How does the ICO work?",
        a: "Users can participate in the ICO by purchasing META tokens using supported cryptocurrencies through a secure smart contract.",
      },
      {
        q: "What is the META token used for?",
        a: "META tokens are used for platform access, governance, staking rewards, and transactions within the MetaLife ecosystem.",
      },
      {
        q: "What bonuses are available during the ICO?",
        a: "Early participants may receive token bonuses depending on the phase of the ICO and contribution size.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "Is my data secure on MetaLife AI?",
        a: "Yes. MetaLife AI uses end-to-end encryption, decentralized storage, and audited smart contracts to protect your data.",
      },
      {
        q: "How is my personal information protected?",
        a: "Personal data is encrypted, never sold without consent, and fully controlled by the user.",
      },
    ],
  },
  {
    category: "Earnings",
    items: [
      {
        q: "How can I earn on MetaLife AI?",
        a: "Users can earn through data monetization, staking rewards, and participation in the ecosystem.",
      },
      {
        q: "How do investors benefit from MetaLife AI?",
        a: "Investors benefit from token value growth, staking incentives, and long-term ecosystem expansion.",
      },
    ],
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-page">
      {/* HERO */}
      <div className="faq-hero">
        <div className="faq-icon">?</div>
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>
        <p>
          Find answers to common questions about MetaLife AI, our ICO, security,
          and more.
        </p>

        <div className="faq-search">
          <input type="text" placeholder="Search questions..." />
        </div>
      </div>

      {/* FAQ CONTENT */}
      <div className="faq-container">
        {faqData.map((section, i) => (
          <div key={i} className="faq-section">
            <h3>{section.category}</h3>

            {section.items.map((item, index) => {
              const id = `${i}-${index}`;
              const open = active === id;

              return (
                <div
                  key={id}
                  className={`faq-item ${open ? "open" : ""}`}
                  onClick={() => setActive(open ? null : id)}
                >
                  <div className="faq-question">
                    <span>{item.q}</span>
                    <i>{open ? "−" : "+"}</i>
                  </div>

                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>Our team is here to help. Reach out anytime.</p>
      </div>
    </section>
  );
}
