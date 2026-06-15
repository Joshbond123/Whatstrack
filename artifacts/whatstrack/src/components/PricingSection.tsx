import { Link } from "wouter";
import { Check, ArrowRight, Zap, Shield, Clock, RefreshCw } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FEATURES_INCLUDED = [
  "Real-time message monitoring",
  "Call log tracking (voice & video)",
  "Full media access (photos, videos, docs)",
  "Contact list synchronization",
  "Online status & last seen tracking",
  "Live location data access",
  "Zero-footprint stealth mode",
  "Activity reports & analytics",
  "iOS & Android compatible",
  "256-bit end-to-end encryption",
  "Lifetime access — no subscription",
  "24/7 monitoring dashboard",
];

const GUARANTEES = [
  { icon: Shield, label: "256-Bit SSL" },
  { icon: Clock, label: "Instant Access" },
  { icon: RefreshCw, label: "Lifetime" },
  { icon: Zap, label: "Real-Time" },
];

export default function PricingSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#080F1E" }}
    >
      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 55%)", filter: "blur(80px)" }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="section-label mx-auto mb-5 reveal">Access Pricing</div>
          <h2 className="font-display font-black text-white uppercase leading-none reveal">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">ONE PRICE.</span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#00FF88] mt-1"
              style={{ textShadow: "0 0 40px rgba(0,255,136,0.25)" }}
            >
              FULL ACCESS.
            </span>
          </h2>
          <p className="mt-5 text-[#64748B] text-base max-w-md mx-auto reveal reveal-delay-1">
            No subscriptions. No hidden fees. Pay once, monitor forever.
          </p>
        </div>

        <div className="flex justify-center reveal reveal-delay-2">
          <div className="w-full max-w-2xl">
            {/* Popular badge */}
            <div className="flex justify-center mb-[-1px] relative z-10">
              <div
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-t-xl"
                style={{
                  background: "#00FF88",
                  boxShadow: "0 -4px 20px rgba(0,255,136,0.3)",
                }}
              >
                <Zap className="w-3 h-3 text-[#050D1A]" strokeWidth={2.5} />
                <span className="font-mono text-[9px] text-[#050D1A] font-black tracking-[0.22em] uppercase">Most Popular</span>
              </div>
            </div>

            {/* Main card */}
            <div
              className="relative rounded-2xl rounded-tl-2xl border-2 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                borderColor: "rgba(0,255,136,0.3)",
                boxShadow: "0 0 60px rgba(0,255,136,0.08), 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Top accent line */}
              <div className="h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #00FF88 40%, #00CCAA 60%, transparent)" }} />

              <div className="p-8 sm:p-10">
                {/* Price */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
                  <div>
                    <div className="font-mono text-[10px] text-[#475569] tracking-[0.25em] uppercase mb-2">
                      One-Time Payment
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="font-display font-black text-[#00FF88] text-3xl mt-2">$</span>
                      <span
                        className="font-display font-black text-white leading-none"
                        style={{ fontSize: "clamp(5rem, 14vw, 7.5rem)" }}
                      >
                        10
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-[#475569] tracking-[0.2em] uppercase mt-1">
                      Lifetime access · No renewals
                    </div>
                  </div>

                  {/* Guarantee badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:min-w-[160px]">
                    {GUARANTEES.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 bg-[#050D1A]/60 rounded-lg px-3 py-2 border border-white/[0.05]">
                        <Icon className="w-3.5 h-3.5 text-[#00FF88] shrink-0" strokeWidth={1.8} />
                        <span className="font-mono text-[9px] text-[#64748B] tracking-wider">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="section-divider mb-8" />

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {FEATURES_INCLUDED.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.22)" }}
                      >
                        <Check className="w-2.5 h-2.5 text-[#00FF88]" strokeWidth={2.5} />
                      </div>
                      <span className="text-[#94A3B8] text-xs leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`${base}/purchase`}
                  className="btn-shimmer flex items-center justify-center gap-3 w-full py-4 bg-[#00FF88] text-[#050D1A] font-bold text-lg rounded-xl hover:bg-[#00E07A] transition-all duration-200 cursor-pointer"
                  style={{ boxShadow: "0 4px 24px rgba(0,255,136,0.3)" }}
                >
                  GET INSTANT ACCESS
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>

                <p className="text-center font-mono text-[9px] text-[#334155] mt-4 tracking-wide">
                  256-BIT SSL ENCRYPTED · ANONYMOUS · INSTANT DELIVERY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
