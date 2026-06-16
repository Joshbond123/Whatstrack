import { Eye, MessageSquare, Phone, Shield } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const BG_IMAGE = "https://media.base44.com/images/public/6a2fdd6f77f22f5cf4a24501/019c82b65_generated_image.png";

const CAPABILITY_CARDS = [
  { icon: MessageSquare, label: "Messages", value: "Full Access", sub: "All chats & deleted", color: "#00FF88" },
  { icon: Phone, label: "Calls", value: "Logged", sub: "Voice & video", color: "#60A5FA" },
  { icon: Shield, label: "Stealth", value: "Zero Trace", sub: "Fully undetectable", color: "#A78BFA" },
];

export default function ImageSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: "#050D1A" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={BG_IMAGE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #050D1A 0%, transparent 18%, transparent 82%, #050D1A 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050D1A 0%, transparent 18%, transparent 82%, #050D1A 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(5,13,26,0.42)" }} />
      </div>

      {/* Scanline animation */}
      <div
        style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #00FF88, transparent)",
          opacity: 0.18, zIndex: 10, pointerEvents: "none",
          animation: "scanline 5s ease-in-out infinite",
        }}
      />

      <div className="page-container" style={{ position: "relative", zIndex: 10, padding: "96px 0" }}>

        {/* Center heading */}
        <div style={{ textAlign: "center", marginBottom: "56px" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Eye style={{ width: "16px", height: "16px", color: "#00FF88" }} strokeWidth={1.8} />
            <span className="font-mono" style={{ fontSize: "10px", color: "#00FF88", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
              All-in-One Platform
            </span>
          </div>
          <h2 className="font-display font-black" style={{ fontSize: "clamp(40px, 7vw, 80px)", textTransform: "uppercase", lineHeight: 0.92, letterSpacing: "-0.01em", color: "#F1F5F9" }}>
            COMPLETE<br />
            <span style={{ color: "#00FF88", textShadow: "0 0 50px rgba(0,255,136,0.3)" }}>SURVEILLANCE</span>
          </h2>
        </div>

        {/* Capability cards — 3 cards, centered */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", maxWidth: "680px", width: "100%" }}
            className="image-cards">
            {CAPABILITY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className={`reveal reveal-delay-${i + 1}`}>
                  <div style={{
                    borderRadius: "20px",
                    border: `1px solid ${card.color}20`,
                    background: "rgba(11,22,40,0.82)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    padding: "24px 20px",
                    textAlign: "center",
                    boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${card.color}10 inset`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "default",
                  }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                      <div style={{
                        width: "44px", height: "44px", borderRadius: "14px",
                        background: `${card.color}10`, border: `1px solid ${card.color}25`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon style={{ width: "20px", height: "20px", color: card.color }} strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="font-mono" style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px", color: `${card.color}80` }}>
                      {card.label}
                    </div>
                    <div className="font-display font-black" style={{ fontSize: "18px", color: "#F1F5F9", lineHeight: 1, marginBottom: "4px" }}>
                      {card.value}
                    </div>
                    <div className="font-mono" style={{ fontSize: "9px", color: "#475569", letterSpacing: "0.1em" }}>
                      {card.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .image-cards { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .image-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
