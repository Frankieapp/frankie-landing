"use client";

import DashboardLayout from "../../components/dashboardlayout";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useRef } from "react";
import { usePlaidLink } from "react-plaid-link";
import SignatureCanvas from "react-signature-canvas";
import { UserCircle, Banknote, ShieldCheck, CheckCircle, FileText } from "lucide-react";
import { supabase } from "lib/supabase";
import { useRouter } from "next/navigation";

const feeTable: Record<string, number> = {
  "100": 10.5,
  "125": 13.0,
  "150": 15.5,
  "175": 18.25,
  "200": 20.75,
  "225": 23.5,
  "250": 26.0,
  "275": 28.5,
  "300": 31.0,
  "325": 33.75,
  "350": 36.25,
  "375": 38.75,
  "400": 41.5,
};

const allowedAmounts = [
  100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400,
];

export default function ApplyPage() {
  const router = useRouter();
  const { user: clientUser } = useUser();
  const [loan, setLoan] = useState<any>(null);
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [formData, setFormData] = useState({
    amount: "100",
    income: "",
    rent: "",
    housingStatus: "rent",
    plaidConnected: false,
    firstName: "",
    lastName: "",
    address: "",
    disbursementEmail: "",
    confirmBank: false,
    confirmRepayment: false,
    confirmEMT: false,
  });
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [idVerified, setIdVerified] = useState(false);
  const sigCanvasRef = useRef<any>(null);

  useEffect(() => {
    if (clientUser) {
      setFormData((prev) => ({
        ...prev,
        firstName: clientUser.firstName || "",
        lastName: clientUser.lastName || "",
        address: clientUser.publicMetadata?.address || "",
        disbursementEmail: clientUser.emailAddresses[0]?.emailAddress || "",
      }));
    }
  }, [clientUser]);

  useEffect(() => {
    async function fetchLinkToken() {
      try {
        const response = await fetch("/api/plaid/create-link-token");
        const data = await response.json();
        if (data.link_token) {
          setLinkToken(data.link_token);
        } else {
          console.error("Failed to get Plaid link token", data);
        }
      } catch (err) {
        console.error("Error fetching Plaid link token", err);
      }
    }
    fetchLinkToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken || "",
    onSuccess: async (public_token, metadata) => {
        try {
          const response = await fetch("/api/plaid/exchange-public-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ public_token }),
          });
          const data = await response.json();
      
          if (data.access_token) {
            setFormData((prev) => ({ ...prev, plaidConnected: true }));
            console.log("Access token stored:", data.access_token);
          } else {
            console.error("Plaid exchange failed", data);
          }
        } catch (err) {
          console.error("Error exchanging public token", err);
        }
      },      
    onExit: (err, metadata) => {
      console.warn("Plaid exited", err, metadata);
    },
  });

  const frankieFee = feeTable[formData.amount] ?? 0;
  const totalRepayment = Number(formData.amount) + frankieFee;
  const today = new Date();
  const firstPaymentDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
  const secondPaymentDate = new Date(firstPaymentDate.getTime() + 14 * 24 * 60 * 60 * 1000);

  const isSignatureEmpty = () => sigCanvasRef.current?.isEmpty();

  const allConfirmed =
    formData.confirmBank &&
    formData.confirmRepayment &&
    formData.confirmEMT &&
    formData.disbursementEmail &&
    !isSignatureEmpty();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
      
        if (!allConfirmed) return;
      
        const fee = frankieFee;
        const total = totalRepayment;
      
        const { data, error } = await supabase.from("loans").insert([
          {
            user_id: clientUser?.id,
            amount: Number(formData.amount),
            fee,
            total,
            status: "pending",
            due_date: firstPaymentDate.toISOString(),
            repayment_due_1: firstPaymentDate.toISOString(),
            repayment_due_2: secondPaymentDate.toISOString(),
          },
        ]);
      
        if (error) {
          console.error("Loan creation failed:", error);
        } else {
          console.log("Loan created:", data);
          setLoan(data[0]); // to show confirmation UI
        }
      }
      
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-2">Apply for a Frankie Loan</h1>
      <p className="mb-8 text-sm text-[#6B6B6B]">Quick, clear, and kind. Let’s get started.</p>

      {!loan && !showLoanForm && (
        <button
          onClick={() => setShowLoanForm(true)}
          className="bg-[#E94B4B] hover:bg-red-500 text-white font-semibold px-5 py-3 rounded-full shadow"
        >
          I'd Like to Borrow Money
        </button>
      )}

      {showLoanForm && (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className="bg-white p-5 rounded-xl border border-[#EBD8C3]">
            <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-2">
              <UserCircle className="w-5 h-5" /> Your Information
            </div>
            <p className="text-sm text-[#6B6B6B] mb-2">Auto-filled from your profile.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input type="text" disabled value={formData.firstName} className="w-full p-2 border rounded bg-[#F4E6DF]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" disabled value={formData.lastName} className="w-full p-2 border rounded bg-[#F4E6DF]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Home Address</label>
                <input type="text" disabled value={formData.address} className="w-full p-2 border rounded bg-[#F4E6DF]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Email for Interac e-Transfer</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.disbursementEmail}
                  onChange={(e) => setFormData({ ...formData, disbursementEmail: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Loan Amount */}
          <div className="bg-white p-5 rounded-xl border border-[#EBD8C3]">
            <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-2">
              <CheckCircle className="w-5 h-5" /> Your Loan Options
            </div>
            <label className="block text-sm font-medium mb-1">Select Loan Amount</label>
            <select
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full p-2 border rounded"
            >
              {allowedAmounts.map((value) => (
                <option key={value} value={value}>{`$${value}`}</option>
              ))}
            </select>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Term: 65 days • Payments withdrawn bi-weekly, starting 2 weeks after loan approval.
            </p>
            <p className="text-sm text-[#6B6B6B] mb-3">We’ll pull repayment from your bank, but this helps us understand your finances.</p>
            <button
              type="button"
              onClick={open}
              disabled={!ready}
              className="bg-[#2B2B2B] text-white px-4 py-2 rounded-full mb-4"
            >
              {formData.plaidConnected ? "Bank Connected ✅" : "Securely Link Your Bank"}
            </button>
            <input
              type="number"
              placeholder="Monthly Income"
              value={formData.income}
              onChange={(e) => setFormData({ ...formData, income: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Monthly Rent or Mortgage"
              value={formData.rent}
              onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
              className="w-full p-2 border rounded mt-2"
            />
            <select
              value={formData.housingStatus}
              onChange={(e) => setFormData({ ...formData, housingStatus: e.target.value })}
              className="w-full p-2 border rounded mt-2"
            >
              <option value="rent">I rent</option>
              <option value="own">I own</option>
            </select>
          </div>

          {/* Confirmations */}
          <div className="bg-white p-5 rounded-xl border border-[#EBD8C3] space-y-3">
            <label className="flex gap-2 text-sm">
              <input type="checkbox" checked={formData.confirmBank} onChange={(e) => setFormData({ ...formData, confirmBank: e.target.checked })} />
              I confirm I have a Canadian bank account
            </label>
            <label className="flex gap-2 text-sm">
              <input type="checkbox" checked={formData.confirmRepayment} onChange={(e) => setFormData({ ...formData, confirmRepayment: e.target.checked })} />
              I understand repayments are withdrawn automatically from my bank
            </label>
            <label className="flex gap-2 text-sm">
              <input type="checkbox" checked={formData.confirmEMT} onChange={(e) => setFormData({ ...formData, confirmEMT: e.target.checked })} />
              I agree to receive funds via Interac e-Transfer
            </label>
          </div>

          {/* Signature */}
          <div className="bg-white p-5 rounded-xl border border-[#EBD8C3]">
            <label className="block text-sm font-medium mb-2">Draw your signature</label>
            <SignatureCanvas
              penColor="#2B2B2B"
              canvasProps={{ width: 400, height: 150, className: "rounded border border-gray-300" }}
              ref={sigCanvasRef}
            />
          </div>

          {/* Summary */}
          <div className="bg-white p-5 rounded-xl border border-[#EBD8C3]">
            <div className="flex items-center gap-2 text-[#E94B4B] font-semibold mb-4">
              <FileText className="w-5 h-5" /> Review Your Loan Summary
            </div>
            <p><strong>Loan Amount:</strong> ${formData.amount}</p>
            <p><strong>Frankie Fee (estimated):</strong> ${frankieFee}</p>
            <p><strong>Estimated Bi-weekly Payments:</strong> ${Math.round(totalRepayment / 2)}</p>
            <p><strong>Term:</strong> 65 days (2 bi-weekly payments)</p>
            <p><strong>Repayment Starts:</strong> {firstPaymentDate.toDateString()}</p>
            <p><strong>Second Payment:</strong> {secondPaymentDate.toDateString()}</p>
            <p><strong>Bank Linked:</strong> {formData.plaidConnected ? "Yes" : "No"}</p>
            <p><strong>ID Verified:</strong> {idVerified ? "Yes" : "No"}</p>
            <p><strong>Income Provided:</strong> ${formData.income || "Not Provided"}</p>
            <p><strong>Housing:</strong> {formData.housingStatus}</p>
            <button
              type="submit"
              disabled={!allConfirmed}
              className="mt-4 bg-[#E94B4B] text-white px-6 py-2 rounded-full disabled:opacity-50"
            >
              Submit My Loan Request
            </button>
          </div>
        </form>
      )}
    </DashboardLayout>
  );
}
