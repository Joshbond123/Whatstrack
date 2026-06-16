import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    q: "Does the target person know they are being monitored?",
    a: "No. WhatsTrack operates in complete stealth mode. There are no notifications, no battery warnings, no unusual activity — nothing on the target device reveals it is being monitored. It is 100% undetectable.",
  },
  {
    q: "Do I need physical access to the target phone?",
    a: "No physical access is required. WhatsTrack works remotely. All you need is the target's WhatsApp phone number to initiate monitoring.",
  },
  {
    q: "Which devices are supported?",
    a: "WhatsTrack is fully compatible with both iOS (iPhone) and Android devices running any recent version of WhatsApp. No jailbreak or root access required.",
  },
  {
    q: "How soon does monitoring begin?",
    a: "Monitoring begins within minutes of completing your purchase. You will receive your dashboard access credentials via email instantly after payment.",
  },
  {
    q: "Is this a one-time payment or a subscription?",
    a: "It is a one-time payment of $10. There are no monthly fees, no hidden charges, and no renewal costs. Once you pay, you have lifetime access.",
  },
  {
    q: "How is my payment information secured?",
    a: "All transactions are processed through a 256-bit SSL encrypted payment gateway. We never store your card details, and your billing information remains completely confidential.",
  },
  {
    q: "Can I monitor multiple WhatsApp accounts?",
    a: "Your $10 purchase grants access to monitor one WhatsApp account. Additional accounts can be added at the same one-time rate per account.",
  },
  {
    q: "What if I need help setting up?",
    a: "Our support team is available 24/7. After purchase, you will receive a detailed setup guide. Most users are fully operational within 5 minutes of payment.",
  },
];

const STATS = [
  { v: "50K+", l: "Satisfied Users" },
  { v: "99.97%", l: "Uptime Rate" },
  { v: "<5 min", l: "Setup Time" },
  { v: "24/7", l: "Support" },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050D1A", padding: "96px 0" }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }}
          className="faq-grid">

          {/* Left: Header (sticky) */}
          <div style={{ position: "sticky", top: "112px" }}>
            <div className="section-label reveal" style={{ display: "inline-flex", marginBottom: "16px" }}>Intel Brief</div>
            <h2 className="font-display font-black reveal" style={{ lineHeight: 0.9, letterSpacing: "-0.01em", marginBottom: "20px" }}>
              <span style={{ display: "block", fontSize: "clamp(28px, 4vw, 52px)", color: "#F1F5F9" }}>FREQUENTLY</span>
              <span style={{ display: "block", fontSize: "clamp(28px, 4vw, 52px)", color: "#00FF88", textShadow: "0 0 40px rgba(0,255,136,0.25)" }}>
                ASKED
              </span>
              <span style={{ display: "block", fontSize: "clamp(28px, 4vw, 52px)", color: "#F1F5F9" }}>QUESTIONS</span>
            </h2>
            <p className="reveal reveal-delay-1" style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.7, maxWidth: "280px" }}>
              Everything you need to know about WhatsTrack. Support team available 24/7.
            </p>

            {/* Stats */}
            <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
              className="reveal reveal-delay-2">
              {STATS.map((s) => (
                <div key={s.l} style={{
                  borderRadius: "14px", padding: "14px 16px",
                  background: "#0B1628", border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div className="font-display font-black" style={{ fontSize: "22px", lineHeight: 1, marginBottom: "4px", color: "#00FF88" }}>
                    {s.v}
                  </div>
                  <div className="font-mono" style={{ fontSize: "9px", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal card-hover${i < 4 ? ` reveal-delay-${i + 1}` : ""}`}
                style={{
                  borderRadius: "16px",
                  border: `1px solid ${open === i ? "rgba(0,255,136,0.18)" : "rgba(255,255,255,0.05)"}`,
                  background: open === i ? "#0B1628" : "rgba(11,22,40,0.5)",
                  boxShadow: open === i ? "0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,255,136,0.04) inset" : "none",
                  overflow: "hidden",
                  transition: "all 0.25s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "18px 20px", textAlign: "left", gap: "16px",
                    background: "none", border: "none", cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 500, color: open === i ? "#F1F5F9" : "#CBD5E1", lineHeight: 1.4, transition: "color 0.2s" }}>
                    {item.q}
                  </span>
                  <div style={{
                    flexShrink: 0, width: "28px", height: "28px", borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: open === i ? "rgba(0,255,136,0.1)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${open === i ? "rgba(0,255,136,0.25)" : "rgba(255,255,255,0.08)"}`,
                    transition: "all 0.2s",
                  }}>
                    {open === i
                      ? <Minus style={{ width: "12px", height: "12px", color: "#00FF88" }} strokeWidth={2.5} />
                      : <Plus style={{ width: "12px", height: "12px", color: "#64748B" }} strokeWidth={2.5} />
                    }
                  </div>
                </button>

                <div style={{ maxHeight: open === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                  <div style={{ padding: "0 20px 20px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    <p style={{ paddingTop: "16px", fontSize: "13px", color: "#64748B", lineHeight: 1.75 }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
