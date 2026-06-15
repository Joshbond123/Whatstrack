import { MessageSquare, Phone, Camera, Users, Clock, MapPin, Lock, BarChart3 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "MESSAGE MONITORING",
    desc: "Read all incoming and outgoing messages in real-time. Full chat history including deleted messages.",
    tag: "LIVE",
    color: "#00FF88",
    featured: true,
  },
  {
    icon: Phone,
    title: "CALL TRACKING",
    desc: "Log every WhatsApp call — voice and video. Duration, timestamps, and contact details captured.",
    tag: "REAL-TIME",
    color: "#60A5FA",
  },
  {
    icon: Camera,
    title: "MEDIA ACCESS",
    desc: "View all photos, videos, voice notes, and documents shared or received on the monitored account.",
    tag: "FULL ACCESS",
    color: "#F472B6",
  },
  {
    icon: Users,
    title: "CONTACT LIST",
    desc: "Complete access to their contacts list. See who they're talking to and how frequently.",
    tag: "SYNC",
    color: "#A78BFA",
  },
  {
    icon: Clock,
    title: "ONLINE STATUS",
    desc: "Track exact online/offline times and last seen timestamps. Detect activity patterns instantly.",
    tag: "PRECISE",
    color: "#34D399",
  },
  {
    icon: MapPin,
    title: "LIVE LOCATION",
    desc: "Access shared location data and movement history directly from their WhatsApp activity.",
    tag: "GPS",
    color: "#FB923C",
  },
  {
    icon: Lock,
    title: "ZERO FOOTPRINT",
    desc: "Completely undetectable. No battery drain, no notifications, no traces on the target device.",
    tag: "STEALTH",
    color: "#00FF88",
  },
  {
    icon: BarChart3,
    title: "ACTIVITY REPORTS",
    desc: "Automated daily and weekly reports. Visualize usage patterns, peak hours, and behavioral trends.",
    tag: "ANALYTICS",
    color: "#60A5FA",
  },
];

export default function FeaturesSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const [featured, ...rest] = FEATURES;
  const FeaturedIcon = featured.icon;

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 60%)", filter: "blur(80px)" }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="section-label mx-auto mb-5 reveal">Capability Matrix</div>
          <h2 className="font-display font-black text-white uppercase leading-none reveal">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">EVERYTHING YOU</span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#00FF88] mt-1"
              style={{ textShadow: "0 0 40px rgba(0,255,136,0.25)" }}
            >
              NEED TO KNOW
            </span>
          </h2>
          <p className="mt-5 text-[#64748B] text-base max-w-lg mx-auto leading-relaxed reveal reveal-delay-1">
            Full-spectrum WhatsApp intelligence. Every feature runs silently with military-grade encryption.
          </p>
        </div>

        {/* Featured card */}
        <div className="mb-4 reveal">
          <div
            className="relative rounded-2xl border overflow-hidden p-7 sm:p-8 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0B1628 0%, #0F1D35 60%, rgba(0,255,136,0.03) 100%)",
              borderColor: "rgba(0,255,136,0.2)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,136,0.06) inset",
            }}
          >
            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, #00FF88, transparent)" }} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)" }}
              >
                <FeaturedIcon className="w-7 h-7 text-[#00FF88]" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-display font-black text-white text-2xl uppercase tracking-wide leading-none">
                    {featured.title}
                  </h3>
                  <span
                    className="font-mono text-[9px] font-bold tracking-[0.18em] px-2.5 py-1 rounded-full border"
                    style={{ color: "#00FF88", borderColor: "rgba(0,255,136,0.3)", background: "rgba(0,255,136,0.08)" }}
                  >
                    {featured.tag}
                  </span>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed max-w-2xl">{featured.desc}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-blink" />
                <span className="font-mono text-[10px] text-[#00FF88] tracking-[0.15em] font-semibold">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`reveal card-hover reveal-delay-${(i % 4) + 1}`}
              >
                <div
                  className="group h-full rounded-2xl border p-6 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                    borderColor: "rgba(255,255,255,0.06)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${feat.color}08 0%, transparent 60%)` }}
                  />
                  {/* Active border on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${feat.color}20` }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: `${feat.color}0D`,
                          border: `1px solid ${feat.color}20`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: feat.color }} strokeWidth={1.8} />
                      </div>
                      <span
                        className="font-mono text-[8px] font-semibold tracking-[0.16em] px-2 py-0.5 rounded border"
                        style={{
                          color: `${feat.color}70`,
                          borderColor: `${feat.color}18`,
                          background: `${feat.color}06`,
                        }}
                      >
                        {feat.tag}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-white text-base uppercase tracking-wide mb-2 leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-[#475569] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
