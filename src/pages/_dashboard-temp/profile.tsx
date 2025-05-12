"use client";

import DashboardLayout from "../../components/dashboardlayout";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CheckCircle, ShieldCheck, Link, Mail, Phone, Briefcase, User } from "lucide-react";

export default function MyProfilePage() {
  const { user } = useUser();
  const [idStatus, setIdStatus] = useState("pending"); // 'verified' | 'pending' | 'failed'
  const [plaidStatus, setPlaidStatus] = useState(false);
  const [lastLogin, setLastLogin] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [referencePhone, setReferencePhone] = useState("");

  useEffect(() => {
    if (user) {
      setLastLogin(user.lastSignInAt?.toLocaleString() || "");
      // Mock fetching ID verification and Plaid status from your backend
      fetch("/api/user/verification-status")
        .then((res) => res.json())
        .then((data) => {
          setIdStatus(data.idVerified ? "verified" : "pending");
          setPlaidStatus(data.plaidConnected);
        });
    }
  }, [user]);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-2">My Profile</h1>
      <p className="mb-6 text-sm text-[#6B6B6B]">Manage your identity, bank link, and personal info.</p>

      <div className="space-y-6">
        {/* Identity Section */}
        <div className="bg-white border border-[#EBD8C3] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-2">
            <ShieldCheck className="w-5 h-5" /> Identity Verification
          </div>
          <p className="text-sm text-[#6B6B6B] mb-3">
            We verify your ID to stay compliant with Canadian lending laws.
          </p>
          <div className="flex items-center justify-between">
            <p>Status: <strong>{idStatus === "verified" ? "Verified ✅" : idStatus === "failed" ? "Failed ❌" : "Pending ⏳"}</strong></p>
            {idStatus !== "verified" && (
              <a
                href="/api/stripe/verify"
                className="text-white bg-[#2B2B2B] px-4 py-2 rounded-full text-sm"
              >
                Start Verification
              </a>
            )}
          </div>
        </div>

        {/* Bank Connection */}
        <div className="bg-white border border-[#EBD8C3] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-2">
            <Link className="w-5 h-5" /> Bank Connection
          </div>
          <p className="text-sm text-[#6B6B6B] mb-3">
            We securely connect to your bank using Plaid.
          </p>
          <div className="flex items-center justify-between">
            <p>Status: <strong>{plaidStatus ? "Connected ✅" : "Not Connected ❌"}</strong></p>
            <a
              href="/dashboard/apply"
              className="text-white bg-[#2B2B2B] px-4 py-2 rounded-full text-sm"
            >
              {plaidStatus ? "Reconnect" : "Link Bank"}
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white border border-[#EBD8C3] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-[#E94B4B] font-semibold">
            <User className="w-5 h-5" /> Additional Information
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 647-555-1234"
              defaultValue={user?.phoneNumbers?.[0]?.phoneNumber || ""}
              className="w-full p-2 border rounded"
              disabled
            />
            <p className="text-xs text-[#6B6B6B] mt-1">This number is connected via Clerk. Contact support to update.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Work Location / Employer</label>
            <input
              type="text"
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g. Shopify Toronto Office"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Reference Contact Name</label>
            <input
              type="text"
              value={referenceName}
              onChange={(e) => setReferenceName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Reference Contact Phone</label>
            <input
              type="tel"
              value={referencePhone}
              onChange={(e) => setReferencePhone(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="e.g. 416-555-7890"
            />
            <p className="text-xs text-[#6B6B6B] mt-1">We'll never contact your reference unless absolutely necessary.</p>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white border border-[#EBD8C3] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-2">
            <Mail className="w-5 h-5" /> Security & Login
          </div>
          <p className="text-sm text-[#6B6B6B] mb-3">Your account activity and access settings.</p>
          <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
          <p><strong>Last Login:</strong> {lastLogin}</p>
          <button className="mt-4 text-white bg-[#2B2B2B] px-4 py-2 rounded-full text-sm">
            Log Out Everywhere
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}