// src/pages/frankieplus.tsx
import Header from "../components/header";
import Footer from "../components/footer";
import { CheckCircle, Sparkles, ShieldCheck, ArrowRight, Smile, Users, Check } from "lucide-react";

export default function FrankiePlus() {
  return (
    <main className="bg-[#FFF8F6] text-[#2B2B2B]">
      <Header />

      <section className="text-center px-6 py-24 border-t border-[#EBD8C3]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Frankie Plus</h1>
          <p className="text-sm text-[#888] mt-2 italic">
            No tricks. No fine print. Just some friendly upgrades for folks who borrow with heart.
          </p>
          <p className="text-lg text-[#444] mb-6 mt-4 leading-relaxed">
            Frankie Plus gives you a few kind extras. Just <span className="font-semibold">$3.99/month</span>{' '}
            <span className="italic text-sm text-[#888]">(yep, same price as a coffee)</span>.
          </p>

          <ul className="mt-4 space-y-2 text-[#444] text-sm text-left max-w-sm mx-auto">
            <li className="flex items-start gap-2">
              <Check className="text-[#E94B4B] w-4 h-4 mt-1" /> Save $10–15 on every loan
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#E94B4B] w-4 h-4 mt-1" /> No fee if you’re late (once per quarter)
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#E94B4B] w-4 h-4 mt-1" /> Loyalty rewards, faster re-approvals, and more
            </li>
          </ul>

          <button
            onClick={() => alert("Coming soon: Frankie Plus upgrade flow!")}
            className="inline-block mt-8 bg-[#E94B4B] text-white text-base font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Perk Me Up 
          </button>

          <p className="mt-6 text-sm text-[#888] italic">
            Still not sure? No pressure. Frankie works great without Plus, too.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <Sparkles className="text-[#E94B4B] w-5 h-5" />, title: "Lower Frankie Fees", desc: "Save $10–15 every time you borrow." },
            { icon: <ShieldCheck className="text-[#E94B4B] w-5 h-5" />, title: "Late Forgiveness", desc: "One pass per quarter — because life happens." },
            { icon: <ArrowRight className="text-[#E94B4B] w-5 h-5" />, title: "Faster Re-Approval", desc: "Get reviewed faster if you repay on time." },
            { icon: <Smile className="text-[#E94B4B] w-5 h-5" />, title: "Loyalty Rewards", desc: "$5 credits, trust boosts, and other perks." },
            { icon: <Users className="text-[#E94B4B] w-5 h-5" />, title: "Referral Credit", desc: "Share Frankie, earn credit when friends join." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#F4E6DF] p-5 rounded-xl shadow hover:shadow-md transition">
              <div className="w-10 h-10 rounded-full bg-[#FFF0ED] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-[#444]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-white border-t border-[#EBD8C3]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Compare Plans</h2>
          <div className="overflow-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden border border-[#F4E6DF]">
              <thead className="bg-[#FFF0ED]">
                <tr className="text-sm text-[#2B2B2B]">
                  <th className="p-4 font-semibold text-left">Feature</th>
                  <th className="p-4 font-semibold text-center">Free Frankie</th>
                  <th className="p-4 font-semibold text-center">Frankie Plus</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: "Standard Access", free: true, plus: true },
                  { feature: "Lower Fees", free: false, plus: true },
                  { feature: "Late Forgiveness (1x/qtr)", free: false, plus: true },
                  { feature: "Faster Re-Review", free: false, plus: true },
                  { feature: "Loyalty Bonuses", free: false, plus: true },
                  { feature: "Referral Credit", free: false, plus: true },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[#F4E6DF]">
                    <td className="p-4 font-medium text-left">{row.feature}</td>
                    <td className="p-4 text-center">{row.free ? <CheckCircle className="text-[#2B2B2B] w-4 h-4 mx-auto" /> : "—"}</td>
                    <td className="p-4 text-center">{row.plus ? <CheckCircle className="text-[#E94B4B] w-4 h-4 mx-auto" /> : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            onClick={() => alert("Coming soon: Frankie Plus upgrade flow!")}
            className="inline-block mt-10 bg-[#E94B4B] text-white text-base font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Perk Me Up 
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}