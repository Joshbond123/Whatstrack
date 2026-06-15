import { useRef } from "react";
import { Eye, MessageSquare, Phone, MapPin, Shield } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const BG_IMAGE = "https://media.base44.com/images/public/6a2fdd6f77f22f5cf4a24501/019c82b65_generated_image.png";

const CAPABILITY_CARDS = [
  {
    icon: MessageSquare,
    label: "Messages",
    value: "Full Access",
    sub: "All chats & deleted",
    color: "#00FF88",
  },
  {
    icon: Phone,
    label: "Calls",
    value: "Logged",
    sub: "Voice & video",
    color: "#60A5FA",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Live GPS",
    sub: "Real-time tracking",
    color: "#F472B6",
  },
  {
    icon: Shield,
    label: "Stealth",
    value: "Zero Trace",
    sub: "Fully undetectable",
    color: "#A78BFA",
  },
];

export default function ImageSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={BG_IMAGE} alt="" className="w-full h-full object-cover opacity-[0.25]" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, #050D1A 0%, transparent 15%, transparent 85%, #050D1A 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, #050D1A 0%, transparent 20%, transparent 80%, #050D1A 100%)",
        }} />
        <div className="absolute inset-0 bg-[#050D1A]/40" />
      </div>

      {/* Scanline */}
      <div
        className="absolute inset-x-0 h-[1px] opacity-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, transparent, #00FF88, transparent)",
          animation: "scanline 5s ease-in-out infinite",
        }}
      />

      <div className="page-container" style={{ position: "relative", zIndex: 10, paddingTop: "80px", paddingBottom: "80px" }}>

        {/* Center label */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <Eye className="w-4 h-4 text-[#00FF88]" strokeWidth={1.8} />
            <span className="font-mono text-[10px] text-[#00FF88] tracking-[0.22em] uppercase font-semibold">
              All-in-One Platform
            </span>
          </div>
          <h2 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl uppercase leading-none tracking-tight">
            COMPLETE
            <br />
            <span className="text-[#00FF88]" style={{ textShadow: "0 0 50px rgba(0,255,136,0.3)" }}>
              SURVEILLANCE
            </span>
          </h2>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {CAPABILITY_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="reveal card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="relative rounded-2xl p-5 border overflow-hidden text-center"
                  style={{
                    background: "rgba(11,22,40,0.8)",
                    borderColor: `${card.color}20`,
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${card.color}12 inset`,
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.color }} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="font-mono text-[9px] tracking-widest uppercase mb-1"
                    style={{ color: `${card.color}80` }}>
                    {card.label}
                  </div>
                  <div className="font-display font-black text-white text-lg leading-none mb-1">
                    {card.value}
                  </div>
                  <div className="font-mono text-[9px] text-[#475569] tracking-wide">{card.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
