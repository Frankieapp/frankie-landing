"use client";

import { useEffect, useState } from "react";
import { supabase } from "lib/supabase";
import DashboardLayout from "../../components/dashboardlayout";


export default function ProfileDebugPage() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const { data, error } = await supabase
        .from("users")
        .select("email, trust_score, frankie_plus, created_at")
        .single();

      if (error) {
        console.error("Failed to fetch user:", error);
      } else {
        setUserData(data);
      }
      setLoading(false);
    }

    fetchUser();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4">Debug: Current User</h1>
      {loading ? (
        <p className="text-sm text-[#6B6B6B]">Loading...</p>
      ) : userData ? (
        <div className="bg-white p-4 rounded-xl border border-[#EBD8C3] space-y-2 text-sm text-[#2B2B2B]">
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Trust Score:</strong> {userData.trust_score}</p>
          <p><strong>Frankie Plus:</strong> {userData.frankie_plus ? "Yes" : "No"}</p>
          <p><strong>Created At:</strong> {new Date(userData.created_at).toLocaleString()}</p>
        </div>
      ) : (
        <p className="text-red-600 text-sm">No user data found.</p>
      )}
    </DashboardLayout>
  );
}
