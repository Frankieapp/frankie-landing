// pages/dashboard/loans.tsx
import DashboardLayout from "../../components/dashboardlayout";
import { mockLoan, mockLoanHistory } from "../../data";
import { CreditCard, CalendarCheck, BadgeCheck, Clock } from "lucide-react";
import Link from "next/link";

export default function MyLoansPage() {
  const hasLoan = mockLoan && mockLoan.status === "active";

  return (
    <DashboardLayout>
      <section className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-2">My Loans</h2>
        <p className="text-[#6B6B6B] mb-4">
          A clear look at your loan activity with Frankie — past and present.
        </p>

        {hasLoan ? (
          <div className="border border-[#EBD8C3] p-4 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 text-[#2B2B2B] font-medium">
                <CreditCard /> Active Loan
              </span>
              <span className="text-[#E94B4B] font-semibold">${mockLoan.amount}</span>
            </div>
            <p className="text-[#6B6B6B]">Due: {mockLoan.dueDate} • {mockLoan.termDays} days</p>
          </div>
        ) : (
          <div className="text-center mb-6">
            <p className="text-[#6B6B6B] italic mb-3">You don’t have an active loan right now.</p>
            <Link href="/dashboard/apply" legacyBehavior>
              <a className="inline-block bg-[#E94B4B] hover:bg-[#D94343] text-white font-semibold py-2 px-6 rounded-xl">
                Apply for a Loan
              </a>
            </Link>
          </div>
        )}

        <h3 className="text-xl font-semibold text-[#2B2B2B] mb-3">Past Loans</h3>
        <div className="space-y-4">
          {Array.isArray(mockLoanHistory) && mockLoanHistory.map((loan) => (
            <div key={loan.id} className="border border-[#EBD8C3] p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[#2B2B2B]">
                  <CalendarCheck className="text-[#34A853]" />
                  {loan.startDate} – {loan.endDate}
                </span>
                <span className="text-[#2B2B2B] font-semibold">${loan.amount}</span>
              </div>
              <div className="mt-1 text-sm text-[#6B6B6B]">
                Status: {loan.status === "paid" ? (
                  <span className="text-[#34A853] font-medium flex items-center gap-1">
                    <BadgeCheck size={16} /> Paid in full
                  </span>
                ) : (
                  <span className="text-red-500 font-medium flex items-center gap-1">
                    <Clock size={16} /> {loan.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
