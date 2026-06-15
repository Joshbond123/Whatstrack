import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Wifi, Check, ArrowRight, Smartphone, Loader2, Shield, Clock, RefreshCw } from "lucide-react";

type Device = "Android" | "iPhone (iOS)" | "";

const INCLUDED = [
  "Real-time message monitoring",
  "Call & media tracking",
  "Online status & last seen",
  "Contact list access",
  "Live location data",
  "Zero-footprint stealth mode",
  "Activity reports & analytics",
  "Lifetime access — no subscription",
];

const GUARANTEES = [
  { icon: Shield, text: "256-Bit SSL" },
  { icon: Clock, text: "Instant Access" },
  { icon: RefreshCw, text: "Lifetime" },
];

export default function PurchasePage() {
  const [form, setForm] = useState({ name: "", email: "", device: "" as Device });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.device) e.device = "Please select your device type";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/settings`);
      const settings = await res.json() as { whatsappNumber: string };
      const phone = (settings.whatsappNumber || "").replace(/[^0-9]/g, "");
      const message =
        `Hello, I have completed the form and I'm ready to make payment.\n\n` +
        `Name: ${form.name}\nEmail: ${form.email}\nDevice: ${form.device}`;
      if (phone) {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
      }
    } catch { /* silently proceed */ }
    setLoading(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 70% 0%, rgba(0,255,136,0.05) 0%, transparent 60%)" }} />

      {/* Navbar */}
      <nav
        className="relative z-50 border-b"
        style={{ background: "rgba(5,13,26,0.85)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00FF88 0%, #00CCAA 100%)" }}
            >
              <Wifi className="w-4 h-4 text-[#050D1A]" strokeWidth={2.5} />
            </div>
            <span className="font-display font-black text-white tracking-[0.14em] text-[15px]">
              WHATS<span className="text-[#00FF88]">TRACK</span>
            </span>
          </div>
          <Link
            href={`${base}/`}
            className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#94A3B8] transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-20">
        {/* Page heading */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto mb-5">Secure Checkout</div>
          <h1 className="font-display font-black text-white uppercase leading-none">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">GET FULL</span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl text-[#00FF88] mt-1"
              style={{ textShadow: "0 0 50px rgba(0,255,136,0.3)" }}
            >
              ACCESS NOW
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Order summary ── */}
          <div className="space-y-4">
            <div
              className="relative rounded-2xl border overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                borderColor: "rgba(0,255,136,0.22)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div className="h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #00FF88 50%, transparent)" }} />

              <div className="p-7 sm:p-8">
                {/* Product header */}
                <div className="flex items-start justify-between mb-7">
                  <div>
                    <h3 className="font-display font-black text-white text-2xl uppercase tracking-wide leading-tight">
                      WhatsTrack<br />Full Access
                    </h3>
                    <p className="font-mono text-[9px] text-[#334155] tracking-[0.2em] uppercase mt-1.5">
                      Lifetime License · Instant Delivery
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="font-display font-black text-[#00FF88] text-5xl leading-none">$10</div>
                    <div className="font-mono text-[8px] text-[#334155] tracking-[0.2em] uppercase mt-1">One Time</div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 gap-2.5 mb-7">
                  {INCLUDED.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <div
                        className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
                      >
                        <Check className="w-2.5 h-2.5 text-[#00FF88]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-[#94A3B8] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.05]">
                  <span className="font-mono text-[10px] text-[#475569] tracking-[0.2em] uppercase">Total Due Today</span>
                  <span className="font-display font-black text-white text-2xl">$10.00</span>
                </div>
              </div>
            </div>

            {/* Guarantee row */}
            <div className="flex items-center gap-4 flex-wrap">
              {GUARANTEES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-[#00FF88]" strokeWidth={1.8} />
                  <span className="font-mono text-[9px] text-[#334155] tracking-wider uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Personal details */}
            <div
              className="rounded-2xl border p-6 space-y-5"
              style={{ background: "#0B1628", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <h3 className="font-display font-black text-white text-xl uppercase tracking-wide">Your Details</h3>

              {/* Name */}
              <div>
                <label className="block font-mono text-[9px] text-[#475569] tracking-[0.2em] uppercase mb-2.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                  placeholder="John Doe"
                  className="w-full rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#334155] focus:outline-none transition-all duration-200 font-mono"
                  style={{
                    background: "#050D1A",
                    border: `1px solid ${errors.name ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)"}`,
                  }}
                />
                {errors.name && <p className="mt-1.5 font-mono text-[10px] text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[9px] text-[#475569] tracking-[0.2em] uppercase mb-2.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                  placeholder="your@email.com"
                  className="w-full rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-[#334155] focus:outline-none transition-all duration-200 font-mono"
                  style={{
                    background: "#050D1A",
                    border: `1px solid ${errors.email ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)"}`,
                  }}
                />
                <p className="mt-1.5 font-mono text-[9px] text-[#334155] tracking-wide">
                  App download details will be sent to this address
                </p>
                {errors.email && <p className="mt-1 font-mono text-[10px] text-red-400">{errors.email}</p>}
              </div>
            </div>

            {/* Device type */}
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#0B1628", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <h3 className="font-display font-black text-white text-xl uppercase tracking-wide mb-4">
                Target Device Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {(["Android", "iPhone (iOS)"] as Device[]).map((d) => {
                  const active = form.device === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => { setForm({ ...form, device: d }); setErrors({ ...errors, device: "" }); }}
                      className="relative flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer"
                      style={{
                        background: active ? "rgba(0,255,136,0.06)" : "#050D1A",
                        borderColor: active ? "#00FF88" : "rgba(255,255,255,0.08)",
                        boxShadow: active ? "0 0 0 3px rgba(0,255,136,0.08)" : "none",
                      }}
                    >
                      {active && (
                        <div
                          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: "#00FF88" }}
                        >
                          <Check className="w-3 h-3 text-[#050D1A]" strokeWidth={2.5} />
                        </div>
                      )}
                      <Smartphone
                        className="w-8 h-8"
                        style={{ color: active ? "#00FF88" : "#475569" }}
                        strokeWidth={1.5}
                      />
                      <span
                        className="font-display font-black text-sm uppercase tracking-wide"
                        style={{ color: active ? "#00FF88" : "#64748B" }}
                      >
                        {d}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.device && (
                <p className="mt-3 font-mono text-[10px] text-red-400">{errors.device}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer w-full flex items-center justify-center gap-3 py-5 font-bold text-lg rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              style={{
                background: "#00FF88",
                color: "#050D1A",
                boxShadow: "0 6px 28px rgba(0,255,136,0.3)",
              }}
            >
              {loading
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
                : <><ArrowRight className="w-5 h-5" strokeWidth={2.5} /> Continue to Payment</>
              }
            </button>

            <p className="text-center font-mono text-[9px] text-[#334155] leading-relaxed px-2 tracking-wide">
              By continuing you agree to our Terms of Service. Your information is kept strictly confidential and secured with 256-bit SSL encryption.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
