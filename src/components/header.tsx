import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/topbar";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="bg-[#FFF8F6] sticky top-0 z-40 border-b border-[#EBD8C3]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo with tagline */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/frankie-logo.png"
              alt="Frankie Logo"
              width={100}
              height={100}
              priority
            />
            <span className="text-xl font-bold text-[#E94B4B]"></span>
            <span className="ml-2 text-sm font-medium text-[#F37C6C]">
              / no B.S. loans
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#2B2B2B]">
            <Link
              href="/about"
              className="hover:text-[#E94B4B] hover:border-b-2 border-[#E94B4B] transition"
            >
              About
            </Link>
            <Link
              href="/howfrankieworks"
              className="hover:text-[#E94B4B] hover:border-b-2 border-[#E94B4B] transition"
            >
              How Frankie Works
            </Link>
            <Link
              href="/frankieplus"
              className="hover:text-[#E94B4B] hover:border-b-2 border-[#E94B4B] transition"
            >
              Frankie Plus
            </Link>
            <Link
              href="/faqs"
              className="hover:text-[#E94B4B] hover:border-b-2 border-[#E94B4B] transition"
            >
              FAQs
            </Link>
          </nav>

          {/* Join the Beta Button */}
          <div className="flex items-center">
            <Link href="/join">
              <button className="bg-[#E94B4B] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-sm hover:scale-105 transition">
                Join the Beta
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
