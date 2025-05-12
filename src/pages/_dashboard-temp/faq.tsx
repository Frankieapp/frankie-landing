"use client";

import DashboardLayout from "../../components/dashboardlayout";

export default function FAQPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Got Questions?</h1>

      <div className="space-y-6">
        {/* About Frankie */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">What is Frankie?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Frankie is a short-term, trust-based lending service. We're here to help when life throws you a curveball — no tricks, no fine print, just support when you need it most.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How is Frankie different from payday lenders?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            We’re radically transparent. No surprise fees. No cycles. Our APR is capped at 58%, and you’ll always see your full repayment up front — no stress, no games.
          </div>
        </details>

        {/* Loan Questions */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How much can I borrow?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            You can request between $100 and $400. What you’re eligible for depends on your trust score.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How long do I have to repay?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            All loans run for 65 days, with two bi-weekly repayments. It’s clear, predictable, and fair.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">When will the funds arrive?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            We send funds via Interac e-Transfer within 24–48 hours. Always fast. Never “instant.”
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">Is approval guaranteed?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Nope. We review your trust score and application carefully. If we can’t say yes, we’ll always tell you why.
          </div>
        </details>

        {/* Trust Score */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">What is a trust score?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            It’s our way of measuring reliability. It’s based on things like repayment, profile info, and how you interact with Frankie.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">Can I see my trust score?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Not yet — but it’s always working in your favor behind the scenes. You’ll feel it in approvals, perks, and more.
          </div>
        </details>

        {/* Fees & Repayment */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">What’s the Frankie Fee?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            A flat fee based on your loan amount. Always visible up front. Never hidden in fine print.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How do repayments work?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            We’ll automatically withdraw from your linked bank account on the scheduled dates. No reminders needed.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">What if I miss a payment?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            We’ll reach out with care. Missed payments affect your trust score, but we always start with grace — especially if you’re a Boost member.
          </div>
        </details>

        {/* Frankie Boost */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">What’s Frankie Boost?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            It’s our optional $2.99/month membership that gives you perks like lower fees, a late pass, and faster approvals.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">Can I cancel Boost?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Yep — anytime, with 2 taps from your profile. No guilt, no pressure.
          </div>
        </details>

        {/* Referrals */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How do referrals work?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Share your link. If a friend signs up and repays their first loan, you earn Frankie credit. Only confirmed referrals count.
          </div>
        </details>

        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">Who should I refer?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Only people you genuinely trust. Frankie is built on integrity — your referrals reflect on you.
          </div>
        </details>

        {/* Support */}
        <details className="border border-[#EBD8C3] rounded-lg p-4 bg-white">
          <summary className="font-semibold text-[#2B2B2B] cursor-pointer">How do I contact Frankie?</summary>
          <div className="mt-2 text-sm text-[#6B6B6B]">
            Tap “Contact Frankie” in your sidebar or email us at support@frankie.co. Real humans. Real help.
          </div>
        </details>
      </div>
    </DashboardLayout>
  );
}
