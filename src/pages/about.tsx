// src/pages/about.tsx
import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <main className="bg-white text-[#2B2B2B]">
      <Header />

      <section id="about" className="px-6 py-32 border-t border-[#EBD8C3] bg-[#FFF8F6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-8 tracking-tight">Who’s Frankie?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Frankie is the anti-payday lender. We’re here for the moments you need money.  No judgment, no credit score hoops, no fine print.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We’re not a bank. We’re not your credit score. We’re that friend you’d ask to spot you, except we make it official. You apply. You pay it back. It actually works.
          </p>
          <p className="text-lg mb-10 leading-relaxed">
            No traps. No shame. Just a little bit of breathing room; built on trust.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow border border-[#E94B4B]">
              <h3 className="font-bold text-md mb-2 text-[#E94B4B]">No Shame</h3>
              <p className="text-sm">You’re more than your score. Frankie sees the human, not the number.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border border-[#E94B4B]">
              <h3 className="font-bold text-md mb-2 text-[#E94B4B]">Built for Real Life</h3>
              <p className="text-sm">We built Frankie because life doesn’t wait for payday. Neither should you.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow border border-[#E94B4B]">
              <h3 className="font-bold text-md mb-2 text-[#E94B4B]">Clarity First</h3>
              <p className="text-sm">You’ll always know what you’re paying. No buried fees. No small print. No tricks.</p>
            </div>
          </div>

          <div className="mt-16">
            <a
            >
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
