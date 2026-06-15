import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { X, Lock, Eye, EyeOff, Loader2, Shield } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdminLoginModal({ open, onClose }: Props) {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setPassword(""); setError("");
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  if (!open) return null;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setLoading(true); setError("");
    try {
      const res = await fetch(`${base}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json() as { token?: string; error?: string };
      if (!res.ok || !data.token) {
        setError(data.error ?? "Invalid credentials");
        setLoading(false);
        return;
      }
      localStorage.setItem("wt_admin_token", data.token);
      onClose();
      navigate(`${base}/admin`);
    } catch {
      setError("Connection error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75" style={{ backdropFilter: "blur(12px)" }} />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
          border: "1px solid rgba(0,255,136,0.18)",
          boxShadow: "0 0 80px rgba(0,255,136,0.08), 0 24px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top accent */}
        <div className="h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #00FF88 50%, transparent)" }} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
            >
              <Lock className="w-4 h-4 text-[#00FF88]" strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="font-display font-black text-white text-lg uppercase tracking-wide leading-none">
                Admin Access
              </h2>
              <p className="font-mono text-[9px] text-[#475569] tracking-[0.18em] uppercase mt-0.5">
                Secure Authentication
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#475569] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.05] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block font-mono text-[9px] text-[#475569] tracking-[0.2em] uppercase mb-2.5">
              Admin Password
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter admin password"
                className="w-full rounded-xl px-4 py-3.5 pr-12 font-mono text-sm text-white placeholder:text-[#334155] transition-all duration-200 focus:outline-none"
                style={{
                  background: "#050D1A",
                  border: `1px solid ${error ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)"}`,
                  boxShadow: error ? "0 0 0 3px rgba(248,113,113,0.08)" : "none",
                }}
                onFocus={(e) => {
                  if (!error) e.target.style.borderColor = "rgba(0,255,136,0.35)";
                }}
                onBlur={(e) => {
                  if (!error) e.target.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#334155] hover:text-[#94A3B8] transition-colors cursor-pointer p-1"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="mt-2 font-mono text-[10px] text-red-400 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#00FF88] text-[#050D1A] font-bold text-sm rounded-xl hover:bg-[#00E07A] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            style={{ boxShadow: "0 4px 16px rgba(0,255,136,0.25)" }}
          >
            {loading
              ? <><Loader2 className="w-4 h-4 animate-spin" /> Authenticating...</>
              : <><Shield className="w-4 h-4" /> Access Panel</>
            }
          </button>
        </form>
      </div>
    </div>
  );
}
