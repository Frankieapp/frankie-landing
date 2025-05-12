import { ReactNode, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import {
  LayoutDashboard,
  BarChart2,
  FileText,
  User,
  UserPlus,
  HelpCircle,
  Mail,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user } = useUser();

  // Sync Clerk user to Supabase
  useEffect(() => {
    async function syncUser() {
      if (!user) return;

      const { data, error } = await supabase
        .from("users")
        .select("id")
        .eq("id", user.id)
        .single();

      if (!data) {
        await supabase.from("users").insert([
          {
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress,
          },
        ]);
      }
    }

    syncUser();
  }, [user]);

  return (
    <div className="min-h-screen flex bg-[#FFF8F6]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <img src="/frankie-logo.png" alt="Frankie logo" className="h-20 mb-6" />
        <nav className="space-y-4 text-[#2B2B2B]">
          <SidebarLink icon={<LayoutDashboard />} label="Dashboard" href="/dashboard" />
          <SidebarLink icon={<BarChart2 />} label="Trust Score" href="/dashboard/trust" />
          <SidebarLink icon={<FileText />} label="My Loans" href="/dashboard/loans" />
          <SidebarLink icon={<User />} label="My Profile" href="/dashboard/profile" />
          <SidebarLink icon={<UserPlus />} label="Referrals" href="/dashboard/referrals" />
          <SidebarLink icon={<HelpCircle />} label="FAQ" href="/dashboard/faq" />
          <SidebarLink icon={<Mail />} label="Contact Frankie" href="/dashboard/contact" />
          <SidebarLink icon={<LogOut />} label="Log Out" href="#" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4">Hi {user?.firstName} 👋</h1>
        <p className="text-[#6B6B6B] mb-6">You’re in good standing. Thanks for trusting Frankie.</p>
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ icon, label, href }: { icon: JSX.Element; label: string; href: string }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-lg hover:bg-[#F4E6DF]">
        {icon}
        <span className="font-medium">{label}</span>
      </a>
    </Link>
  );
}
