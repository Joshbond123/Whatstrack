import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTABanner() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: "#080F1E" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,136,0.06) 0%, transparent 65%)" }} />
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.18), transparent)" }} />
        <div className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.1), transparent)" }} />
      </div>

      <div className="page-container" style={{ position: "relative", textAlign: "center" }}>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 reveal">
          {[
            { icon: Shield, text: "256-Bit Encrypted" },
            { icon: Zap, text: "Instant Delivery" },
            { icon: Users, text: "50K+ Active Users" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-[#00FF88]" strokeWidth={1.8} />
              <span className="font-mono text-[10px] text-[#475569] tracking-[0.16em] uppercase">{text}</span>
            </div>
          ))}
        </div>

        <h2 className="font-display font-black text-white uppercase leading-none mb-5 reveal">
          <span className="block text-4xl sm:text-5xl lg:text-6xl">START MONITORING</span>
          <span
            className="block text-4xl sm:text-5xl lg:text-6xl text-[#00FF88] mt-1"
            style={{ textShadow: "0 0 50px rgba(0,255,136,0.3)" }}
          >
            RIGHT NOW
          </span>
        </h2>

        <p className="text-[#64748B] text-base mb-10 max-w-md mx-auto leading-relaxed reveal reveal-delay-1">
          One-time payment of $10. No subscriptions. No hidden fees. Instant access delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
          <Link
            href={`${base}/purchase`}
            className="btn-shimmer inline-flex items-center gap-3 px-10 py-5 bg-[#00FF88] text-[#050D1A] font-bold text-lg rounded-2xl hover:bg-[#00E07A] transition-all duration-200 cursor-pointer"
            style={{ boxShadow: "0 8px 40px rgba(0,255,136,0.3)" }}
          >
            GET WHATSTRACK NOW — $10
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Mini trust line */}
        <p className="mt-6 font-mono text-[9px] text-[#334155] tracking-[0.2em] uppercase reveal reveal-delay-3">
          Anonymous · No card stored · Cancel anytime
        </p>
      </div>
    </section>
  );
}
