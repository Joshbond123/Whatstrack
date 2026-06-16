import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TRUST = [
  { icon: Shield, text: "256-Bit Encrypted" },
  { icon: Zap, text: "Instant Delivery" },
  { icon: Users, text: "50K+ Active Users" },
];

export default function CTABanner() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#080F1E", padding: "96px 0" }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.06) 0%, transparent 65%)",
        }} />
        <div style={{ position: "absolute", inset: "0 0 auto 0", height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.18), transparent)" }} />
        <div style={{ position: "absolute", inset: "auto 0 0 0", height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent)" }} />
      </div>

      <div className="page-container" style={{ position: "relative", textAlign: "center" }}>

        {/* Trust badges */}
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "28px", marginBottom: "36px" }}>
          {TRUST.map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon style={{ width: "13px", height: "13px", color: "#00FF88" }} strokeWidth={1.8} />
              <span className="font-mono" style={{ fontSize: "10px", color: "#475569", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        <h2 className="font-display font-black reveal" style={{ lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: "20px" }}>
          <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 64px)", color: "#F1F5F9" }}>START MONITORING</span>
          <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 64px)", color: "#00FF88", textShadow: "0 0 50px rgba(0,255,136,0.3)" }}>
            RIGHT NOW
          </span>
        </h2>

        <p className="reveal reveal-delay-1" style={{ color: "#64748B", fontSize: "15px", marginBottom: "40px", maxWidth: "400px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          One-time payment of $10. No subscriptions. No hidden fees. Instant access delivered to your inbox.
        </p>

        <div className="reveal reveal-delay-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link
            href={`${base}/purchase`}
            className="btn-shimmer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "12px",
              padding: "18px 40px",
              background: "#00FF88", color: "#050D1A",
              fontWeight: 700, fontSize: "17px",
              borderRadius: "16px",
              textDecoration: "none",
              boxShadow: "0 8px 40px rgba(0,255,136,0.3)",
              transition: "all 0.2s",
            }}
          >
            GET WHATSTRACK NOW — $10
            <ArrowRight style={{ width: "18px", height: "18px" }} strokeWidth={2.5} />
          </Link>
        </div>

        <p className="reveal reveal-delay-3 font-mono" style={{ marginTop: "20px", fontSize: "9px", color: "#334155", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Anonymous · No card stored · Lifetime Access
        </p>
      </div>
    </section>
  );
}
