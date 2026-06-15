import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    q: "Does the target person know they are being monitored?",
    a: "No. WhatsTrack operates in complete stealth mode. There are no notifications, no battery warnings, no unusual activity — nothing on the target device reveals it is being monitored. It is 100% undetectable.",
  },
  {
    q: "Do I need physical access to the target phone?",
    a: "No physical access is required. WhatsTrack works remotely. All you need is the target's WhatsApp phone number to initiate monitoring.",
  },
  {
    q: "Which devices are supported?",
    a: "WhatsTrack is fully compatible with both iOS (iPhone) and Android devices running any recent version of WhatsApp. No jailbreak or root access required.",
  },
  {
    q: "How soon does monitoring begin?",
    a: "Monitoring begins within minutes of completing your purchase. You will receive your dashboard access credentials via email instantly after payment.",
  },
  {
    q: "Is this a one-time payment or a subscription?",
    a: "It is a one-time payment of $10. There are no monthly fees, no hidden charges, and no renewal costs. Once you pay, you have lifetime access.",
  },
  {
    q: "How is my payment information secured?",
    a: "All transactions are processed through a 256-bit SSL encrypted payment gateway. We never store your card details, and your billing information remains completely confidential.",
  },
  {
    q: "Can I monitor multiple WhatsApp accounts?",
    a: "Your $10 purchase grants access to monitor one WhatsApp account. Additional accounts can be added at the same one-time rate per account.",
  },
  {
    q: "What if I need help setting up?",
    a: "Our support team is available 24/7. After purchase, you will receive a detailed setup guide. Most users are fully operational within 5 minutes of payment.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#050D1A" }}
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      <div className="page-container" style={{ position: "relative" }}>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-5 reveal">Intel Brief</div>
            <h2 className="font-display font-black text-white uppercase leading-none mb-5 reveal">
              <span className="block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">FREQUENTLY</span>
              <span
                className="block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#00FF88] mt-1"
                style={{ textShadow: "0 0 40px rgba(0,255,136,0.25)" }}
              >
                ASKED
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-5xl xl:text-6xl">QUESTIONS</span>
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-sm reveal reveal-delay-1">
              Everything you need to know about WhatsTrack. Can't find the answer you're looking for? Our support team is available 24/7.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 reveal reveal-delay-2">
              {[
                { v: "50K+", l: "Satisfied Users" },
                { v: "99.97%", l: "Uptime Rate" },
                { v: "&lt;5 min", l: "Setup Time" },
                { v: "24/7", l: "Support" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl p-3.5 border"
                  style={{ background: "#0B1628", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="font-display font-black text-xl leading-none mb-0.5"
                    dangerouslySetInnerHTML={{ __html: s.v }}
                    style={{ color: "#00FF88" }}
                  />
                  <div className="font-mono text-[9px] text-[#475569] tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`reveal card-hover rounded-2xl border overflow-hidden transition-all duration-300 ${
                  i < 4 ? `reveal-delay-${i + 1}` : ""
                }`}
                style={{
                  background: open === i ? "#0B1628" : "rgba(11,22,40,0.5)",
                  borderColor: open === i ? "rgba(0,255,136,0.2)" : "rgba(255,255,255,0.05)",
                  boxShadow: open === i ? "0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,255,136,0.05) inset" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer group"
                >
                  <span className="text-sm font-medium text-[#E2E8F0] leading-snug group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <div
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={open === i
                      ? { background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.25)" }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }
                    }
                  >
                    {open === i
                      ? <Minus className="w-3 h-3 text-[#00FF88]" strokeWidth={2.5} />
                      : <Plus className="w-3 h-3 text-[#64748B]" strokeWidth={2.5} />
                    }
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? "200px" : "0" }}
                >
                  <div className="px-5 pb-5 border-t border-white/[0.04]">
                    <p className="text-[#64748B] text-sm leading-relaxed pt-4">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
