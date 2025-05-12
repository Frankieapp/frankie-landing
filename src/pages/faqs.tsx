// src/pages/faqs.tsx
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

const faqSections = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is Frankie?",
        answer: "Frankie is a human-first, short-term lending service designed to help real people — not trap them."
      },
      {
        question: "Who can use Frankie?",
        answer: "Anyone in Canada who meets our basic trust signals and identity requirements."
      },
      {
        question: "How do I apply?",
        answer: "Pick your amount, select your term, and submit your application — it only takes a few minutes."
      },
      {
        question: "How long does approval take?",
        answer: "Most approvals happen within 1–2 business days based on your trust profile."
      }
    ]
  },
  {
    title: "Borrowing & Repayment",
    items: [
      {
        question: "How fast do I get the money?",
        answer: "Funds usually land in 24–48 hours. We never say 'instant.'"
      },
      {
        question: "How much can I borrow?",
        answer: "Loans start at $50 and go up to $350 — based on eligibility."
      },
      {
        question: "What are the loan terms?",
        answer: "You can choose 14, 30, or 45 days. Fees and interest vary by term."
      },
      {
        question: "What happens if I miss a payment?",
        answer: "We’ll work with you. Frankie Plus members get one forgiveness pass per quarter."
      },
      {
        question: "Can I borrow again?",
        answer: "Yes! Just repay on time and reapply. Frankie Plus speeds this up."
      }
    ]
  },
  {
    title: "Fees & Transparency",
    items: [
      {
        question: "Is this a payday loan?",
        answer: "Nope. Frankie is the opposite — transparent, capped fees, and no rollovers."
      },
      {
        question: "What fees will I pay?",
        answer: "You'll see them upfront: $15, $25, or $30–35 depending on your term."
      },
      {
        question: "Do you charge interest?",
        answer: "Yes — modest interest based on term, always keeping APR under 60%."
      },
      {
        question: "Do I need a good credit score?",
        answer: "Nope. We use trust signals — not your credit score — to approve."
      }
    ]
  },
  {
    title: "Frankie Plus",
    items: [
      {
        question: "What is Frankie Plus?",
        answer: "Frankie Plus is our $2.99/month upgrade with perks like lower fees, faster reviews, and late forgiveness."
      },
      {
        question: "How do I upgrade?",
        answer: "You'll be able to upgrade right in your dashboard soon — stay tuned!"
      },
      {
        question: "Can I cancel Frankie Plus?",
        answer: "Yes. It’s optional and cancellable in 2 clicks. No contracts."
      },
      {
        question: "Do I get perks immediately?",
        answer: "Yep. As soon as you're subscribed, perks are live."
      }
    ]
  },
  {
    title: "Trust & Security",
    items: [
      {
        question: "Is my data safe?",
        answer: "Yes. We use encryption and never sell your data — ever."
      },
      {
        question: "Why do you ask for personal info?",
        answer: "To verify identity, reduce fraud, and offer real trust-based lending."
      }
    ]
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <main className="bg-[#FFF8F6] text-[#2B2B2B]">
      <Header />

      <section className="px-6 py-24 border-t border-[#EBD8C3] text-center">
        <h1 className="text-5xl font-extrabold mb-4">FAQs</h1>
        <p className="text-[#444] max-w-xl mx-auto">Everything you might want to know about Frankie, answered with total clarity.</p>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto space-y-10">
        {faqSections.map((section, sIdx) => (
          <div key={sIdx}>
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((faq, index) => {
                const id = `${sIdx}-${index}`;
                return (
                  <div
                    key={id}
                    className="border border-[#F4E6DF] bg-white rounded-xl shadow-sm p-4 cursor-pointer hover:shadow-md transition"
                    onClick={() => setOpenIndex(openIndex === id ? null : id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-left text-lg">{faq.question}</h3>
                      <span className="text-[#E94B4B] text-xl font-bold">{openIndex === id ? "–" : "+"}</span>
                    </div>
                    {openIndex === id && <p className="text-sm text-[#444] mt-2 leading-relaxed">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
