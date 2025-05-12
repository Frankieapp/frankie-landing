import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-[#EBD8C3] p-6 hidden md:flex flex-col justify-between sticky top-0 h-screen">
      <div>
        <div className="flex items-center mb-6">
          <Image src="/frankie-logo.png" alt="Frankie logo" width={32} height={32} />
          <h2 className="ml-2 text-xl font-bold text-[#E94B4B]">Frankie</h2>
        </div>
        <nav className="space-y-4 text-sm">
          <a href="#loan" className="block text-[#2B2B2B] hover:text-[#E94B4B]">Your Loan</a>
          <a href="#plus" className="block text-[#2B2B2B] hover:text-[#E94B4B]">Frankie Plus</a>
          <a href="#referrals" className="block text-[#2B2B2B] hover:text-[#E94B4B]">Referrals</a>
          <a href="#support" className="block text-[#2B2B2B] hover:text-[#E94B4B]">Support</a>
          <a href="#account" className="block text-[#2B2B2B] hover:text-[#E94B4B]">Account</a>
        </nav>
      </div>
      <footer className="text-xs text-[#A0A0A0] pt-6">
        © {new Date().getFullYear()} Frankie
      </footer>
    </aside>
  );
}
