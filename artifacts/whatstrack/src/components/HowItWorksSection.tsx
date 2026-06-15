import { Link } from "wouter";
import { ArrowRight, CreditCard, Search, Monitor } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const STEPS = [
  {
    num: "01",
    icon: CreditCard,
    title: "PURCHASE ACCESS",
    desc: "Complete your one-time $10 payment. Instant access delivered to your email within seconds.",
    color: "#00FF88",
  },
  {
    num: "02",
    icon: Search,
    title: "ENTER TARGET NUMBER",
    desc: "Input the WhatsApp number you want to monitor. Our system initiates a silent, encrypted connection.",
    color: "#60A5FA",
  },
  {
    num: "03",
    icon: Monitor,
    title: "MONITOR IN REAL-TIME",
    desc: "Access the full dashboard — messages, calls, media, contacts, and live online status. Zero trace left.",
    color: "#00FF88",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#080F1E" }}
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="section-label mx-auto mb-5 reveal">Deployment Protocol</div>
          <h2 className="font-display font-black text-white uppercase leading-none reveal">
            <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">UP AND RUNNING IN</span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#00FF88] mt-1"
              style={{ textShadow: "0 0 40px rgba(0,255,136,0.25)" }}
            >
              3 STEPS
            </span>
          </h2>
          <p className="mt-5 text-[#64748B] text-base max-w-md mx-auto leading-relaxed reveal reveal-delay-1">
            No technical knowledge required. No physical access to the target device. No app to install.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-5 lg:gap-8">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[38px] z-0"
            style={{
              left: "calc(16.6% + 24px)",
              right: "calc(16.6% + 24px)",
              height: "1px",
              background: "linear-gradient(90deg, rgba(0,255,136,0.3) 0%, rgba(96,165,250,0.3) 50%, rgba(0,255,136,0.3) 100%)",
            }}
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1}`}
              >
                <div className="flex flex-col gap-5">
                  {/* Step icon */}
                  <div className="relative z-10 flex items-center gap-4 md:block">
                    <div
                      className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shrink-0"
                      style={{
                        background: `${step.color}0D`,
                        borderColor: `${step.color}30`,
                        boxShadow: `0 0 0 4px ${step.color}08, 0 8px 24px rgba(0,0,0,0.4)`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.8} />
                    </div>
                    <div className="md:hidden">
                      <span className="font-mono text-[9px] font-bold tracking-[0.2em]"
                        style={{ color: `${step.color}70` }}>
                        STEP {step.num}
                      </span>
                      <h3 className="font-display font-black text-white text-xl uppercase tracking-wide leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 border transition-all duration-300"
                    style={{
                      background: "linear-gradient(145deg, #0B1628 0%, #0F1D35 100%)",
                      borderColor: "rgba(255,255,255,0.06)",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div className="hidden md:block mb-3">
                      <span className="font-mono text-[9px] font-semibold tracking-[0.2em] uppercase"
                        style={{ color: `${step.color}60` }}>
                        Step {step.num}
                      </span>
                    </div>
                    <h3 className="hidden md:block font-display font-black text-white text-xl uppercase tracking-wide mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center reveal">
          <Link
            href={`${base}/purchase`}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#00FF88] text-[#050D1A] font-bold text-base rounded-xl hover:bg-[#00E07A] transition-all duration-200 cursor-pointer"
            style={{ boxShadow: "0 4px 20px rgba(0,255,136,0.25)" }}
          >
            START MONITORING NOW
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
