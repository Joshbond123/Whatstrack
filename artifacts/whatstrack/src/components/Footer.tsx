import { Shield } from "lucide-react";

const FOOTER_LINKS = {
  Product: ["Features", "How It Works", "Pricing", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Help Center", "Contact Support", "Documentation"],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#030912", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="page-container" style={{ paddingTop: "60px", paddingBottom: "36px" }}>

        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
          className="footer-grid">

          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", background: "none", border: "none", cursor: "pointer" }}
            >
              <img src="/logo.png" alt="WhatsTrack Logo" style={{ width: "32px", height: "32px", borderRadius: "8px", objectFit: "cover" }} />
              <span className="font-display font-black" style={{ color: "#F1F5F9", letterSpacing: "0.14em", fontSize: "15px" }}>
                WHATS<span style={{ color: "#00FF88" }}>TRACK</span>
              </span>
            </button>

            <p style={{ color: "#475569", fontSize: "13px", lineHeight: 1.7, maxWidth: "260px", marginBottom: "20px" }}>
              Professional WhatsApp monitoring solution. Real-time access to messages, calls, media, and location — silently and securely.
            </p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(11,22,40,0.8)", border: "1px solid rgba(0,255,136,0.12)", borderRadius: "12px", padding: "10px 16px" }}>
              <span className="animate-blink" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
              <span className="font-mono" style={{ fontSize: "9px", color: "#00FF88", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                System Operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-mono" style={{ fontSize: "9px", fontWeight: 600, color: "#334155", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                      style={{ fontSize: "13px", color: "#475569", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s", textAlign: "left" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#475569"}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{ paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p className="font-mono" style={{ fontSize: "9px", color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            © {new Date().getFullYear()} WHATSTRACK. ALL RIGHTS RESERVED.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Shield style={{ width: "12px", height: "12px", color: "#334155" }} strokeWidth={1.8} />
            <span className="font-mono" style={{ fontSize: "9px", color: "#334155", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              256-BIT SSL SECURED
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <p className="font-mono" style={{ textAlign: "center", fontSize: "9px", color: "#1E293B", lineHeight: 1.75, maxWidth: "640px", margin: "0 auto", letterSpacing: "0.04em" }}>
            DISCLAIMER: WhatsTrack is provided for lawful monitoring purposes only. Users are responsible for complying with all applicable laws in their jurisdiction. Monitoring without consent may be illegal in your location.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1 !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
