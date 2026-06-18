import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";

  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => { clickCountRef.current = 0; }, 2000);
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      window.dispatchEvent(new CustomEvent("openAdminLogin"));
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (!isHome) { window.location.href = `/#${id}`; return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? {
          background: "rgba(5, 13, 26, 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        } : undefined}
      >
        <div className="page-container" style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 select-none focus:outline-none group cursor-pointer"
            aria-label="WhatsTrack"
          >
            <img
              src="/logo.png"
              alt="WhatsTrack Logo"
              className="w-8 h-8 rounded-lg object-cover transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,255,136,0.4)]"
              loading="eager"
              decoding="async"
            />
            <span className="font-display font-black text-white tracking-[0.14em] text-[15px] leading-none">
              WHATS<span className="text-[#00FF88]">TRACK</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2.5 text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 font-medium cursor-pointer rounded-lg hover:bg-white/[0.04]"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={`${base}/purchase`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00FF88] text-[#050D1A] text-sm font-bold rounded-lg hover:bg-[#00E07A] transition-all duration-200 cursor-pointer"
              style={{ boxShadow: "0 2px 16px rgba(0,255,136,0.25)" }}
            >
              Get Access — $10
              <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-[60] p-2 rounded-lg transition-all duration-200 cursor-pointer"
            style={{
              color: mobileOpen ? "#00FF88" : "#94A3B8",
              background: mobileOpen ? "rgba(0,255,136,0.08)" : "transparent",
              border: mobileOpen ? "1px solid rgba(0,255,136,0.2)" : "1px solid transparent",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile sidebar — slides in from the right */}
      <>
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ background: "rgba(2,6,15,0.75)", backdropFilter: "blur(4px)" }}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            width: "min(320px, 88vw)",
            background: "#060E1C",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "-20px 0 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Drawer header */}
          <div style={{
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src="/logo.png" alt="WhatsTrack Logo" style={{ width: "28px", height: "28px", borderRadius: "8px", objectFit: "cover" }} loading="eager" decoding="async" />
              <span className="font-display font-black text-white tracking-[0.14em] text-[13px] leading-none">
                WHATS<span style={{ color: "#00FF88" }}>TRACK</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg cursor-pointer transition-colors"
              style={{ color: "#64748B" }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ flex: 1, padding: "12px 16px", overflowY: "auto" }}>
            <p className="font-mono" style={{ fontSize: "8px", color: "#334155", letterSpacing: "0.22em", textTransform: "uppercase", padding: "8px 8px 12px" }}>
              Navigation
            </p>
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="w-full flex items-center justify-between cursor-pointer rounded-xl transition-all duration-200 group"
                style={{ padding: "14px 16px", marginBottom: "2px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <span className="text-[15px] font-medium text-[#94A3B8] group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-[#334155] group-hover:text-[#64748B] transition-colors" strokeWidth={2} />
              </button>
            ))}
          </nav>

          {/* CTA footer */}
          <div style={{ padding: "20px 20px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <Link
              href={`${base}/purchase`}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full cursor-pointer rounded-xl transition-all duration-200"
              style={{
                padding: "16px 24px",
                background: "#00FF88",
                color: "#050D1A",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 4px 24px rgba(0,255,136,0.3)",
                textDecoration: "none",
              }}
            >
              Get Access — $10
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <p className="font-mono text-center" style={{ fontSize: "9px", color: "#334155", letterSpacing: "0.14em", marginTop: "12px" }}>
              ONE-TIME PAYMENT · INSTANT ACCESS
            </p>
          </div>
        </div>
      </>
    </>
  );
}
