import { MessageSquare, Phone, Camera, Users, Clock, MapPin, Lock, BarChart3 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Message Monitoring",
    desc: "Read all incoming and outgoing messages in real-time. Full chat history including deleted messages.",
    tag: "LIVE",
    color: "#00FF88",
    featured: true,
  },
  {
    icon: Phone,
    title: "Call Tracking",
    desc: "Log every WhatsApp call — voice and video. Duration, timestamps, and contact details captured.",
    tag: "REAL-TIME",
    color: "#60A5FA",
  },
  {
    icon: Camera,
    title: "Media Access",
    desc: "View all photos, videos, voice notes, and documents shared or received on the monitored account.",
    tag: "FULL ACCESS",
    color: "#F472B6",
  },
  {
    icon: Users,
    title: "Contact List",
    desc: "Complete access to their contacts list. See who they're talking to and how frequently.",
    tag: "SYNC",
    color: "#A78BFA",
  },
  {
    icon: Clock,
    title: "Online Status",
    desc: "Track exact online/offline times and last seen timestamps. Detect activity patterns instantly.",
    tag: "PRECISE",
    color: "#34D399",
  },
  {
    icon: MapPin,
    title: "Live Location",
    desc: "Access shared location data and movement history directly from their WhatsApp activity.",
    tag: "GPS",
    color: "#FB923C",
  },
  {
    icon: Lock,
    title: "Zero Footprint",
    desc: "Completely undetectable. No battery drain, no notifications, no traces on the target device.",
    tag: "STEALTH",
    color: "#00FF88",
  },
  {
    icon: BarChart3,
    title: "Activity Reports",
    desc: "Automated daily and weekly reports. Visualize usage patterns, peak hours, and behavioral trends.",
    tag: "ANALYTICS",
    color: "#60A5FA",
  },
];

export default function FeaturesSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [featured, ...rest] = FEATURES;
  const FeaturedIcon = featured.icon;

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#050D1A", padding: "96px 0" }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,255,136,0.035) 0%, transparent 60%)",
      }} />

      <div className="page-container" style={{ position: "relative" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-label reveal" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Capability Matrix
          </div>
          <h2 className="font-display font-black reveal" style={{ lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: "16px" }}>
            <span style={{ display: "block", fontSize: "clamp(32px, 4.5vw, 60px)", color: "#F1F5F9" }}>
              EVERYTHING YOU
            </span>
            <span style={{ display: "block", fontSize: "clamp(32px, 4.5vw, 60px)", color: "#00FF88", textShadow: "0 0 40px rgba(0,255,136,0.25)" }}>
              NEED TO KNOW
            </span>
          </h2>
          <p className="reveal reveal-delay-1" style={{ color: "#64748B", fontSize: "15px", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
            Full-spectrum WhatsApp intelligence. Every feature runs silently with military-grade encryption.
          </p>
        </div>

        {/* Featured card */}
        <div className="reveal" style={{ marginBottom: "16px" }}>
          <div style={{
            borderRadius: "20px",
            border: "1px solid rgba(0,255,136,0.18)",
            background: "linear-gradient(135deg, #0B1628 0%, #0F1D35 60%, rgba(0,255,136,0.025) 100%)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,136,0.05) inset",
            padding: "28px 32px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top accent */}
            <div style={{ position: "absolute", inset: "0 0 auto 0", height: "2px", background: "linear-gradient(90deg, transparent, #00FF88, transparent)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "16px", flexShrink: 0,
                background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <FeaturedIcon style={{ width: "24px", height: "24px", color: "#00FF88" }} strokeWidth={1.6} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <h3 className="font-display font-black" style={{ fontSize: "22px", color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1 }}>
                    {featured.title}
                  </h3>
                  <span className="font-mono" style={{
                    fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em",
                    padding: "3px 10px", borderRadius: "9999px",
                    color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)", background: "rgba(0,255,136,0.08)",
                  }}>
                    {featured.tag}
                  </span>
                </div>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6, maxWidth: "600px" }}>{featured.desc}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <span className="animate-blink" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
                <span className="font-mono" style={{ fontSize: "10px", color: "#00FF88", letterSpacing: "0.15em", fontWeight: 600 }}>ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}
          className="features-grid">
          {rest.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <div
                  className="card-hover"
                  style={{
                    height: "100%",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    padding: "22px 20px",
                    transition: "all 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${feat.color}25`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${feat.color}15 inset`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
                      background: `${feat.color}0D`, border: `1px solid ${feat.color}22`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon style={{ width: "18px", height: "18px", color: feat.color }} strokeWidth={1.8} />
                    </div>
                    <span className="font-mono" style={{
                      fontSize: "8px", fontWeight: 600, letterSpacing: "0.16em",
                      padding: "2px 7px", borderRadius: "9999px",
                      color: `${feat.color}70`, border: `1px solid ${feat.color}18`, background: `${feat.color}06`,
                    }}>
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-black" style={{ fontSize: "14px", color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px", lineHeight: 1.2 }}>
                    {feat.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.65 }}>{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
