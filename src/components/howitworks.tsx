import { FileText, ShieldCheck, Banknote, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-[#E94B4B]" />,
      title: "Apply in minutes",
      desc: "No credit score games. Just tell us what you need."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E94B4B]" />,
      title: "We verify you",
      desc: "We use trust signals, not your credit score."
    },
    {
      icon: <Banknote className="w-8 h-8 text-[#E94B4B]" />,
      title: "Money arrives",
      desc: "In your account in 24–48 hours. Real fast. Not 'instant.'"
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#E94B4B]" />,
      title: "Pay + thrive",
      desc: "Pay on time, borrow again, and unlock perks. Easy."
    }
  ];

  return (
    <section className="bg-[#F4E6DF] px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 tracking-tight">How it actually works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-left mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-start text-[#2B2B2B]"
            >
              <div className="mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}