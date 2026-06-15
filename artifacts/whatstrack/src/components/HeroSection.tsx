import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Shield, Smartphone, Users, CheckCircle, Eye, Lock } from "lucide-react";

const PHONE_IMAGE = "https://media.base44.com/images/public/6a2fdd6f77f22f5cf4a24501/3fcfb6ff8_generated_image.png";

const CHECKLIST = [
  "Read all messages in real-time",
  "Track calls, voice & video",
  "Zero footprint — fully stealth",
  "iOS & Android compatible",
];

const TRUST = [
  { icon: Shield, text: "256-bit SSL" },
  { icon: Smartphone, text: "iOS & Android" },
  { icon: Users, text: "50,000+ users" },
];

const STATS = [
  { label: "Active Users", value: "50K+" },
  { label: "Uptime", value: "99.97%" },
  { label: "Setup Time", value: "<5 min" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.0 + 0.3,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.3 + 0.07,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${p.alpha})`; ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,136,${0.05 * (1 - d / 90)})`;
          ctx.lineWidth = 0.4;
          ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #050D1A 0%, #060F1F 100%)",
        paddingTop: "80px",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 55% at 60% 30%, rgba(0,255,136,0.06) 0%, transparent 60%)",
      }} />

      {/* Grid pattern */}
      <div className="grid-pattern absolute inset-0 opacity-40 pointer-events-none" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

      <div className="page-container" style={{ position: "relative" }}>
        {/* Live badge */}
        <div style={{ paddingTop: "48px", paddingBottom: "8px" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(0,255,136,0.25)", background: "rgba(0,255,136,0.07)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-blink" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#00FF88" }}>
              System Status: Operational
            </span>
          </div>
        </div>

        {/* Main grid: copy left, phone right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          paddingBottom: "72px",
        }}
          className="hero-grid"
        >
          {/* ── LEFT: Copy ── */}
          <div style={{ paddingTop: "24px" }}>
            <h1
              className="font-display font-black"
              style={{
                lineHeight: 0.92,
                fontSize: "clamp(44px, 5.5vw, 76px)",
                letterSpacing: "-0.01em",
                marginBottom: "20px",
              }}
            >
              <span style={{ display: "block", color: "#F1F5F9" }}>SEE EVERY</span>
              <span style={{ display: "block", color: "#00FF88", textShadow: "0 0 60px rgba(0,255,136,0.28)" }}>
                MESSAGE,
              </span>
              <span style={{ display: "block", color: "#F1F5F9" }}>CALL &amp; MORE.</span>
            </h1>

            <p style={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.75, maxWidth: "430px", marginBottom: "28px" }}>
              WhatsTrack gives you real-time access to any WhatsApp account — chats, calls, media,
              and live status. Completely silent. No app installed. $10, one time.
            </p>

            {/* Checklist */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 16px", marginBottom: "32px", maxWidth: "400px" }}>
              {CHECKLIST.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle style={{ width: "14px", height: "14px", color: "#00FF88", flexShrink: 0, marginTop: "2px" }} strokeWidth={2.2} />
                  <span style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginBottom: "28px" }}>
              <Link
                href={`${base}/purchase`}
                className="btn-shimmer inline-flex items-center gap-3 cursor-pointer"
                style={{
                  padding: "14px 28px",
                  background: "#00FF88",
                  color: "#050D1A",
                  fontWeight: 700,
                  fontSize: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 24px rgba(0,255,136,0.32)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "background 0.2s",
                }}
              >
                GET WHATSTRACK NOW — $10
                <ArrowRight style={{ width: "16px", height: "16px" }} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Trust row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {TRUST.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon style={{ width: "13px", height: "13px", color: "#00FF88" }} strokeWidth={1.8} />
                  <span style={{ fontSize: "11px", color: "#475569", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Phone visual ── */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", paddingTop: "40px" }}>
            {/* Glow ring */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "340px", height: "340px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 65%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }} />
            <div className="animate-pulse-ring" style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "320px", height: "320px",
              borderRadius: "50%",
              border: "1px solid rgba(0,255,136,0.09)",
              pointerEvents: "none",
            }} />

            {/* Phone image */}
            <div className="animate-float" style={{ position: "relative", zIndex: 10 }}>
              <img
                src={PHONE_IMAGE}
                alt="WhatsTrack monitoring interface"
                style={{ width: "260px", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))" }}
                loading="eager"
              />
            </div>

            {/* Badge: Live Sync — anchored top-right inside container */}
            <div className="glass" style={{
              position: "absolute", top: "32px", right: "0",
              border: "1px solid rgba(0,255,136,0.25)", borderRadius: "12px",
              padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)", zIndex: 20,
            }}>
              <span className="animate-blink" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00FF88", flexShrink: 0 }} />
              <div>
                <div className="font-mono" style={{ fontSize: "9px", fontWeight: 600, color: "#00FF88", letterSpacing: "0.15em", textTransform: "uppercase" }}>Live Sync</div>
                <div className="font-mono" style={{ fontSize: "8px", color: "#475569", letterSpacing: "0.12em" }}>Active now</div>
              </div>
            </div>

            {/* Badge: Stealth — anchored bottom-left inside container */}
            <div className="glass" style={{
              position: "absolute", bottom: "40px", left: "0",
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px",
              padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)", zIndex: 20,
            }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Lock style={{ width: "13px", height: "13px", color: "#00FF88" }} strokeWidth={1.8} />
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: "9px", fontWeight: 600, color: "#F1F5F9", letterSpacing: "0.14em", textTransform: "uppercase" }}>Undetectable</div>
                <div className="font-mono" style={{ fontSize: "8px", color: "#475569", letterSpacing: "0.12em" }}>Zero footprint</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: "flex",
          gap: "0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "-1px",
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              flex: 1,
              padding: "20px 0",
              textAlign: "center",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined,
            }}>
              <div className="font-display font-black" style={{ fontSize: "28px", color: "#00FF88", lineHeight: 1 }}>{s.value}</div>
              <div className="font-mono" style={{ fontSize: "9px", color: "#475569", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
