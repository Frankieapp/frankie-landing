// pages/sign-up.tsx

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F6] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-center mb-4">
          <img src="/frankie-logo.png" alt="Frankie logo" className="h-30" />
        </div>
        <h1 className="text-2xl font-bold text-[#2B2B2B] text-center mb-2">Let’s get you started with Frankie</h1>
        <p className="text-sm text-[#6B6B6B] text-center mb-6">Frankie is here when you need us. No fine print, ever.</p>

        <SignUp
          appearance={{
            elements: {
              card: "shadow-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton:
                "bg-white border border-[#EBD8C3] rounded-xl hover:bg-[#F4E6DF] text-[#2B2B2B] font-medium px-4 py-2",
              formFieldInput:
                "bg-[#F4E6DF] border border-[#EBD8C3] text-[#2B2B2B] placeholder:text-[#A8A8A8] rounded-xl px-4 py-2",
              formButtonPrimary:
                "bg-[#E94B4B] hover:bg-[#D94343] text-white rounded-xl py-2 font-semibold mt-4",
              footerActionText: "text-sm text-[#6B6B6B]",
              footerActionLink: "text-[#E94B4B] hover:underline",
              logoBox: "mb-4",
            },
            variables: {
              colorPrimary: "#E94B4B",
              colorBackground: "#FFF8F6",
              colorText: "#2B2B2B",
              fontFamily: "Inter, sans-serif",
            },
          }}
          signUpOptions={{
            strategy: "email_address",
            password: true,
          }}
        />
      </div>
    </div>
  );
}
