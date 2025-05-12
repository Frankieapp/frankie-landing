// src/components/faq.tsx
import { useState } from "react";

const faqs = [
  {
    q: "How fast do I get the money?",
    a: "Funds usually arrive in 24–48 hours. We never say 'instant' because real trust takes a minute.",
  },
  {
    q: "Is this a payday loan?",
    a: "Nope. We’re the opposite — transparent, fair, and human. Frankie’s built to help, not trap.",
  },
  {
    q: "Do I need a good credit score?",
    a: "Not at all. We use trust signals instead of credit checks. Your score isn’t the full story — and we know that.",
  },
  {
    q: "What happens if I’m late?",
    a: "Life happens. You’ll get one forgiveness pass with Frankie Boost, and we’ll work with you on the rest.",
  },
  {
    q: "What are the fees?",
    a: "Always upfront. You’ll see $15, $25, or $30–35 depending on your loan term. That’s it. No surprise charges."
  },
  {
    q: "Is Frankie legit?",
    a: "Totally. We’re a Canadian company built for real people — with real rules and real care."
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white px-6 py-32 border-t border-[#EBD8C3]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#EBD8C3] rounded-2xl p-6 shadow-sm transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="font-semibold text-lg text-[#2B2B2B]">{faq.q}</span>
                <span className="text-[#E94B4B] text-2xl">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-sm text-[#2B2B2B] mt-4 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}