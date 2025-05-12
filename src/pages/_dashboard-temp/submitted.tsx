import DashboardLayout from "../../components/dashboardlayout";

export default function SubmittedPage() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-xl border border-[#EBD8C3] max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2B2B2B] mb-4">
          Your loan request is in 📨
        </h2>
        <p className="text-sm text-[#6B6B6B] mb-4">
          Thanks for applying with Frankie. We have received your request and we are now taking a closer look.
        </p>
        <div className="text-sm text-[#2B2B2B] bg-[#FFF8F6] p-4 rounded-lg border border-[#F4E6DF] text-left">
          <p className="mb-2"><strong>Here is what happens next:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>We will review your profile and trust history.</li>
            <li>You will get an email update within 24 hours (often sooner).</li>
            <li>If approved, funds will be sent via Interac e-Transfer within 24–48 hours.</li>
            <li>If we need anything else, we will reach out directly.</li>
          </ul>
        </div>
        <p className="text-xs text-[#6B6B6B] mt-6">
          Questions? Just head to “Contact Frankie” in your sidebar. We are real humans and always here to help.
        </p>
      </div>
    </DashboardLayout>
  );
}
