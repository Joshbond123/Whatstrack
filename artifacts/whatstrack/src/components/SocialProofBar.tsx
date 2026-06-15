import { Shield, Smartphone, Users, Zap, Lock, Globe, Clock } from "lucide-react";

const ITEMS = [
  { icon: Users,     text: "50,000+ Active Users" },
  { icon: Shield,    text: "256-Bit Military Encryption" },
  { icon: Smartphone,text: "iOS & Android Compatible" },
  { icon: Zap,       text: "Real-Time Monitoring" },
  { icon: Lock,      text: "Zero Footprint Technology" },
  { icon: Globe,     text: "Available Worldwide" },
  { icon: Clock,     text: "Instant Access — 5 Minutes" },
];

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS];

export default function SocialProofBar() {
  return (
    <div className="relative overflow-hidden"
      style={{ background: "linear-gradient(90deg, #080F1E 0%, #0B1628 50%, #080F1E 100%)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080F1E, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080F1E, transparent)" }} />

      <div className="flex animate-marquee w-max py-[14px] select-none" style={{ willChange: "transform" }}>
        {ALL.map(({ icon: Icon, text }, i) => (
          <div
            key={`${text}-${i}`}
            className="flex items-center gap-2.5 mx-7 shrink-0"
          >
            <div className="w-6 h-6 rounded-md bg-[#00FF88]/[0.08] border border-[#00FF88]/15 flex items-center justify-center shrink-0">
              <Icon className="w-3 h-3 text-[#00FF88]" strokeWidth={1.8} />
            </div>
            <span className="text-xs font-medium text-[#64748B] whitespace-nowrap">{text}</span>
            <span className="w-1 h-1 rounded-full bg-[#00FF88]/20 ml-4 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
