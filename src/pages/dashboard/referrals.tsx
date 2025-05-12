"use client";

import DashboardLayout from "../../components/dashboardlayout";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { UserPlus, CheckCircle } from "lucide-react";

export default function ReferralsPage() {
  const { user } = useUser();
  const [referralCount, setReferralCount] = useState(0);
  const [referralLink, setReferralLink] = useState("");

  useEffect(() => {
    if (user) {
      const id = user.id;
      setReferralLink(`${process.env.NEXT_PUBLIC_SITE_URL}/signup?ref=${id}`);
      // Optional: fetch referral stats from backend
      fetch("/api/user/referrals")
        .then((res) => res.json())
        .then((data) => setReferralCount(data.count || 0));
    }
  }, [user]);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-2">Refer a Friend</h1>
      <p className="mb-6 text-sm text-[#6B6B6B]">
        Frankie is built on trust. If someone you care about is in a tight spot, you can help them get access to a kind, clear loan. When they take out and repay their first loan, you'll both benefit.
      </p>

      <div className="bg-white border border-[#EBD8C3] rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-[#E94B4B] font-semibold">
          <UserPlus className="w-5 h-5" /> Your Referral Link
        </div>
        <input
          type="text"
          readOnly
          value={referralLink}
          className="w-full p-2 border rounded bg-[#F4E6DF] text-sm"
          onClick={(e) => e.currentTarget.select()}
        />
        <p className="text-sm text-[#6B6B6B]">
          Share this link with someone you genuinely trust. They must use it to sign up. A referral only counts when your friend successfully repays their first loan because trust means follow-through.
        </p>

        <div className="pt-4">
          <p className="text-md font-semibold">Confirmed Referrals</p>
          <p className="text-2xl text-[#2B2B2B] font-bold">{referralCount} {referralCount === 1 ? "person" : "people"}</p>
          <p className="text-sm text-[#6B6B6B] mt-1">
            Refer 5 friends who repay their first loan and you'll earn a $5 Frankie credit. We believe in meaningful referrals, so only refer people who will treat Frankie with care.
          </p>
          {referralCount >= 5 && (
            <div className="mt-3 inline-flex items-center text-green-600 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-1" /> Reward Unlocked!
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
