// pages/dashboard/trust.tsx
import DashboardLayout from "../../components/dashboardlayout";
import { mockTrustScore } from "../../data";
import {
  ShieldOff,
  TrendingUp,
  CheckCircle,
  Clock,
  UserCheck,
  MailCheck,
  Users,
  Gift,
  CircleDot
} from "lucide-react";

export default function TrustPage() {
  const trustTier =
    mockTrustScore >= 70 ? "ready" : mockTrustScore >= 40 ? "growing" : "building";

  const tierContent = {
    building: {
      icon: <ShieldOff className="text-red-500" />,
      label: "Getting Started",
      message: "You're new here. Let’s lay the foundation for trust.",
    },
    growing: {
      icon: <TrendingUp className="text-yellow-500" />,
      label: "On Your Way",
      message: "You’re building momentum — steady progress makes a difference.",
    },
    ready: {
      icon: <CheckCircle className="text-green-500" />,
      label: "Trusted",
      message: "You've earned our trust. You're ready for more options and perks.",
    },
  };

  return (
    <DashboardLayout>
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <div className="flex items-center gap-4 mb-2">
          {tierContent[trustTier].icon}
          <h2 className="text-2xl font-semibold text-[#2B2B2B]">Your Trust Score</h2>
        </div>
        <p className="text-4xl font-bold text-[#E94B4B]">{mockTrustScore} / 100</p>
        <p className="text-[#6B6B6B] mt-2">{tierContent[trustTier].message}</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">How We Look at Trust at Frankie</h3>
        <p className="text-[#6B6B6B] mb-4">
          At Frankie, trust isn't about numbers on a report. It is about real patterns that matter: how you repay, how you communicate, and whether your info checks out. It is not about being perfect; it is about being consistent. We are here to build trust with you, not judge you.
        </p>
        <div className="relative bg-[#FFF8F6] border border-[#EBD8C3] rounded-xl p-4">
          <div className="flex justify-between mb-4">
            <span className="flex items-center gap-2 text-[#2B2B2B]">
              <ShieldOff className="text-red-500" size={18} /> Getting Started
            </span>
            <span className="flex items-center gap-2 text-[#2B2B2B]">
              <TrendingUp className="text-yellow-500" size={18} /> On Your Way
            </span>
            <span className="flex items-center gap-2 text-[#2B2B2B]">
              <CheckCircle className="text-green-500" size={18} /> Trusted
            </span>
          </div>
          <div className="h-2 rounded-full bg-[#F4E6DF] relative">
            <div
              className="absolute top-0 h-2 rounded-full bg-[#E94B4B] transition-all"
              style={{ width: `${mockTrustScore}%` }}
            />
            <CircleDot className="absolute -top-2 text-[#E94B4B]" style={{ left: `calc(${mockTrustScore}% - 8px)` }} size={16} />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">How to Increase Your Score</h3>
        <ul className="space-y-3 text-[#2B2B2B]">
          <li className="flex items-center gap-3">
            <Clock className="text-[#E94B4B]" /> Make on-time payments
          </li>
          <li className="flex items-center gap-3">
            <UserCheck className="text-[#E94B4B]" /> Verify your identity
          </li>
          <li className="flex items-center gap-3">
            <MailCheck className="text-[#E94B4B]" /> Respond to Frankie messages
          </li>
          <li className="flex items-center gap-3">
            <Users className="text-[#E94B4B]" /> Refer trusted friends
          </li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-4">What You Unlock</h3>
        <ul className="space-y-3 text-[#2B2B2B]">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-[#34A853]" /> Bigger loan access
          </li>
          <li className="flex items-center gap-3">
            <TrendingUp className="text-[#34A853]" /> Lower Frankie Fees
          </li>
          <li className="flex items-center gap-3">
            <Gift className="text-[#34A853]" /> Boost perks and loyalty rewards
          </li>
          <li className="flex items-center gap-3">
            <MailCheck className="text-[#34A853]" /> Faster re-qualification after payment
          </li>
        </ul>
      </section>
    </DashboardLayout>
  );
}
