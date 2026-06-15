import { Wifi, Shield, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const FOOTER_LINKS = {
  Product: ["Features", "How It Works", "Pricing", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Support: ["Help Center", "Contact Support", "Documentation"],
};

export default function Footer() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#030912", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="page-container" style={{ paddingTop: "56px", paddingBottom: "32px" }}>

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>

          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 mb-4 cursor-pointer group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_14px_rgba(0,255,136,0.35)]"
                style={{ background: "linear-gradient(135deg, #00FF88 0%, #00CCAA 100%)" }}
              >
                <Wifi className="w-4 h-4 text-[#030912]" strokeWidth={2.5} />
              </div>
              <span className="font-display font-black text-white tracking-[0.14em] text-[15px] leading-none">
                WHATS<span className="text-[#00FF88]">TRACK</span>
              </span>
            </button>

            <p className="text-[#475569] text-sm leading-relaxed max-w-xs mb-5">
              Professional WhatsApp monitoring solution. Real-time access to messages, calls, media, and location — silently and securely.
            </p>

            <div className="flex items-center gap-2 bg-[#0B1628]/80 border border-[#00FF88]/15 rounded-xl px-4 py-3 w-fit">
              <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-blink" />
              <span className="font-mono text-[9px] text-[#00FF88] font-semibold tracking-[0.18em] uppercase">
                System Operational
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-mono text-[9px] font-semibold text-[#334155] tracking-[0.22em] uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                      className="text-sm text-[#475569] hover:text-[#94A3B8] transition-colors cursor-pointer text-left"
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] text-[#334155] tracking-wider">
            © {new Date().getFullYear()} WHATSTRACK. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-[#334155]" strokeWidth={1.8} />
            <span className="font-mono text-[9px] text-[#334155] tracking-wider">
              256-BIT SSL SECURED
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 pt-5 border-t border-white/[0.03]">
          <p className="text-center font-mono text-[9px] text-[#1E293B] leading-relaxed max-w-2xl mx-auto">
            DISCLAIMER: WhatsTrack is provided for lawful monitoring purposes only. Users are responsible for complying with all applicable laws in their jurisdiction. Monitoring without consent may be illegal in your location.
          </p>
        </div>
      </div>
    </footer>
  );
}
