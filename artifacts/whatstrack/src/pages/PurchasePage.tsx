import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Wifi, ArrowRight, Smartphone, Loader2, Shield, Lock, Zap, Check } from "lucide-react";

type Device = "Android" | "iPhone (iOS)" | "";

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
    const phone = "15814783495";
    const message =
      `Hello, I have completed the form and I'm ready to make payment.\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nDevice: ${form.device}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => { window.location.href = waUrl; }, 800);
    } else {
      setTimeout(() => {
        window.open(waUrl, "_blank");
        setLoading(false);
      }, 800);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#050D1A", position: "relative" }}>
      {/* Background glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,255,136,0.07) 0%, transparent 60%)",
      }} />
      <div className="grid-pattern absolute inset-0 opacity-20 pointer-events-none" />

      {/* Navbar */}
      <nav style={{
        position: "relative", zIndex: 50,
        background: "rgba(5,13,26,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div className="page-container" style={{ height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, #00FF88 0%, #00CCAA 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Wifi style={{ width: "16px", height: "16px", color: "#050D1A" }} strokeWidth={2.5} />
            </div>
            <span className="font-display font-black" style={{ color: "#F1F5F9", letterSpacing: "0.14em", fontSize: "15px" }}>
              WHATS<span style={{ color: "#00FF88" }}>TRACK</span>
            </span>
          </div>
          <Link
            href={`${base}/`}
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#64748B", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
          >
            <ArrowLeft style={{ width: "14px", height: "14px" }} />
            Back to home
          </Link>
        </div>
      </nav>

      {/* Main */}
      <div className="page-container" style={{ paddingTop: "56px", paddingBottom: "96px", position: "relative" }}>

        {/* Page header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label" style={{ display: "inline-flex", marginBottom: "16px" }}>
            <Lock style={{ width: "10px", height: "10px" }} />
            <span style={{ marginLeft: "6px" }}>Final Step · Instant Activation</span>
          </div>
          <h1 className="font-display font-black" style={{ lineHeight: 0.92, letterSpacing: "-0.01em", marginBottom: "16px" }}>
            <span style={{ display: "block", fontSize: "clamp(36px, 5vw, 60px)", color: "#F1F5F9" }}>UNLOCK COMPLETE</span>
            <span style={{ display: "block", fontSize: "clamp(36px, 5vw, 60px)", color: "#00FF88", textShadow: "0 0 50px rgba(0,255,136,0.28)" }}>
              WHATSAPP ACCESS
            </span>
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "15px", maxWidth: "420px", margin: "0 auto", lineHeight: 1.75 }}>
            One payment of <span style={{ color: "#F1F5F9", fontWeight: 600 }}>$10</span>. No subscriptions, no renewals.
            Full message, call & media visibility — delivered to your inbox within minutes.
          </p>
        </div>

        {/* Centered form */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "520px", display: "flex", flexDirection: "column", gap: "20px" }}
          >

            {/* Personal details card */}
            <div style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}>
              {/* Accent top bar */}
              <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #00FF88 40%, #00CCAA 60%, transparent)" }} />

              <div style={{ padding: "32px" }}>
                <h3 className="font-display font-black" style={{ fontSize: "17px", color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "24px" }}>
                  Your Details
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Name */}
                  <div>
                    <label className="font-mono" style={{ display: "block", fontSize: "9px", color: "#94A3B8", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      placeholder="John Doe"
                      style={{
                        width: "100%", boxSizing: "border-box",
                        borderRadius: "12px", padding: "14px 16px",
                        background: "#060E1C",
                        border: `1px solid ${errors.name ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: "#F1F5F9", fontSize: "14px", fontFamily: "var(--font-body)",
                        outline: "none", transition: "border-color 0.2s",
                      }}
                    />
                    {errors.name && <p className="font-mono" style={{ marginTop: "6px", fontSize: "10px", color: "#f87171" }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono" style={{ display: "block", fontSize: "9px", color: "#94A3B8", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      placeholder="your@email.com"
                      style={{
                        width: "100%", boxSizing: "border-box",
                        borderRadius: "12px", padding: "14px 16px",
                        background: "#060E1C",
                        border: `1px solid ${errors.email ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
                        color: "#F1F5F9", fontSize: "14px", fontFamily: "var(--font-body)",
                        outline: "none", transition: "border-color 0.2s",
                      }}
                    />
                    <p className="font-mono" style={{ marginTop: "6px", fontSize: "9px", color: "#64748B", letterSpacing: "0.1em" }}>
                      The app download details will be sent to this email address
                    </p>
                    {errors.email && <p className="font-mono" style={{ marginTop: "4px", fontSize: "10px", color: "#f87171" }}>{errors.email}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Device selection card */}
            <div style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              padding: "32px",
            }}>
              <h3 className="font-display font-black" style={{ fontSize: "17px", color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
                Device Type
              </h3>
              <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "20px", lineHeight: 1.6 }}>
                Select Your Device Type
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {(["Android", "iPhone (iOS)"] as Device[]).map((d) => {
                  const active = form.device === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => { setForm({ ...form, device: d }); setErrors({ ...errors, device: "" }); }}
                      style={{
                        position: "relative",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                        padding: "22px 16px",
                        borderRadius: "14px",
                        border: `2px solid ${active ? "#00FF88" : "rgba(255,255,255,0.08)"}`,
                        background: active ? "rgba(0,255,136,0.06)" : "#060E1C",
                        boxShadow: active ? "0 0 0 3px rgba(0,255,136,0.08)" : "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {active && (
                        <div style={{
                          position: "absolute", top: "8px", right: "8px",
                          width: "18px", height: "18px", borderRadius: "50%",
                          background: "#00FF88",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Check style={{ width: "10px", height: "10px", color: "#050D1A" }} strokeWidth={2.5} />
                        </div>
                      )}
                      <Smartphone
                        style={{ width: "28px", height: "28px", color: active ? "#00FF88" : "#64748B" }}
                        strokeWidth={1.5}
                      />
                      <span className="font-display font-black" style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.06em", color: active ? "#00FF88" : "#94A3B8" }}>
                        {d}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.device && <p className="font-mono" style={{ marginTop: "10px", fontSize: "10px", color: "#f87171" }}>{errors.device}</p>}
            </div>

            {/* Trust row */}
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
              {[
                { icon: Shield, text: "256-Bit SSL" },
                { icon: Zap, text: "Instant Access" },
                { icon: Lock, text: "Confidential" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon style={{ width: "12px", height: "12px", color: "#00FF88" }} strokeWidth={1.8} />
                  <span className="font-mono" style={{ fontSize: "9px", color: "#64748B", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer"
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                padding: "18px 24px",
                background: "#00FF88", color: "#050D1A",
                fontWeight: 700, fontSize: "16px",
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 6px 30px rgba(0,255,136,0.3)",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                transition: "all 0.2s",
              }}
            >
              {loading
                ? <><Loader2 style={{ width: "18px", height: "18px" }} className="animate-spin" /> Processing...</>
                : <><ArrowRight style={{ width: "18px", height: "18px" }} strokeWidth={2.5} /> Continue to Payment</>
              }
            </button>

            <p className="font-mono" style={{ textAlign: "center", fontSize: "10px", color: "#475569", lineHeight: 1.7, letterSpacing: "0.05em" }}>
              By continuing you agree to our Terms of Service.<br />
              Your information is kept strictly confidential and secured with 256-bit SSL encryption.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
