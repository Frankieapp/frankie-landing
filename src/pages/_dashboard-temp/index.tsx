// pages/dashboard/index.tsx
import DashboardLayout from "../../components/dashboardlayout";
import { mockTrustScore, mockLoan } from "../../data";

export default function DashboardHome() {
  const hasLoan = mockLoan && mockLoan.status === "active";

  return (
    <DashboardLayout>
      {/* Trust Score Card */}
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-[#2B2B2B] mb-2">Your Trust Score</h2>
        <p className="text-4xl font-bold text-[#E94B4B]">{mockTrustScore} / 100</p>
        <p className="text-[#6B6B6B] mt-1">
          {mockTrustScore >= 70
            ? "You're pre-approved for your next loan."
            : mockTrustScore >= 40
            ? "You're getting closer to pre-approval. Keep it up!"
            : "Let’s build trust together. Start by verifying your profile."}
        </p>
      </section>

      {/* Loan Section */}
      {hasLoan ? (
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-[#2B2B2B] mb-2">Your Active Loan</h2>
          <ul className="text-[#2B2B2B] space-y-1">
            <li>💵 Amount: <strong>${mockLoan.amount}</strong></li>
            <li>📆 Due in: <strong>{mockLoan.dueDate}</strong></li>
            <li>⏱️ Term: <strong>{mockLoan.termDays} days</strong></li>
            <li>💳 Card: <strong>VISA •••• {mockLoan.cardLast4}</strong></li>
          </ul>
          <button className="mt-4 bg-[#E94B4B] hover:bg-[#D94343] text-white font-semibold py-2 px-4 rounded-xl">
            Make a Payment
          </button>
        </section>
      ) : (
        <section className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold text-[#2B2B2B] mb-2">No Active Loan</h2>
          <p className="text-[#6B6B6B] mb-4">
            You don't have an active loan right now. If you need support, we're here.
          </p>
          <button className="bg-[#E94B4B] hover:bg-[#D94343] text-white font-semibold py-2 px-6 rounded-xl">
            Apply for a Loan
          </button>
        </section>
      )}
    </DashboardLayout>
  );
}
