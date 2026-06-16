import { Link } from "wouter";
import { ArrowRight, CreditCard, Search, Monitor } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    num: "01",
    icon: CreditCard,
    title: "Purchase Access",
    desc: "Complete your one-time $10 payment. Instant access delivered to your email within seconds of confirming.",
    color: "#00FF88",
  },
  {
    num: "02",
    icon: Search,
    title: "Enter Target Number",
    desc: "Input the WhatsApp number you want to monitor. Our system initiates a silent, encrypted connection remotely.",
    color: "#60A5FA",
  },
  {
    num: "03",
    icon: Monitor,
    title: "Monitor in Real-Time",
    desc: "Access the full dashboard — messages, calls, media, contacts, and live status. Zero trace left on the device.",
    color: "#00FF88",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#080F1E", padding: "96px 0" }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Deployment Protocol
          </div>
          <h2 className="font-display font-black reveal" style={{ lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: "16px" }}>
            <span style={{ display: "block", fontSize: "clamp(32px, 4.5vw, 60px)", color: "#F1F5F9" }}>
              UP AND RUNNING IN
            </span>
            <span style={{ display: "block", fontSize: "clamp(32px, 4.5vw, 60px)", color: "#00FF88", textShadow: "0 0 40px rgba(0,255,136,0.25)" }}>
              3 STEPS
            </span>
          </h2>
          <p className="reveal reveal-delay-1" style={{ color: "#64748B", fontSize: "15px", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
            No technical knowledge required. No physical access to the target device.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", position: "relative" }}
          className="steps-grid">

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className={`reveal reveal-delay-${i + 1}`}>
                <div style={{
                  height: "100%",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
                  className="card-hover"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${step.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px ${step.color}15 inset`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.25)";
                  }}
                >
                  {/* Step number + Icon row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Number badge */}
                    <div className="font-display font-black" style={{
                      fontSize: "48px",
                      lineHeight: 1,
                      color: `${step.color}18`,
                      letterSpacing: "-0.02em",
                    }}>
                      {step.num}
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
                      background: `${step.color}0D`,
                      border: `1px solid ${step.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon style={{ width: "22px", height: "22px", color: step.color }} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="font-mono" style={{ fontSize: "9px", color: `${step.color}60`, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Step {step.num}
                    </div>
                    <h3 className="font-display font-black" style={{ fontSize: "20px", color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "10px", lineHeight: 1.1 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "56px", textAlign: "center" }} className="reveal">
          <Link
            href={`${base}/purchase`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px",
              background: "#00FF88", color: "#050D1A",
              fontWeight: 700, fontSize: "15px",
              borderRadius: "14px",
              boxShadow: "0 4px 24px rgba(0,255,136,0.28)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            START MONITORING NOW
            <ArrowRight style={{ width: "16px", height: "16px" }} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
