import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Wifi, ChevronRight } from "lucide-react";

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
          background: "rgba(5, 13, 26, 0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        } : undefined}
      >
        <div className="page-container" style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 select-none focus:outline-none group cursor-pointer"
            aria-label="WhatsTrack"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,255,136,0.4)]"
              style={{ background: "linear-gradient(135deg, #00FF88 0%, #00CCAA 100%)" }}
            >
              <Wifi className="w-4 h-4 text-[#050D1A]" strokeWidth={2.5} />
            </div>
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

          {/* CTA */}
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
            className="md:hidden text-[#94A3B8] hover:text-white p-2 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(5,13,26,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="pt-[84px] px-6 pb-8 flex flex-col h-full">
          <div className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="py-4 text-left text-base font-medium text-[#94A3B8] hover:text-white transition-colors border-b border-white/[0.05] cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <Link
            href={`${base}/purchase`}
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 py-4 bg-[#00FF88] text-[#050D1A] font-bold rounded-xl text-base cursor-pointer"
          >
            Get Access — $10
            <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </>
  );
}
