import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F6] py-32 px-6 text-center">
      {/* Background blob */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#F4E6DF] rounded-full blur-3xl opacity-70 z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-[250px] h-[250px] bg-[#F37C6C] rounded-full blur-3xl opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-[#E94B4B] text-sm font-medium mb-3">Quick. Clear. Kind.</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[#2B2B2B]">
        Short-term support. Built on trust. <br />
        </h1>
        <p className="text-lg text-[#2B2B2B] mb-8 max-w-xl mx-auto">
        Apply for a $50–$350 loan, repaid over 65 days. <br /> Just a loan that shows up
          when life gets loud.
        </p>
        <Link href="/join">
          <button className="bg-[#E94B4B] text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-[#F37C6C] transition">
            Join The Beta
          </button>
        </Link>
        <p className="text-xs text-[#2B2B2B] mt-4">
          Frankie is currently in Beta. Join early and help shape the future.
        </p>
      </div>
    </section>
  );
}
