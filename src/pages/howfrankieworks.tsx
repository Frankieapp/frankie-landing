import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import { ShieldCheck, Lock, Clock } from "lucide-react";
import Link from "next/link";

export default function HowFrankieWorks() {
  const [amount, setAmount] = useState(250);

  const feeMap: { [key: number]: number } = {
    100: 10.5,
    125: 13.0,
    150: 15.5,
    175: 18.25,
    200: 20.75,
    225: 23.5,
    250: 26.0,
    275: 28.5,
    300: 31.0,
    325: 33.75,
    350: 36.25,
    375: 38.75,
    400: 41.5,
  };

  const fee = feeMap[amount] || 0;
  const total = amount + fee;

  return (
    <main className="bg-white text-[#2B2B2B]">
      <Header />

      <section className="px-6 py-24 border-t border-[#EBD8C3] bg-[#FFF8F6] text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">How Frankie Works</h1>
          <p className="text-lg mb-12 leading-relaxed text-[#555]">
            Frankie is a transparent flat-fee lender. We keep it simple. You borrow, pay one clear fee, and repay in 65 days. No credit score needed. No surprises.
          </p>

          <div className="bg-white border border-[#EBD8C3] rounded-2xl p-8 text-left shadow-md">
            <h2 className="text-3xl font-bold mb-4">Why Frankie’s Different</h2>
            <ul className="list-disc list-inside space-y-3 text-[#2B2B2B]">
              <li><strong>Simple Terms:</strong> Borrow $100–$400 and repay in 65 days. One payment, one fee. That’s it.</li>
              <li><strong>No Score Shaming:</strong> We don’t use your credit score to decide.</li>
              <li><strong>Flat Fee Only:</strong> No compounding interest. Just a clear flat fee you see upfront.</li>
              <li><strong>Fair & Legal:</strong> We keep every fee compliant with Canada’s 60% APR limit.</li>
              <li><strong>Quick Access:</strong> Funds typically arrive within 24–48 hours of approval.</li>
              <li><strong>Built for Good:</strong> Frankie earns a small fixed fee, not more the longer you owe.</li>
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Loan Calculator</h2>
            <div className="bg-white border border-[#EBD8C3] rounded-2xl p-8 max-w-md mx-auto text-left shadow-md">
              <label className="block mb-6">
                <span className="font-semibold text-[#2B2B2B]">Loan Amount</span>
                <input
                  type="range"
                  min="100"
                  max="400"
                  step="25"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-3 accent-[#E94B4B] cursor-pointer"
                />
                <div className="mt-2 font-bold text-[#E94B4B] text-xl">${amount}</div>
              </label>

              <div className="mt-6 space-y-2 text-sm text-[#2B2B2B]">
                <p><strong>Frankie Fee:</strong> ${fee.toFixed(2)}</p>
                <div className="bg-[#FFF0ED] p-3 rounded-lg text-sm mt-3">
                  <p className="font-medium">Total Repayment (Day 65): <span className="text-[#E94B4B] font-bold">${total.toFixed(2)}</span></p>
                </div>
                <p className="text-xs text-[#888] mt-3">This is an estimate based on our standard 58% APR table.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 text-sm text-left">
            {[{
              icon: <ShieldCheck className="text-[#E94B4B] w-6 h-6 mb-2" />, title: "Always Transparent",
              desc: "Flat fees, clear math, zero fine print."
            }, {
              icon: <Lock className="text-[#E94B4B] w-6 h-6 mb-2" />, title: "Safe & Secure",
              desc: "Your info is protected and encrypted."
            }, {
              icon: <Clock className="text-[#E94B4B] w-6 h-6 mb-2" />, title: "Fast Access",
              desc: "Funds sent within 24–48 hours if approved."
            }].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-[#EBD8C3] shadow text-left">
                {item.icon}
                <p className="font-bold mb-1">{item.title}</p>
                <p className="text-[#444]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/">
              <a className="inline-block bg-[#E94B4B] text-white text-base font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition">
                Start Your Application
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
