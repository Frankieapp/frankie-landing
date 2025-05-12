import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="apply"
      className="bg-[#FFF8F6] px-6 py-32 text-center border-t border-[#EBD8C3]"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-4 text-[#2B2B2B] tracking-tight">
          Frankie’s got your back.
        </h2>
        <p className="text-lg text-[#2B2B2B] mb-8">
          Frankie is currently in Beta. Join early and help shape the future.
        </p>
        <Link href="/join">
          <button className="bg-[#E94B4B] text-white text-lg font-semibold px-8 py-4 rounded-full shadow hover:scale-105 transition">
            Join The Beta
          </button>
        </Link>
      </div>
    </section>
  );
}
