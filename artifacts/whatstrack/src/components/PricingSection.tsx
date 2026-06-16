import { Link } from "wouter";
import { Check, ArrowRight, Zap, Shield, Clock, RefreshCw } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES_INCLUDED = [
  "Real-time message monitoring",
  "Call log tracking (voice & video)",
  "Full media access (photos, videos, docs)",
  "Contact list synchronization",
  "Online status & last seen tracking",
  "Zero-footprint stealth mode",
  "iOS & Android compatible",
  "256-bit end-to-end encryption",
  "Lifetime access — no subscription",
  "24/7 monitoring dashboard",
];

const GUARANTEES = [
  { icon: Shield, label: "256-Bit SSL" },
  { icon: Clock, label: "Instant Access" },
  { icon: RefreshCw, label: "Lifetime" },
  { icon: Zap, label: "Real-Time" },
];

export default function PricingSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#080F1E", padding: "96px 0" }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 55%)",
          filter: "blur(80px)",
        }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-label reveal" style={{ display: "inline-flex", marginBottom: "16px" }}>Access Pricing</div>
          <h2 className="font-display font-black reveal" style={{ lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: "16px" }}>
            <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 64px)", color: "#F1F5F9" }}>ONE PRICE.</span>
            <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 64px)", color: "#00FF88", textShadow: "0 0 40px rgba(0,255,136,0.25)" }}>
              FULL ACCESS.
            </span>
          </h2>
          <p className="reveal reveal-delay-1" style={{ marginTop: "16px", color: "#64748B", fontSize: "15px", maxWidth: "400px", margin: "16px auto 0", lineHeight: 1.7 }}>
            No subscriptions. No hidden fees. Pay once, monitor forever.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }} className="reveal reveal-delay-2">
          <div style={{ width: "100%", maxWidth: "640px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "-1px", position: "relative", zIndex: 10 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 20px",
                borderRadius: "12px 12px 0 0",
                background: "#00FF88",
                boxShadow: "0 -4px 20px rgba(0,255,136,0.3)",
              }}>
                <Zap style={{ width: "11px", height: "11px", color: "#050D1A" }} strokeWidth={2.5} />
                <span className="font-mono" style={{ fontSize: "9px", color: "#050D1A", fontWeight: 800, letterSpacing: "0.22em" }}>MOST POPULAR</span>
              </div>
            </div>

            <div style={{
              borderRadius: "20px",
              border: "2px solid rgba(0,255,136,0.28)",
              background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
              boxShadow: "0 0 60px rgba(0,255,136,0.08), 0 20px 60px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}>
              <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #00FF88 40%, #00CCAA 60%, transparent)" }} />

              <div style={{ padding: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "40px", flexWrap: "wrap" }}>
                  <div>
                    <div className="font-mono" style={{ fontSize: "10px", color: "#64748B", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "8px" }}>
                      One-Time Payment
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                      <span className="font-display font-black" style={{ fontSize: "32px", color: "#00FF88", marginTop: "12px" }}>$</span>
                      <span className="font-display font-black" style={{ fontSize: "clamp(72px, 12vw, 108px)", color: "#F1F5F9", lineHeight: 1 }}>10</span>
                    </div>
                    <div className="font-mono" style={{ fontSize: "10px", color: "#64748B", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px" }}>
                      Lifetime access · No renewals
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", minWidth: "160px" }}>
                    {GUARANTEES.map(({ icon: Icon, label }) => (
                      <div key={label} style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        background: "rgba(5,13,26,0.6)", borderRadius: "10px",
                        padding: "10px 12px", border: "1px solid rgba(255,255,255,0.07)",
                      }}>
                        <Icon style={{ width: "13px", height: "13px", color: "#00FF88", flexShrink: 0 }} strokeWidth={1.8} />
                        <span className="font-mono" style={{ fontSize: "9px", color: "#94A3B8", letterSpacing: "0.1em" }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", marginBottom: "36px" }}
                  className="pricing-features">
                  {FEATURES_INCLUDED.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                        background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.22)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Check style={{ width: "9px", height: "9px", color: "#00FF88" }} strokeWidth={2.5} />
                      </div>
                      <span style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.4 }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`${base}/purchase`}
                  className="btn-shimmer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    width: "100%", padding: "18px 24px",
                    background: "#00FF88", color: "#050D1A",
                    fontWeight: 700, fontSize: "17px",
                    borderRadius: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 24px rgba(0,255,136,0.3)",
                    transition: "all 0.2s",
                  }}
                >
                  GET INSTANT ACCESS
                  <ArrowRight style={{ width: "18px", height: "18px" }} strokeWidth={2.5} />
                </Link>

                <p className="font-mono" style={{ textAlign: "center", fontSize: "9px", color: "#475569", marginTop: "16px", letterSpacing: "0.2em" }}>
                  256-BIT SSL ENCRYPTED · ANONYMOUS · INSTANT DELIVERY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .pricing-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
