import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Wifi, Settings, LogOut, Save, CheckCircle, AlertCircle, Loader2, Phone, Activity } from "lucide-react";

interface SiteSettings { whatsappNumber: string; }

export default function AdminPanel() {
  const [, navigate] = useLocation();
  const [settings, setSettings] = useState<SiteSettings>({ whatsappNumber: "" });
  const [form, setForm] = useState<SiteSettings>({ whatsappNumber: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const getToken = () => localStorage.getItem("wt_admin_token") ?? "";

  useEffect(() => {
    const token = getToken();
    if (!token) { navigate(`${base}/`); return; }
    fetchSettings(token);
  }, []);

  const fetchSettings = async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${base}/api/admin/settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json() as SiteSettings;
      setSettings(data); setForm(data);
    } catch { /* ignore */ }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true); setStatus("idle");
    try {
      const res = await fetch(`${base}/api/admin/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(form),
      });
      if (res.status === 401) { handleLogout(); return; }
      if (!res.ok) throw new Error("Save failed");
      setSettings(form); setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
    setSaving(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("wt_admin_token");
    navigate(`${base}/`);
  };

  const hasChanges = form.whatsappNumber !== settings.whatsappNumber;

  const SYS_INFO = [
    { label: "System Status", value: "Operational", valueClass: "text-[#00FF88]" },
    { label: "Platform", value: "WhatsTrack v1.0", valueClass: "text-[#94A3B8]" },
    { label: "Encryption", value: "256-Bit SSL", valueClass: "text-[#94A3B8]" },
    { label: "Compatibility", value: "iOS & Android", valueClass: "text-[#94A3B8]" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 30% 0%, rgba(0,255,136,0.04) 0%, transparent 55%)" }} />

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(5,13,26,0.92)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-[62px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00FF88, #00CCAA)" }}
            >
              <Wifi className="w-3.5 h-3.5 text-[#050D1A]" strokeWidth={2.5} />
            </div>
            <span className="font-display font-black text-white tracking-[0.14em] text-sm">
              WHATS<span className="text-[#00FF88]">TRACK</span>
            </span>
            <div
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border"
              style={{ background: "rgba(0,255,136,0.05)", borderColor: "rgba(0,255,136,0.15)" }}
            >
              <Settings className="w-3 h-3 text-[#00FF88]" strokeWidth={1.8} />
              <span className="font-mono text-[8px] text-[#00FF88] tracking-[0.18em] uppercase font-semibold">
                Admin Panel
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`${base}/`}
              className="font-mono text-[11px] text-[#475569] hover:text-[#94A3B8] transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.03]"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] text-red-400/70 border border-red-500/15 rounded-lg hover:bg-red-500/[0.07] hover:text-red-400 transition-all cursor-pointer"
            >
              <LogOut className="w-3 h-3" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="font-display font-black text-white text-2xl uppercase tracking-wide leading-none mb-1">
            Settings
          </h1>
          <p className="font-mono text-[10px] text-[#334155] tracking-wide">
            Manage your WhatsTrack configuration
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 text-[#00FF88] animate-spin" />
          </div>
        ) : (
          <div className="grid gap-4 max-w-2xl">

            {/* WhatsApp Number */}
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#0B1628", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.18)" }}
                >
                  <Phone className="w-4.5 h-4.5 text-[#00FF88]" strokeWidth={1.8} />
                </div>
                <div>
                  <h2 className="font-display font-black text-white text-lg uppercase tracking-wide leading-none">
                    WhatsApp Contact Number
                  </h2>
                  <p className="font-mono text-[9px] text-[#334155] tracking-wide mt-0.5">
                    Users will be redirected to this number for payment
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-[9px] text-[#475569] tracking-[0.2em] uppercase mb-2.5">
                    Phone Number (include country code)
                  </label>
                  <input
                    type="text"
                    value={form.whatsappNumber}
                    onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                    placeholder="+1234567890"
                    className="w-full rounded-xl px-4 py-3.5 text-white font-mono text-sm placeholder:text-[#334155] focus:outline-none transition-all duration-200"
                    style={{
                      background: "#050D1A",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,136,0.35)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                  <p className="mt-2 font-mono text-[9px] text-[#334155] tracking-wide">
                    Format: +[country code][number] — e.g. +12345678900
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={handleSave}
                    disabled={saving || !hasChanges}
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                    style={{
                      background: "#00FF88",
                      color: "#050D1A",
                      boxShadow: hasChanges ? "0 4px 16px rgba(0,255,136,0.25)" : "none",
                    }}
                  >
                    {saving
                      ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...</>
                      : <><Save className="w-3.5 h-3.5" /> Save Changes</>
                    }
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-1.5 text-[#00FF88]">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-mono text-[11px]">Saved successfully</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-1.5 text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-mono text-[11px]">Failed to save</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* System Info */}
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#0B1628", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Activity className="w-4 h-4 text-[#00FF88]" strokeWidth={1.8} />
                <h2 className="font-display font-black text-white text-base uppercase tracking-wide">
                  System Info
                </h2>
              </div>
              <div className="space-y-3">
                {SYS_INFO.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                    <span className="font-mono text-[9px] text-[#334155] tracking-[0.18em] uppercase">{item.label}</span>
                    <span className={`font-mono text-xs font-medium ${item.valueClass}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security note */}
            <div
              className="rounded-2xl border p-4 flex items-start gap-3"
              style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.15)" }}
            >
              <AlertCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
              <p className="font-mono text-[10px] text-amber-400/60 leading-relaxed">
                To change the admin password, update the{" "}
                <span className="font-bold text-amber-400/80">ADMIN_PASSWORD</span> environment variable in your project settings.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
